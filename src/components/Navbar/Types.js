import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Types() {
  return (
    <nav className='mr-auto ml-10'>
        <ul className='flex gap-2'>
            <NavLink to={`/collection/playlists`} className={(navdata) => `${navdata.isActive ? "bg-[#333]" : ""} py-2 px-4 rounded  inline-block`}>
                <span className='text-sm font-bold'>
                    Çalma Listeleri
                </span>
            </NavLink>
            <NavLink to={`/collection/podcasts`} className={(navdata) => `${navdata.isActive ? "bg-[#333]" : ""} py-2 px-4 rounded  inline-block`}>
                <span className='text-sm font-bold'>
                    Podcast'ler
                </span>
            </NavLink>
            <NavLink to={`/collection/artists`} className={(navdata) => `${navdata.isActive ? "bg-[#333]" : ""} py-2 px-4 rounded  inline-block`}>
                <span className='text-sm font-bold'>
                    Sanatçılar
                </span>
            </NavLink>
            <NavLink to={`/collection/albums`} className={(navdata) => `${navdata.isActive ? "bg-[#333]" : ""} py-2 px-4 rounded  inline-block`}>
                <span className='text-sm font-bold'>
                    Albümler
                </span>
            </NavLink>
        </ul>
    </nav>
  )
}
