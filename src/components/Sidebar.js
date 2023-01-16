import logo from "img/logo.svg"
import Menu from "components/Sidebar/Menu";
import Playlist from "./Sidebar/Playlists";
import DownloadApp from "./Sidebar/DownloadApp";
import {useSelector} from "react-redux"
import SidebarCover from "./Sidebar/SidebarCover";

function Sidebar(){

    const sidebar = useSelector(state => state.player.sidebar)

    return (
        <aside className="w-[241px] pt-6 flex z-10 flex-shrink-0 flex-col bg-black">
            <a href="/" className="mb-[25.2px] px-6 h-[47.2px]">
                <img src={logo} alt="" className="h-10 w-[131px]"/>
            </a>

            <Menu />

            <div className="h-[1px] mx-6 mt-2 bg-active"></div>

            <Playlist />

            <DownloadApp />

            {sidebar && <SidebarCover />}
        </aside>
    )
}

export default Sidebar;