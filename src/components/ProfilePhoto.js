import { Icon } from 'Icons'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ProfilePhoto({svgSize=48, classnames, noUser=false}) {
    const {user} = useSelector(state => state.auth)
  return (
    <div className={`${classnames} mr-6 flex items-center justify-center w-full h-full bg-active text-7f z-1 playlist-cover-shadow rounded-full`}>
        {user.profilePhoto && !noUser ? <img className='rounded-full w-full h-full object-cover' src={user.profilePhoto} /> : <Icon name="defaultUser" size={svgSize}/>}
    </div>
  )
}
