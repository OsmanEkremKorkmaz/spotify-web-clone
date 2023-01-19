import { Menu } from '@headlessui/react'
import Gradient from 'components/Gradient'
import GradientHeader from 'components/GradientHeader'
import { follow, getUserInfo, unfollow } from '../firebase'
import { Icon } from 'Icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setModal } from 'redux/modals/modals'
import store from 'redux/store'
import ComponenetShelf from 'components/ComponentShelf'

export default function Profile() {
    const {user_id} = useParams()
    const {user:currentUser} = useSelector(state => state.auth)
    const [user, setUser] = useState(false)
    const getUser = async () => {
        setUser(await getUserInfo(user_id))
    }

    const handleFollow = async () => {
        if(isFollowing) {
            await unfollow(user_id)
        } else {

            await follow(user_id)
        }
        getUser()
    }

    const isFollowing = user?.followers && user?.followers?.includes(currentUser.uid)

    useEffect(() => {

        getUser()
    },[user_id, currentUser])

    console.log(user)
    const isMe = user_id === currentUser.uid

  return user && (
    <div>

        <GradientHeader isProfile={true} img={user.profilePhoto || false} upperTitle="Profil" title={user.username} subber1={`${user.followers ? Object.keys(user.followers).length : 0} Takipçi`} subber2={`Takip Edilenler: ${user.following ? Object.keys(user.following).length : 0}`} isEditable={isMe} />
        <Gradient img={user.profilePhoto || false}/>
        <div className='z-1 relative'>

            <div className='py-6 px-8 w-full flex items-center justify-start'>
                {
                    !isMe && <button type='button' onClick={handleFollow} className='uppercase font-semibold border hover:border-white border-[#ffffff4d] text-xs tracking-widest px-[15px] py-[7px] rounded text-white mr-8'>
                        {isFollowing ? "Takip Ediliyor" : "Takip Et"}
                    </button>
                }
            <Menu as={"nav"} className="relative z-20">
            {({ open }) => (
                <>
                    <Menu.Button className="text-[#ffffff99]">
                            <Icon size={32} name="more"/>             
                        </Menu.Button>
                    <Menu.Items className={"absolute top-full bg-active rounded p-1 translate-y-2 min-w-[196px] left-0"}>
                        {isMe ? <Menu.Item>
                        {({ active }) => (
                            <button onClick={() => store.dispatch(setModal("updateProfile"))} className='flex h-10 font-medium w-full shrink-0 whitespace-nowrap cursor-default rounded-sm text-[#ffffffe6] p-3 pr-2 items-center hover:bg-[#ffffff1a]'>Profili düzenle</button>
                        )}
                        </Menu.Item> : <Menu.Item>
                        {({ active }) => (
                            <button onClick={ async () => {
                                await follow(user_id)
                                getUser()
                            }} className='flex h-10 w-full shrink-0 whitespace-nowrap font-medium cursor-default rounded-sm text-[#ffffffe6] p-3 pr-2 items-center hover:bg-[#ffffff1a]'>Takip Et</button>
                        )}
                        </Menu.Item>}
                        <Menu.Item>
                        {({ active }) => (
                            <button className='flex h-10 w-full shrink-0 whitespace-nowrap cursor-default rounded-sm font-medium text-[#ffffffe6] p-3 pr-2 items-center hover:bg-[#ffffff1a]'>Profil bağlantısını kopyala</button>
                        )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
            </Menu>
            </div>
            <div className='gap-y-10 flex flex-col'>

                {
                    (user.followers ? Object.keys(user.followers).length : 0) ? <div className='px-8 mb-4'>
                        <ComponenetShelf title="Takipçiler" items={user?.followers} isNotUser={false} />


                    </div> : <></>
                }
                {
                    (user.following ? Object.keys(user.following).length : 0) ? <div className='px-8 mb-4'>
                        <ComponenetShelf title="Takip Ediliyor" items={user?.following} isNotUser={false} />


                    </div> : <></>
                }
            </div>
        </div>

    </div>
  )
}
