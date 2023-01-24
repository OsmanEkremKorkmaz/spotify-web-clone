import { useWindowWidth } from "@react-hook/window-size";
import { Icon } from "Icons";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navbar/Navigation";
import Search from "./Navbar/Search";
import Types from "./Navbar/Types";
import User from "./Navbar/User";

function Navbar(){

    const location = useLocation();
    const windowWith = useWindowWidth()

    return (
        <nav className="sticky top-0 h-16 flex gap-x-2 items-center justify-between px-8 py-4 z-20">
            <Navigation />

            {location.pathname.startsWith("/search") ? <Search/> : null}
            {location.pathname.startsWith("/collection") && location.pathname !== "/collection/tracks" ? <Types /> : null}
            {location.pathname !== "/add" ? <Link className="z-[500] bg-black bg-opacity-70 flex gap-x-2 group font-medium text-white hover:scale-105 transition-all px-6 py-2 rounded-full" to="/add" >Upload Song<Icon name="cloudUpload" /></Link> : null}
            <User />
        </nav>
    )
}

export default Navbar;