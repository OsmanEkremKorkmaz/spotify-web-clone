import { Icon } from 'Icons'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function BottomNavbar() {

    const [active, setActive] = useState('home')

    const activate = (isActive, path, activeStyle, nonActiveStyle) => {
        if (isActive) {
        setActive(path)
        return activeStyle
        }
        return nonActiveStyle
    }

  return (
    <ul className='w-full  max-h-[70px] min-h-[70px] z-10 flex items-center justify-around '>
        <li>
        <NavLink style={(activeNav) => activate(activeNav.isActive, 'home')} to={"/"} className={(navdata) => `h-full flex-col gap-y-1 flex items-center font-normal text-[0.6875rem] ${navdata.isActive ? "text-white" : "text-link"} rounded hover:text-white px-4`}>
            <span>
                <Icon name={active === "home" ? "homeActive" : "home"} />
            </span>
            Ana sayfa
        </NavLink>
    </li>
    <li>
        <NavLink style={(activeNav) => activate(activeNav.isActive, 'search')} to={"/search"} className={(navdata) => `h-full flex-col gap-y-1 flex items-center font-normal text-[0.6875rem] ${navdata.isActive ? "text-white" : "text-link"} rounded hover:text-white px-4`}>
            <span>
                <Icon name={active === "search" ? "searchActive" : "search"} />
            </span>
            Ara
        </NavLink>
    </li>
    <li>
        <NavLink style={(activeNav) => activate(activeNav.isActive, 'collection')} to={"/collection/playlists"} className={(navdata) => `h-full flex-col gap-y-1 flex items-center font-normal text-[0.6875rem] ${navdata.isActive ? "text-white" : "text-link"} rounded hover:text-white px-4`}>
            <span>
                <Icon name={active === "collection" ? "collectionActive" : "collection"} />
            </span>
            Kitaplığın
        </NavLink>
    </li>
    </ul>
  )
}
