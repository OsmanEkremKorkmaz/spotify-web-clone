import { Icon } from "Icons"
import {useAudio} from 'react-use';
import { getColor, secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { DecreaseQueueIndex, IncreaseQueueIndex, resetShuffle, setControls, setCurrent, setIsCurrentLoop, setIsShuffle, setPlaying, setQueue, setSidebar } from "redux/player/player";

import FullScreenPlayer from "components/FullScreenPlayer";
import { setIsLoop } from "redux/player/player";
import { getPlaylist, likeSong } from "../../firebase";
import { useWindowWidth } from "@react-hook/window-size";
import { toggle as showToggle } from "redux/show/show";

export default function Player(){

    const dispatch = useDispatch();
    

    const { current, sidebar, queue, queueIndex, isShuffle, isCurrentLoop, isLoop } = useSelector(state => state.player)

    const {user} = useSelector(state => state.auth)
    const { show } = useSelector(state => state.show)

    const toggle = () => {
        dispatch(showToggle())
    }

    const [liked, setLiked] = useState([])

    const shuffle = () => {
        if(!isShuffle){
            const newArray = [...queue]
            const length = newArray.length
            
            for (let start = 0; start < length; start++) {
                const randomPosition = Math.floor((newArray.length - start) * Math.random())
                const randomItem = newArray.splice(randomPosition, 1)
                
                newArray.push(...randomItem)
            }
            console.log(newArray);
            dispatch(setQueue(newArray))
        } else {
            dispatch(resetShuffle())
        }
        dispatch(setIsShuffle(!isShuffle))
    }

    useEffect(() => {

        if(user?.liked){

            getPlaylist(user?.liked).then(res => setLiked(res.songs))
        }
    },[user])
    
    const [audio, state, controls] = useAudio({
        src: current?.src
    });



    const likeSongHandle = async () => {
        await likeSong(current?.id)
        if(user?.liked){

            getPlaylist(user?.liked).then(res => setLiked(res.songs))
        }
    }

    const nextSong = () => {
        dispatch(IncreaseQueueIndex())
    }
    const prevSong = () => {
        dispatch(DecreaseQueueIndex())    
    }

    useEffect(() => {
        dispatch(setCurrent(queue[queueIndex]))
    }, [queueIndex,dispatch,queue])

    const handleLoop = () => {
        if(isCurrentLoop){
            dispatch(setIsCurrentLoop(false))
        } else if (isLoop) {
            dispatch(setIsLoop(false))
            dispatch(setIsCurrentLoop(true))
        } else {
            dispatch(setIsLoop(true))
        }
        
    }



    
    if(current && (state?.time === state?.duration) && state?.duration > 0 && state?.time > 0 ){

        state.time = 0
        if(isCurrentLoop){

            controls.play()
        } else {
            nextSong()
        }
    }
    
    useEffect(() => {
        if(current){
            dispatch(setControls(controls))
            controls.play()
        }
    }, [current,dispatch])

    useEffect(() => {
        if(current){

            dispatch(setPlaying(state.playing))
        }
    }, [state.playing,current,dispatch])

    const volumeIcon = useMemo(() => {
        if(state.volume === 0 || state.muted)
            return 'volumeMuted'
        if (state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'
        if(state.volume >= 0.33 && state.volume < 0.66)
            return 'volumeNormal'
        return 'volumeFull'
    }, [state.volume, state.muted])

    const windowWith = useWindowWidth()

    const [color, setColor] = useState("#535353")

    const progressBar = `${(state?.time / state?.duration) * 100}%`

    useEffect(() => {
      getColor(current?.cover, setColor)
    }, [current])

    return <div>
        {audio}
        {windowWith >= 768 ? (
        <div className="h-22.5 bg-footer border-t border-active">
        <div className="flex justify-between items-center h-full px-4">
            <div className="min-w-[11.25rem] w-[30%] flex items-center">
                { current && (
                <div className="flex items-center">
                    <div className="flex items-center">
                        {!sidebar && <div className="h-14 w-14 flex-shrink-0 relative group">
                            <img src={current.cover} alt=""/>
                            <button onClick={() => dispatch(setSidebar(true))} className="w-[1.625rem] h-[1.625rem] absolute opacity-0 hover:scale-105 group-hover:opacity-100 top-[0.313rem] right-[0.313rem] rounded-full bg-black/70 flex items-center justify-center">
                                <Icon size={16} name={"arrowLeft"}/>
                            </button>
                        </div>}
                        <div className="mx-[0.875rem]">
                            <h6 className="text-sm text-white font-semibold hover:underline cursor-pointer line-clamp-1">{current.name}</h6>
                            <p className="text-[0.688rem] text-link hover:underline hover:text-white cursor-pointer">{current.artist}</p>
                        </div>
                    </div>
                    <button onClick={likeSongHandle} className={`w-8 h-8 cursor-default flex items-center ${liked?.includes(current?.id) ? "!text-primary" : ""} justify-center text-white/70 hover:text-white`}>
                        <Icon size={16}  name={liked?.includes(current?.id) ? "heartFilled" : "heart"}/>
                    </button>
                    <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                        <Icon size={16} name="pictureInPicture"/>
                    </button>
                </div>
                )}
            </div>
            <div className="flex max-w-[45.125rem] w-[40%] flex-col px-4 items-center">
                <div className="flex items-center gap-x-2">
                    <button onClick={shuffle} className={`w-8 h-8 cursor-default relative flex items-center justify-center ${isShuffle ? "text-secondary after:block after:bottom-0 after:bg-secondary after:absolute after:translate-x-[-50%] after:rounded-full after:h-1 after:left-[50%] after:w-1" : "text-white/70 hover:text-white"}`}>
                        <Icon size={16} name="shuffle"/>
                    </button>
                    <button onClick={prevSong} className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                        <Icon size={16} name="playerPrev"/>
                    </button>
                    <button onClick={controls[state?.playing ? "pause" : "play"] } className="w-8 h-8 cursor-default flex items-center mx-2 justify-center text-black bg-white rounded-full hover:scale-[1.06] transition-all">
                        <Icon size={16} name={state?.playing ? "pause" : "playerPlay"}/>
                    </button>
                    <button onClick={nextSong} className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                        <Icon size={16} name="playerNext"/>
                    </button>
                    <button onClick={handleLoop} className={`w-8 h-8 cursor-default flex items-center relative justify-center ${isCurrentLoop ? "text-secondary after:block after:bottom-0 after:bg-secondary after:absolute after:translate-x-[-50%] after:rounded-full after:h-1 after:left-[50%] after:w-1" : isLoop ? "text-secondary" : "text-white/70 hover:text-white"} `}>
                        <Icon size={16} name="loop"/>
                    </button>
                </div>
                <div className="w-full flex items-center gap-x-2">
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange 
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                        {/* {state?.duration} */}
                    </div>
                </div>
            </div>
            <div className="min-w-[11.25rem] w-[30%] items-center flex justify-end">
                <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                    <Icon size={16} name="lyrics"/>
                </button>
                <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                    <Icon size={16} name="queue"/>
                </button>
                <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                    <Icon size={16} name="device"/>
                </button>
                <button onClick={controls[state.muted ? "unmute" : "mute"]} className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                    <Icon size={16} name={volumeIcon}/>
                </button>
                <div className="w-[5.813rem] max-w-full">
                    <CustomRange 
                            step={0.01}
                            min={0}
                            max={1}
                            value={state?.muted ? 0 : state?.volume}
                            onChange={value => {
                                controls.unmute() 
                                controls.volume(value)
                            }}
                        />
                </div>
            </div>
            
        </div>
        </div>
    ) : (
        current ? (
            <>
            {
            <div onClick={toggle} style={{backgroundColor: color}} className={`rounded-md ${show ? "hidden" : "flex"} items-center relative z-[1] after:responsive-player-bg gap-x-2 p-2 mx-2 h-14`}>
                    
                    <img alt={current.name} src={current.cover} className="rounded h-10 w-10 mr-1" />
                    <div className="flex flex-col w-full text-left justify-evenly">
                        <div className="font-bold text-sm">{current.name}</div>
                        <div className="font-normal text-[#ffffffb3] text-[0.8125rem]">{current.artist}</div>

                    </div>
                    <div onClick={e => e.stopPropagation()} className="flex gap-x-2 items-center">
                        <button onClick={likeSongHandle} className={`cursor-default flex items-center ${liked?.includes(current?.id) ? "!text-primary" : ""} justify-center text-white/70 hover:text-white`}>
                                <Icon size={24}  name={liked?.includes(current?.id) ? "heartFilled" : "heart"}/>
                            </button>
                        <button onClick={controls[state?.playing ? "pause" : "play"] } className=" cursor-default flex items-center px-2 justify-center white hover:scale-[1.06] transition-all">
                            <Icon size={24} name={state?.playing ? "pause" : "playerPlay"}/>
                        </button>
                    </div>
                    <div className="h-0.5 w-[calc(100%-1rem)] absolute mx-auto left-0 right-0 -bottom-0 rounded-sm bg-[#ffffff4d]">
                        <div style={{width:progressBar}} className="h-0.5 bg-white rounded-sm "></div>
                    </div>
                </div>
            }
            <div className={`fixed ${show ? "bottom-0" : "-bottom-[100vh]"} transition-all left-0 w-full h-full`}>
            {show && current && (
            <FullScreenPlayer 
                toggle={toggle}
                state={state}
                controls={controls}
                volumeIcon={volumeIcon}
                liked={liked}
                likeSongHandle={likeSongHandle}
            />
        )}
        </div>
        </>
          ) : null
    )}
    
    
            </div>
}