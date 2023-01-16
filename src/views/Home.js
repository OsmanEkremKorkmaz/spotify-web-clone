import ComponenetShelf from "components/ComponentShelf";
import { getAllSongs } from "../firebase";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function Home(){
    const [items,setItems] = useState([])
    useEffect(() => {
        setItems([])
        console.log("mesi");
        getAllSongs().then(res => res.forEach(doc => {setItems(prev => [...prev, doc.data()])}))
    }, [getAllSongs])
    console.log(items);

    const {user} = useSelector(state => state.auth)

    return (
        <div className="grid gap-y-6  px-8  pt-6">
            <ComponenetShelf title={`${user?.username || "Senin"} İçin Derlendi`} more="/blabla" items={items}/>
        </div>
    )
}

export default Home;