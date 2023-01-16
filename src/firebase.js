import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, updateCurrentUser } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { child, get, getDatabase, ref, remove, set, update } from "firebase/database";
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
    databaseURL: process.env.REACT_APP_DATABASE_URL,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const realtimeDB = getDatabase(app);


export const updateProfilePhoto = async (file) => {
    
    const storage_ref = storageRef(storage, "profilePhotos/" + auth.currentUser.uid)
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
    const uploadTask = uploadBytes(storage_ref, file, metadata);
    const imgUrl = await getDownloadURL(storage_ref)
    updateProfile(auth.currentUser, {
        photoURL: imgUrl
    })
    const res = await updateDoc(userRef,{
        profilePhoto:imgUrl
    })
    return res
}

        
export const updateProfileData = async (data) => {
    try {
        const ref = doc(db, "users", auth.currentUser.uid)
        const res = await updateDoc(ref,data)
        const dbUser = await getDoc(ref);
        userHandle({ uid:auth.currentUser.uid,  ...dbUser.data()})
        return res
    } catch (e) {
        toast.error(e)
    }
}

export const updateRedux = async () => {
    const user = auth.currentUser
    const dbUser = await getUserInfo(user.uid)
        let data = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            ...dbUser,
        }
        userHandle(data)
}


export const getUserInfo = async (id) => {
    try {
        const user = await getDoc(doc(db, "users", id))
        return  {uid:id ,  ...user.data()}
    } catch(e) {
        toast.error(e)
    }
}

export const getPlaylist = async (id) => {
    try {
        const docRef = doc(db, "playlists", id)
        const playlist = await getDoc(docRef);
        return playlist.data()
    } catch(e) {
        console.log(e)
    }
}
export const getAllSongs = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "songs"));
        return querySnapshot
    } catch(e) {
        console.log(e)
    }
}

export const getSongById = async (id) => {
    try {
        const querySnapshot = await getDoc(doc(db, "songs", id));
        return querySnapshot.data()
    } catch(e) {
        console.log(e)
    }
}

export const addSong = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "songs"), {
            name:data.name,
            album:data.album,
            artist:data.artist,
            cover:"",
            src:"",
            duration:0
        });
        console.log(docRef.id);
        const cover_ref = storageRef(storage, "covers/" + docRef.id)
        const coverMetadata = {
            contentType: 'image/jpeg',
        };

        const coverUploadTask = await uploadBytes(cover_ref, data.img, coverMetadata);
        const imgUrl = await getDownloadURL(cover_ref)


        const song_ref = storageRef(storage, "songs/" + docRef.id)
        const songMetadata = {
            contentType: 'audio/mp3',
        };
        const srcUploadTask = await uploadBytes(song_ref, data.src, songMetadata);
        const src = await getDownloadURL(song_ref)
        let duration = 0
        const res = await updateDoc(docRef,{
            cover:imgUrl,
            src,
            duration,
            id:docRef.id
        })

        return res
    } catch(e) {
        console.log(e)
    }
}

export const likeSong = async (id) => {
    try {
        const dbUser = await getDoc(doc(db, "users", auth.currentUser.uid));
        console.log(dbUser.data());
        const ref = doc(db, "playlists", dbUser.data().liked)
        const liked = await getDoc(ref);
        console.log(liked.data());
        const res = await updateDoc(ref,{
            ...liked.data(),
            songs: [...liked.data().songs, id]
        })
        return res
        
    } catch (e) {
        console.log(e);
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
        console.log(error)
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
        await updateRedux()
    } else {
        userHandle(false)
    }
  });

export default app
