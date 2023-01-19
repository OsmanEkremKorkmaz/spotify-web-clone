import { useWindowWidth } from "@react-hook/window-size";
import { useSelector } from "react-redux";
import BottomNavbar from "./BottomBar/BottomNavbar";
import Player from "./BottomBar/Player";

function BottomBar(){
    const windowWith = useWindowWidth()
    return <div className="fixed bottom-0 w-full bottom-navbar ">
        <Player />
        {
            windowWith >= 768 ? (
                null
            ) : <div className="flex flex-col ">
                <BottomNavbar />
            </div> 
        }
    </div> 
}

export default BottomBar;