import ProfilePhoto from 'components/ProfilePhoto'
import { updateProfileData, updateProfilePhoto } from '../firebase'
import { Icon } from 'Icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { setModal } from 'redux/modals/modals'
import store from 'redux/store'

export default function UpdateProfile() {

    const {user} = useSelector(state => state.auth)

    const hasPP = user.profilePhoto
    const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto)
    const [username, setUsername] = useState(user.username)
    const [file, setFile] = useState(false)
    const [isChanged, setIsChanged] = useState(false)


    const handleSubmit = async e => {
        console.log(isChanged,"siu",profilePhoto);
        e.preventDefault()
        if(isChanged){

            await updateProfilePhoto(profilePhoto || false)
        }
        await updateProfileData({
            username,
        })
    }

  return (
    <div className='absolute w-full h-full flex items-center justify-center z-50 bg-[#000000b3]'>
        <div className='bg-active flex p-6 flex-col gap-y-6 w-[524px] rounded-lg update-profile-modal-shadow'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold tracking-tighter'>Profil bilgileri</h1>
                <button onClick={() => store.dispatch(setModal(false))} className='h-8 w-8 rounded-full flex items-center justify-center -mr-2 text-[#ffffffb3] hover:bg-[#ffffff1a]'>
                    <Icon size={16} name="cross" />
                </button>
            </div>
            <form className='update-profile-grid' onSubmit={e => handleSubmit(e)}>
                <input 
                    style={{display: "none"}}
                    type="file"
                    id="profile-photo"
                    onChange={(e) => {
                        setProfilePhoto(e.target.files[0])                        
                        setFile(e.target.files[0])
                        setIsChanged(true)
                    }}
                    accept="image/jpg, image/jpeg, image/png"
                />
                <div style={{gridArea:"image"}} className='w-[180px] group relative h-[180px]'>
                    {file 
                    ? <img className='w-full h-full rounded-full object-cover' src={URL.createObjectURL(file)} /> 
                    : (profilePhoto ? <img className='w-full h-full rounded-full object-cover' src={profilePhoto} /> : <ProfilePhoto noUser={true} />)}
                    <div className='hidden group-hover:flex bg-[#000000b3] rounded-full flex-col gap-y-2 items-center justify-center absolute top-0 left-0 w-full h-full'>
                        <label htmlFor="profile-photo" className="hover:underline cursor-pointer">Fotoğraf seç</label>
                        <Icon name="edit" size={48} />
                        <button type='button' onClick={() => {
                            setFile(false)
                            setProfilePhoto(false)
                            setIsChanged(true)
                        }} className="hover:underline">Fotoğrafı kaldır</button>
                    </div>
                </div>
                <div style={{gridArea:"name"}} className="relative userInput">
                    <label className='absolute transition-opacity duration-200 usernameLabel opacity-0 -top-2.5 text-link left-2.5 text-xs font-semibold'>Adı</label>
                    <input 
                        placeholder='Gösterilecek adı seç' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-[#ffffff1a] border w-full border-transparent updateUsername focus:border-53 focus:bg-[#333] outline-none rounded h-10 px-3 placeholder:text-sm placeholder:font-semibold text-75 font-semibold placeholder:text-75" 
                    />
                </div>
                <button
                    style={{gridArea:"save-button"}}
                    className="ml-auto flex bg-white text-black rounded-full font-semibold hover:scale-105 items-center justify-center text-center h-12 px-8 py-2" type='submit'
                    >
                        Kaydet
                </button>
                <p style={{gridArea:"disclaimer"}} className="font-semibold  text-[0.6875rem]">
                Devam ettiğinde, Spotify'ın yükleyeceğin görüntüye erişimini kabul etmiş olursun. Lütfen görüntüyü yüklemeye hakkın olup olmadığını kontrol et.
                </p>
            </form>
        </div>
    </div>
  )
}
