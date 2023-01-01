import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { user } from 'data/user'
import { Icon } from 'Icons'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent } from 'redux/player/player'
import GradientHeader from 'components/GradientHeader'
import Gradient from 'components/Gradient'

export default function Playlist() {
    const {id} = useParams()
    const location = useLocation()
    const dispatch = useDispatch();

    
    const {current, playing, controls} = useSelector((state) => state.player);
    
    const playlist = location.pathname === "/collection/tracks" ? user.likedSongs : user.playlists.find(pl => pl.id === +id)
    const handleClick = () => {
      if (!current) {
        dispatch(setCurrent(playlist?.songs[0]))
      }
      playing ? controls.pause() : controls.play()
    }
    
  return (
    <div className='relative w-full'>
        <GradientHeader faxColor="#5038a0" img={playlist?.cover} upperTitle="Çalma Listesi" title={playlist?.name} subber1={user.name} subber2={`${playlist?.songs.length} Şarkı`} subImg={user.avatar} />
        <Gradient faxColor="#5038a0" img={playlist?.cover || false} />
        <div className='py-6 px-8 flex flex-start z-0 relative items-center'>
          <button onClick={handleClick} className="w-14 h-14 mr-8 cursor-default flex items-center justify-center text-black bg-primary rounded-full hover:scale-[1.06] transition-all">
            <Icon size={24} name={playing ? "pause" : "playerPlay"}/>
          </button>
          {
            playlist?.creator_id !== user.id && <div className='mr-6 flex flex-shrink-0'>
              <Icon size={32} name={playlist?.is_liked ? "heartFilled" : "heart"}/>
            </div>
          }
        </div>
        <div className='px-8 max-w-[1955px] border-1 rounded'>
          <div className="mb-4 top-16 grid gap-4 px-4 sticky border-b border-[#ffffff1a] color-link h-8 z-[2] table-grid">
            <span className="text-link flex font-semibold items-center justify-self-end">#</span>
            <div className='text-link flex items-center text-sm tracking-widest justify-self-start uppercase'>Başlık</div>
            <div className='text-link flex items-center text-sm tracking-widest justify-self-start uppercase'>Albüm</div>
            <div className='text-link flex items-center text-sm tracking-widest justify-self-start uppercase'>Tarih Eklendi</div>
            <div className='text-link flex items-center text-sm tracking-widest justify-self-end uppercase mr-8'><Icon name="time" size={16}/></div>
          </div>
          <div>
            {
              playlist.songs.map((song, i) => <div key={i} className='table-grid grid group border hover:bg-[#ffffff1a] #ffffff1a items-center border-transparent rounded h-14 relative gap-4 px-4'>
                <div className='flex justify-self-end items-center font-semibold h-4 w-4 text-link min-w-4 min-h-4 right-[1px]'>{i+1}</div>
                <div className='flex items-center justify-self-start'>
                  <img className='mr-4 bg-active flex-shrink-0 select-none w-10 h-10' src={song.image}/>
                  <div className='pr-2 flex flex-col'>
                    <Link to={`/track/${song.id}`} className="text-white justify-self-start ">{song.title}</Link>
                    <Link to={`/artist/`} className="text-link text-sm font-semibold">{song.artist}</Link>
                  </div>
                </div>
                <div>
                <Link to={`/album/`} className='text-link group-hover:text-white'>
                  {song.album}
                </Link>
                </div>
                <div className='text-link group-hover:text-white'>24 Ekim 2022</div>
              </div>
              )
            }
          </div>
        </div>
        <pre className='z-50'>{JSON.stringify(playlist)}</pre>
    </div>
  )
}
