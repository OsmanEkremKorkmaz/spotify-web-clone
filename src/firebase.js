import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import toast from "react-hot-toast";
import store from "./redux/store";
import { userHandle } from "utils";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);


export const updateProfilePhoto = async (file) => {
    
    const storageRef = ref(storage, "profilePhotos/" + auth.currentUser.uid)
    const userRef = doc(db,"users",auth.currentUser.uid)
    if(!file){
        const res = await updateDoc(userRef,{
            profilePhoto:false
        })
        return res
    }
    const metadata = {
        contentType: 'image/jpeg',
    };
    const uploadTask = uploadBytes(storageRef, file, metadata);
    const imgUrl = await getDownloadURL(storageRef)
    const res = await updateDoc(userRef,{
        profilePhoto:imgUrl
    })
    return res
}
        
export const updateProfileData = async (data) => {
    try {
        const ref = doc(db,"users",auth.currentUser.uid)
        const res = await updateDoc(ref,data)
        const dbUser = await getDoc(doc(db, "users", auth.currentUser.uid));
        userHandle({ uid:auth.currentUser.uid,  ...dbUser.data()})
        return res
    } catch (e) {
        toast.error(e)
    }
}


export const getUserInfo = async (user_id) => {
    try {
        const user = await getDoc(doc(db, "users", user_id))
        return  {uid:user_id ,  ...user.data()}
    } catch(e) {
        toast.error(e)
    }
}

export const follow = async (user_id) => {
    try {
        const ref = doc(db,"users",auth.currentUser.uid)
        const dbUser = await getDoc(ref);
        const res = await updateDoc(ref,{
            following: [ user_id , ...dbUser.data().following]
        })

        const followRef = doc(db,"users",user_id)
        const dbFollowUser = await getDoc(followRef);
        const followRes = await updateDoc(followRef,{
            followers: [ auth.currentUser.uid , ...dbFollowUser.data().followers]
        })
        userHandle({ uid:auth.currentUser.uid,  ...dbUser.data()})
        return {res,followRes}
    } catch (e) {
        console.log(e)
        toast.error(e)
    }
}
export const unfollow = async (user_id) => {
    try {
        const ref = doc(db,"users",auth.currentUser.uid)
        const dbUser = await getDoc(ref);
        const res = await updateDoc(ref,{
            following: dbUser.data().following.filter(user => user !== user_id)
        })

        console.log(dbUser.data().following.filter(user => user !== user_id))

        const followRef = doc(db,"users",user_id)
        const dbFollowUser = await getDoc(followRef);
        const followRes = await updateDoc(followRef,{
            followers: dbFollowUser.data().followers.filter(user => user !== auth.currentUser.uid)
        })
        console.log(dbFollowUser.data().followers.filter(user => user !== user_id));
        userHandle({ uid:auth.currentUser.uid,  ...dbUser.data()})
        return {res,followRes}
    } catch (e) {
        console.log(e)
        toast.error(e)
    }
}

export const register = async ({email, password, username}) => {
    try{

        const {user} = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)

        if(user){

            await setDoc(doc(db, "users", user.uid), {
                username,
                email,
                password,
                followers: [],
                following: [],
                playlists: [],
                profilePhoto: false,
                liked: []
            })

            await updateProfile(auth.currentUser, {
                displayName: username
            })

        }
        
        return user


    } catch (error) {
        toast.error(error.message)
    }
}

export const login = async (email, password) => {
    try{
        const {user} = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        toast.error(error.message)
    }
}

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        toast.error(error.message);
    }
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const dbUser = await getDoc(doc(db, "users", user.uid));
        let data = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            ...dbUser.data(),
        }
        userHandle(data)
    } else {
        userHandle(false)
    }
  });

export default app
