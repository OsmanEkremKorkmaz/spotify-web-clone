import { useWindowWidth } from '@react-hook/window-size'
import { Icon } from 'Icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { getColor } from 'utils'

export default function ResponsiveHeader({img,isProfile=false,title,subImg=false,subber1Link=false,subber1=false,subber2=false, updateCurrent=false}) {
    const [color, setColor] = useState("#535353")
    const location = useLocation()

    const isLiked = location.pathname === "/collection/tracks" // && false
    
    useEffect(() => {
      getColor(img, setColor)
    }, [img])

    const windowWith = useWindowWidth()

    const {playing} = useSelector((state) => state.player);
    
  return (
    <div style={{background:`linear-gradient(${color} 0%, transparent 100%)`}} className="pt-[4.5rem] p-4 flex flex-col gap-y-2">
            {!isLiked && <div className={`mr-6 min-h-[144px] h-[40vw] flex items-center  justify-center w-full  ${isProfile ? "rounded-full" : ""} `}>
                {img ? <img src={img} className={`object-cover before:pr-[100%] mb-2 playlist-cover-shadow h-full ${isProfile ? "rounded-full" : ""}`} /> : <Icon name={`${isProfile ? "defaultUser" : "note"}`} size={48}/>}
            </div>}
            <h1 className='font-bold text-[2rem] unset break-all overflow-ellipsis overflow-hidden  w-full'>{title}</h1>
            {
                !isLiked && !isProfile && <div className={`text-[#fff] flex gap-2`}>
                {subImg && <img className='rounded-full w-6 h-6' src={subImg} />}
                <Link to={subber1Link || ""} className='hover:underline cursor-pointer text-[0.815rem]'>{subber1 || null}</Link>
              </div>
            }
            {
              subber2 && <div className='text-[#ffffffb3] text-[0.8125rem]'>{subber2}</div>
            }
            {
              updateCurrent && <div className='flex'>
                <div className='mr-auto'></div>
                <div className='ml-auto'>
                  <button onClick={updateCurrent} className="w-14 h-14 cursor-default flex items-center justify-center text-black bg-primary rounded-full hover:scale-[1.06] transition-all">
                    <Icon size={24} name={playing ? "pause" : "playerPlay"}/>
                  </button>
                </div>
            </div>
            }
            {/* <div className='z-10 justify-end flex flex-col h-full '>
                <h2 className='font-bold uppercase mt-1 text-xs'>{upperTitle}</h2>
                <h1 className=' break-words w-full text-left mt-[calc(8px+0.08em)] mb-[0.12em]  text-6xl font-bold whitespace-nowrap'>{title}</h1>
                <div className='mt-2 flex items-center'>
                  <div className={`text-[#fff] flex gap-1 ${isProfile ? "" : "font-semibold"}`}>
                    {subImg && <img className='rounded-full w-6 h-6' src={subImg} />}
                    <Link to={subber1Link} className='hover:underline cursor-pointer'>{subber1}</Link>
                  </div>
                  <span className='ml-1'>
                  • {subber2}
                  </span>
                </div>
            </div> */}
        </div>
  )
}
