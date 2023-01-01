import ComponenetShelf from "components/ComponentShelf";
import items from "data/songs";
import { useSelector } from "react-redux";
function Home(){

    const {user} = useSelector(state => state.auth)

    return (
        <div className="grid gap-y-6  px-8  pt-6">
            <ComponenetShelf title="Yakınlarda çalınanlar" more="/blabla" items={items}/>
            <ComponenetShelf title={`${user.username || "Senin"} İçin Derlendi`} more="/blabla" items={items}/>
            <ComponenetShelf title="En çok dinlediğin mix'ler" more="/blabla" items={items}/>
        </div>
    )
}

export default Home;