import { useSelector } from "react-redux";
import { NavLink} from "react-router-dom";

function Playlist(){
    const {user} = useSelector(state => state.auth)
    return (
        <>
            <nav className="mx-6 py-2 flex-auto overflow-auto">
                <ul>
                    {user?.playlists ? user?.playlists?.map((pl, i) => (<li>
                        <NavLink to={`/playlist/${pl.id}`} key={pl.id} className={(navdata) => `h-8 flex items-center text-sm font-semibold ${navdata.isActive ? "text-white" : "text-link"} hover:text-white`}>
                            {pl.name}
                        </NavLink>
                    </li>)) : <></>}
                </ul>
            </nav>    
        </>
    )
}

export default Playlist;