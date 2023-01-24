import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Icon } from 'Icons'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setQueue } from 'redux/player/player'
import GradientHeader from 'components/GradientHeader'
import Gradient from 'components/Gradient'
import { getUserInfo, getPlaylist, getSongById } from '../firebase'
import { secondsToTime } from 'utils'
import { useWindowWidth } from '@react-hook/window-size'
import ResponsiveHeader from 'components/ResponsiveHeader'

export default function Playlist() {
    const {id} = useParams()
    const location = useLocation()
    const dispatch = useDispatch();
    const [songs, setSongs] = useState([])
    const [playlist, setPlaylist] = useState(false)
    const [user, setUser] = useState({})
    const [selected, setSelected] = useState(false)
    const [hovered, setHovered] = useState(false)

    const {user:currentUser} = useSelector(state => state.auth)

    const {show} = useSelector(state => state.show)

    const isLiked = location.pathname === "/collection/tracks"
    
    const {current, playing, controls} = useSelector((state) => state.player);


    const updateCurrent = (item) => {
      if (current?.id !== item.id) {
        dispatch(setQueue(songs)) 
        dispatch(setCurrent(item))
      }
      if(current){

        playing ? controls.pause() : controls.play()
      }
    }

    const setPlaylistAsync = async () => {
      setPlaylist(await getPlaylist(isLiked ? currentUser?.liked : (id || false)))
    }
    
    const setUserAsync = async (playlist) => {
      setUser(await getUserInfo(playlist.userId))
    }

    const setSongsAsync = async (items) => {
      await items?.map(async s => await getSongAsync(s).then(song => setSongs(prev => [...prev, song])))
    }

    const getSongAsync = async (id) => {
      return await getSongById(id)
    }

    

    useEffect(() => {
      setPlaylistAsync()
    }, [currentUser])

    useEffect(() => {
      if(playlist){

        setUserAsync(playlist)
        setSongsAsync(playlist?.songs)
      }

    },[playlist])
    useEffect(() => {
      setSongs([])
    }, [])
    const windowWidth = useWindowWidth()

  return (
    <div className={` ${!show ? "block" : "hidden"} relative w-full`}>
      {
        windowWidth >= 768 ? <>
          <GradientHeader faxColor="#5038a0" img={playlist?.cover} upperTitle="Çalma Listesi" title={playlist?.name} subber1={user.username} subber1Link={`/user/${user.uid}`} subber2={isLiked ? `${songs?.length} Şarkı` : `${songs?.length} Şarkı, ${7}dk ${28}sn`} subImg={user.profilePhoto} isProfile={false} />
          <Gradient faxColor="#5038a0" img={playlist?.cover || false} />
        </> : <ResponsiveHeader updateCurrent={() => updateCurrent(!current || current === undefined ? songs[0] : current)} img={playlist?.cover} isProfile={false} title={playlist?.name} subber1={user.username} subber1Link={`/user/${user.uid}`} subber2={isLiked ? `${songs?.length} Şarkı` : `${7}dk ${28}sn`} subImg={user.profilePhoto}  />
      }

        { windowWidth >= 768 && <div className='py-6 px-8 flex flex-start z-0 relative items-center'>
          <button onClick={() => updateCurrent(!current || current === undefined ? songs[0] : current)} className="w-14 h-14 mr-8 cursor-default flex items-center justify-center text-black bg-primary rounded-full hover:scale-[1.06] transition-all">
            <Icon size={24} name={playing ? "pause" : "playerPlay"}/>
          </button>
          {
            playlist?.userId !== user.uid ? <div className={`mr-6 flex flex-shrink-0 ${true ? "text-primary" : ""} `}>
              <Icon size={32} name={true ? "heartFilled" : "heart"}/>
            </div> : <></>
          }
        </div>}
        <div className='md:px-8 px-4 w-full max-w-[1955px] border-1 rounded'>
          { windowWidth >= 768 && <div className="mb-4 w-full top-16 grid gap-4 px-4 sticky border-b border-[#ffffff1a] color-link h-8 z-[2] table-grid">
            <span className="text-link flex font-semibold items-center justify-self-end">#</span>
            <div className='text-link flex  items-center text-sm tracking-widest justify-self-start uppercase'>Başlık</div>
            <div className='text-link hidden md:!flex items-center text-sm tracking-widest justify-self-start uppercase'>Albüm</div>
            <div className='text-link hidden lg:!flex items-center text-sm tracking-widest justify-self-start uppercase'>Tarih Eklendi</div>
            <div className='text-link flex items-center text-sm tracking-widest justify-self-end uppercase mr-8'><Icon name="time" size={16}/></div>
          </div>}
          <div>
            {
              
              songs?.map((song, i) => windowWidth >= 768 ? <div onClick={() => setSelected(prev => !prev ? song.id : false)} onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(song.id)} key={i} className={`table-grid ${song.id === selected ? "!bg-[#ffffff4d]" : ""} grid group border hover:bg-[#ffffff1a] #ffffff1a items-center border-transparent rounded h-14 relative gap-4 px-4`}>
                <div className='flex justify-center items-center  font-semibold h-4 w-4 text-link min-w-4 min-h-4 right-[1px]'>{hovered === song.id || selected === song.id ? <span onClick={() => {updateCurrent(song)}}><Icon size={16} name={playing ? "pause" : "play"} /></span> : playing && song.id === current.id ? <img src="https://firebasestorage.googleapis.com/v0/b/spotify-web-clone-229ad.appspot.com/o/defaults%2Fequaliser-green.gif?alt=media&token=6eb361d2-3cc9-4c28-a987-32c133662325" /> : <span className={`font-semibold ${playing && song.id === current.id ? "text-primary" : ""}`}>{i+1}</span>}</div>
                <div className='flex items-center justify-self-start'>
                  <img className='mr-4 bg-active flex-shrink-0 select-none w-10 h-10' src={song.cover}/>
                  <div className='pr-2 flex flex-col'>
                    <Link to={`/track/${song.id}`} className={`text-white ${playing && song.id === current.id ? "text-primary" : ""} justify-self-start unset break-all overflow-ellipsis overflow-hidden hover:underline `}>{song.name}</Link>
                    <Link to={`/artist/`} className="text-link text-sm font-semibold hover:underline">{song.artist}</Link>
                  </div>
                </div>
                <div className='hidden md:!flex'>
                <Link to={`/album/`} className='text-link unset break-all overflow-ellipsis overflow-hidden  w-full group-hover:text-white hover:underline'>
                  {song.album}
                </Link>
                </div>
                <div className='text-link hidden lg:!flex group-hover:text-white'>24 Ekim 2022</div>
                <div className='text-link flex  justify-end gap-x-4'>
                  <button className={`mr-6 hidden items-center group-hover:!flex h-4 w-4 justify-center shrink-0 ${true ? "text-primary !flex" : ""}`}>
                    <Icon size={16} name={true ? "heartFilled" : "heart"}/>
                  </button>
                  <div className='text-sm flex items-center w-4 h-4 shrink-0 justify-center font-semibold'>{secondsToTime(song.duration)}</div>
                  <button className='flex opacity-0 items-center group-hover:opacity-100 flex-shrink-0'><Icon size={16} name="more"/></button>
                </div>
              </div>
              : <div onClick={() => {updateCurrent(song)}} className='p-2 flex justify-between items-center'>
              <div className='flex items-center justify-self-start'>
                  <img className='mr-4 bg-active flex-shrink-0 select-none w-10 h-10' src={song.cover}/>
                  <div className='pr-2 flex flex-col'>
                    <Link to={`/track/${song.id}`} className={`text-white ${playing && song.id === current.id ? "text-primary" : ""} justify-self-start unset break-all overflow-ellipsis overflow-hidden hover:underline `}>{song.name}</Link>
                    <Link to={`/artist/`} className="text-link text-sm">{song.artist}</Link>
                  </div>
                </div>
                <div className='text-link flex  justify-end gap-x-4'>
                  <button className={`hidden items-center group-hover:!flex h-4 w-4 justify-center shrink-0 ${true ? "text-primary !flex" : ""}`}>
                    <Icon size={16} name={true ? "heartFilled" : "heart"}/>
                  </button><button className='flex rotate-90 items-center flex-shrink-0'><Icon size={16} name="more"/></button>
                </div>
              </div>) 
            }
          </div>
        </div>
    </div>
  )
}
