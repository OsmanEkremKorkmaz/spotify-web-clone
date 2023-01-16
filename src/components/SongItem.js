import React, { useEffect, useState } from 'react'
import { Icon } from 'Icons'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, setPlaying, setQueue } from 'redux/player/player';
import { getUserInfo } from '../firebase';
import ProfilePhoto from './ProfilePhoto';

function SongItem({item, isNotUser=true}) {

    const [content, setContent] = useState(item)
    useEffect(() => {

        if(!isNotUser){
            getUserInfo(item).then(user => {
                setContent({
                    id:user.uid,
                    type:"artist",
                    image:user.profilePhoto,
                    title:user.username,
                    description:"Profil"
                })
            })
        }
    },[]) 
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
        console.log(current);
        console.log(current?.id,item.id);

        dispatch(setQueue([item]))    
        dispatch(setCurrent(item))
        playing ? controls.pause() : controls.play()
    }

    const isCurrentItem = (current?.id === item.id && playing)

  return (
        <a href={!isNotUser ? item : ""} className={`bg-footer ${!isNotUser ? "cursor-pointer" : ""} hover:bg-active p-4 rounded-lg group`} key={content.id} >
            <div className={`${isNotUser || content.image ? "pt-[100%]" : ""} relative  mb-4`}>
                
                
                { 
                (!content.image && !isNotUser )
                ? <ProfilePhoto size={150} noUser={true} classnames="max-w-[150px] max-h-[150px] !mr-0 min-w-[150px] min-h-[150px]"/>
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