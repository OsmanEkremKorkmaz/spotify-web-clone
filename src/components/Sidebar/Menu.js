import { Icon } from "Icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Menu(){

    const [active, setActive] = useState('home')

    const activate = (isActive, path, activeStyle, nonActiveStyle) => {
        if (isActive) {
        setActive(path)
        return activeStyle
        }
        return nonActiveStyle
    }

    return (
        <>
            <nav className="px-2">
                <ul className="flex flex-col">
                    <li>
                        <NavLink style={(activeNav) => activate(activeNav.isActive, 'home')} to={"/"} className={(navdata) => `h-10 flex gap-x-4 items-center text-sm font-bold ${navdata.isActive ? "text-white" : "text-link"} rounded hover:text-white px-4`}>
                            <span>
                                <Icon name={active === "home" ? "homeActive" : "home"} />
                            </span>
                            Ana sayfa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={(activeNav) => activate(activeNav.isActive, 'search')} to={"/search"} className={(navdata) => `h-10 flex gap-x-4 items-center text-sm font-bold ${navdata.isActive ? "text-white" : "text-link"} rounded hover:text-white px-4`}>
                            <span>
                                <Icon name={active === "search" ? "searchActive" : "search"} />
                            </span>
                            Ara
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={(activeNav) => activate(activeNav.isActive, 'collection')} to={"/collection/playlists"} className={(navdata) => `h-10 flex gap-x-4 items-center text-sm font-bold ${navdata.isActive ? "text-white" : "text-link"} rounded hover:text-white px-4`}>
                            <span>
                                <Icon name={active === "collection" ? "collectionActive" : "collection"} />
                            </span>
                            Kitaplığın
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className="mt-6">
                <ul>
                    <li>
                        <a href="#" className="py-2 px-6 flex items-center text-sm font-bold text-white opacity-70 hover:opacity-100">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 rounded-sm bg-white text-black">
                                <Icon name="plus" size={12}/>
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <NavLink to={"/collection/tracks"} className={(navdata) => `py-2 px-6 flex items-center text-sm font-bold text-white ${navdata.isActive ? "opacity-100" : "opacity-70"} hover:opacity-100`}>
                            <span className="w-6 h-6 flex items-center justify-center mr-4 rounded-sm bg-gradient-to-br from-[#450af5] to-[#c4efd9]">
                                <Icon name="heartFilled" size={12} />
                            </span>
                            Beğenilen Şarkılar
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;