import { getPlaylist } from '../firebase'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function PlaylistItem({item}) {

    const [playlist, setPlaylist] = useState(false)

    useEffect(() => {
        getPlaylist(item).then(res => setPlaylist(res))
    }, [item])

  return playlist && (
    <Link className=' shrink-0 w-[40%] before:content-none before:pb-[100%] flex flex-col items-center justify-center gap-y-2' to={playlist.href}>
        <img 
            alt={playlist.name} 
            src={playlist.cover}
            className="object-cover" 
        />
        <span className='h-12 text-[0.815rem] font-bold pt-0.5'>
            {playlist.name}
        </span>
    </Link>
  )
}
