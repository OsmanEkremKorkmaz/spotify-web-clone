import { useWindowWidth } from "@react-hook/window-size";
import { useSelector } from "react-redux";
import { useToggle } from "react-use";
import BottomNavbar from "./BottomBar/BottomNavbar";
import Player from "./BottomBar/Player";

function BottomBar(){
    const windowWith = useWindowWidth()
    const {show} = useSelector(state => state.show)
    return <div className="fixed bottom-0 w-full bottom-navbar ">
        <Player />
        {
            windowWith < 768 && !show  && <div className="flex min-w-[100vw] flex-col ">
                <BottomNavbar />
            </div> 
        }
    </div> 
}

export default BottomBar;