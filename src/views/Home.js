import ComponenetShelf from "components/ComponentShelf";
import { getAllSongs } from "../firebase";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import ResponsivePlaylistShelf from "components/ResponsivePlaylistShelf";
import { Icon } from "Icons";
import User from "components/Navbar/User";
function Home(){
    const [items,setItems] = useState([])
    
    const windowWith = useWindowWidth()
    
    const {user} = useSelector(state => state.auth)
    
    useEffect(() => {
        setItems([])
        if(windowWith >= 768) {
            getAllSongs().then(res => res.forEach(doc => {setItems(prev => [...prev, doc.data()])}))
        } else {
            if(user){

                setItems([user.liked, ...user.playlists])
            }
        }
    }, [windowWith, user.liked, user.playlists])

    return windowWith >= 768 ? (
        <div className="grid gap-y-6  px-8  pt-6">
            <ComponenetShelf title={`${user?.username || "Senin"} İçin Derlendi`} more="/blabla" items={items}/>
        </div>
    ) : (
        <div className="flex flex-col">
            <div className="p-3 h-[4.5rem] flex items-center justify-end">
                <button className="h-12 w-12 flex items-center justify-center shrink-0">
                    <Icon size={24} name="settings" />
                </button>
                <User />
            </div>
            <ResponsivePlaylistShelf title="Kısayollar" items={items} />
            
        </div>
    )
}

export default Home;