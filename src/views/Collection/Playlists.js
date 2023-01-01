import Title from "components/Title";
import songs from "data/songs"
import playlists from "data/playlists"
import SongItem from "components/SongItem";
import { Icon } from 'Icons'
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from 'redux/player/player';

function Playlists() {
    const item = songs[0]
    const dispatch = useDispatch();
    const {current, playing, controls} = useSelector((state) => state.player);
    const updateCurrent = () => {
        if (current?.id === item.id){
            if(playing){
                controls.pause()
            } else {
                controls.play()
            }
        } else {
            dispatch(setCurrent(item))
        }
    }

    const isCurrentItem = (current?.id === item.id && playing)

    return (
        
        <div className=" pt-6  px-8 ">
            <div className="-mt-2  mb-[26px]">
                <Title title="Çalma Listeleri" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6" >
                <div className="col-span-2 h-full group text-white bg-gradient-to-br from-[#450af5] to-[#8e8ee5] p-5 rounded-md">
                    <div className="flex justify-end flex-col h-full">
                        <div className="mb-8">
                            <div className="overflow-hidden whitespace-normal text-ellipsis line-clamp-3 max-h-[130px] w-full text-white">
                                {songs.map(song => (
                                    <span >
                                        {song.id !== 1 && <span className="opacity-70"> • </span> }
                                        <span className="!opacity-100">{song.artist}</span>
                                        &nbsp;
                                        <span className="opacity-70">
                                            {song.title}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="min-h-[62px]">
                            <div className="font-bold text-[2rem] pb-1 overflow-hidden whitespace-nowrap text-ellipsis tracking-tighter">Beğenilen Şarkılar</div>
                            <div className="text-white lowercase">{songs.length} beğenilen şarkılar</div>
                        </div>
                        <div className="relative ">
                            <button
                                onClick={updateCurrent}
                                className={`w-12 h-12 rounded-full bg-primary absolute bottom-2 right-2 text-black items-center justify-center group-hover:flex group-focus:flex transition-all ${!isCurrentItem ? "hidden" : "flex"}`}>
                                <Icon name={(isCurrentItem) ? "pause" : "play"} size={24}/>
                            </button>
                        </div>


                    </div>

                </div>
                {playlists.map(item => (
                    // <div className="p-4 rounded-md bg-footer transition-colors duration-300 h-full">
                    //     <img className="mb-4" src={playlist.cover} />
                    // </div>
                    <SongItem key={item.id} item={item} isNotUser={true} />
                ))}
            </div>
        </div>
    )
}

export default Playlists;