import React, { useEffect, useState } from 'react'
import { Icon } from 'Icons'
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, setQueue } from 'redux/player/player';
import { getPlaylist, getSongById, getUserInfo } from '../firebase';
import ProfilePhoto from './ProfilePhoto';

function SongItem({item, isNotUser=true,isPlaylist=false}) {

    const [content, setContent] = useState(item)
    const [songs, setSongs] = useState([])
    const [playlist, setPlaylist] = useState(false)

    const setSongsAsync = async (items) => {
        await items?.map(async s => await getSongAsync(s).then(song => setSongs(prev => [...prev, song])))
      }
  
      const getSongAsync = async (id) => {
        return await getSongById(id)
      }

      const setUserAsync = async (id) => {
        setUser(await getUserInfo(id))
      }

      const [user, setUser] = useState({})

      useEffect(() => {
        if(playlist){
            setUserAsync(playlist.userId)
            setSongsAsync(playlist?.songs)
            setContent({
                id:playlist.id,
                type:"album",
                image:playlist.cover,
                title:playlist.name,
                description:user.username ?`Oluşturan: ${user?.username}` : null,
                href:playlist.href
            })
        }
  
      },[playlist, setSongsAsync, user.username])
    useEffect(() => {
        if(isPlaylist){
            setSongs([])
            getPlaylist(item).then(res => setPlaylist(res))
        }

        if(!isNotUser){
            console.log(item);
            getUserInfo(item).then(user => {
                console.log(user);
                setContent({
                    id:user.uid,
                    type:"artist",
                    image:user.profilePhoto,
                    title:user.username,
                    description:"Profil"
                })
            })
        }
    },[isNotUser, isPlaylist, item]) 
    const dispatch = useDispatch();
    const {current, playing, controls} = useSelector((state) => state.player);
    const imageStyle = item => {
        if(!isNotUser) return  "rounded-full"
        switch (item.type){
            case "artist":
                return "rounded-full";
            default:
                return "rounded"
        }
    }

    const updateCurrent = e => {
        e.preventDefault()
        console.log(current,item);
        console.log(current?.id,item.id);
        if(isPlaylist && playlist){
            console.log( playlist.songs[0]);
            dispatch(setQueue(songs))
            dispatch(setCurrent((!current || current === undefined ? songs[0] : current)))

        } else {

            dispatch(setQueue([item]))    
            dispatch(setCurrent(item))
        }

        playing ? controls.pause() : controls.play()
    }

    const isCurrentItem = ((!isPlaylist ? (current?.id === item.id) : playlist?.songs?.includes(current?.id)) && playing)

  return (
        <a href={!isNotUser || content.href ? content.href || item : ""} className={`bg-footer ${!isNotUser ? "cursor-pointer" : ""} hover:bg-active p-4 rounded-lg group`} key={content.id} >
            <div className={`${isNotUser || content.image ? "pt-[100%]" : ""} relative  mb-4`}>
                
                
                { 
                (!content.image && !isNotUser )
                ? <ProfilePhoto size={150} noUser={true} classnames="!mr-0 min-w-[150px] after:pb-[100%]"/>
                : <img alt={content.title || content.name} src={content.image || content.cover} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(content)}`}/>
                }
                {content.type !== "podcast" && isNotUser && <button type='button'
                    onClick={updateCurrent}
                    className={`w-12 h-12 rounded-full bg-primary absolute bottom-2 right-2 text-black items-center justify-center group-hover:flex group-focus:flex transition-all ${!isCurrentItem ? "hidden" : "flex"}`}>
                    <Icon name={(isCurrentItem) ? "pause" : "play"} size={24}/>
                </button>}
            </div>
            <div className="min-h-[64px]">
                <div className="overflow-hidden overflow-ellipsis whitespace-nowrap pb-1 text-base font-bold leading-6">
                    {content.title || content.name}
                </div>
                <p className="line-clamp-2 text-sm leading-4 font-semibold text-subdued">
                    {content.description || content.artist}
                </p>
            </div>
        </a>
  )
}

export default SongItem