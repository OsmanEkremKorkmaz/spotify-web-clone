import React, { useEffect, useState } from 'react'
import { Icon } from 'Icons'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from 'redux/player/player';
import { getUserInfo } from '../firebase';
import ProfilePhoto from './ProfilePhoto';

function SongItem({item, isNotUser=true}) {

    const [content, setContent] = useState(item)
    useEffect(() => {

        if(!isNotUser){
            getUserInfo(item).then(user => {

                console.log(user)
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
    console.log("content",content);
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

    console.log("current",current);

    const updateCurrent = e => {
        e.preventDefault()
        console.log(1);
        if (current?.id === item.id){
            console.log("mesi");
            if(playing){
                controls.pause()
            } else {
                controls.play()
            }
        } else {
            console.log("siu");
            dispatch(setCurrent(item))
        }
    }

    const isCurrentItem = (current?.id === item.id && playing)

  return (
        <a href={!isNotUser ? item : ""} className={`bg-footer ${!isNotUser ? "cursor-pointer" : ""} hover:bg-active p-4 rounded-lg group`} key={content.id} >
            <div className={`${isNotUser || content.image ? "pt-[100%]" : ""} relative  mb-4`}>
                
                
                { 
                (!content.image && !isNotUser )
                ? <ProfilePhoto size={150} noUser={true} classnames="max-w-[150px] max-h-[150px] !mr-0 min-w-[150px] min-h-[150px]"/>
                : <img alt={content.title} src={content.image} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(content)}`}/>
                }
                {content.type !== "podcast" && isNotUser && <button type='button'
                    onClick={updateCurrent}
                    className={`w-12 h-12 rounded-full bg-primary absolute bottom-2 right-2 text-black items-center justify-center group-hover:flex group-focus:flex transition-all ${!isCurrentItem ? "hidden" : "flex"}`}>
                    <Icon name={(isCurrentItem) ? "pause" : "play"} size={24}/>
                </button>}
            </div>
            <div className="min-h-[64px]">
                <div className="overflow-hidden overflow-ellipsis whitespace-nowrap pb-1 text-base font-bold leading-6">
                    {content.title}
                </div>
                <p className="line-clamp-2 text-sm leading-4 font-semibold text-subdued">
                    {content.description}
                </p>
            </div>
        </a>
  )
}

export default SongItem