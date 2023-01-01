import { useLocation } from "react-router-dom";
import Navigation from "./Navbar/Navigation";
import Search from "./Navbar/Search";
import Types from "./Navbar/Types";
import User from "./Navbar/User";

function Navbar(){

    const location = useLocation();

    return (
        <nav className="sticky top-0 h-16 flex items-center justify-between px-8 py-4 z-50">
            <Navigation />

            {location.pathname.startsWith("/search") ? <Search/> : null}
            {location.pathname.startsWith("/collection") && location.pathname !== "/collection/tracks" ? <Types /> : null}

            <User />
        </nav>
    )
}

export default Navbar;