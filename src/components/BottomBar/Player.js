import { Icon } from "Icons"
import {useAudio, useFullscreen, useToggle} from 'react-use';
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setControls, setPlaying, setSidebar } from "redux/player/player";

import FullScreenPlayer from "components/FullScreenPlayer";
import { setIsLoop } from "redux/queue/queue";

export default function Player(){

    const dispatch = useDispatch();
    const fsRef = useRef();
    const [show, toggle] = useToggle(false);
    const isFullscreen = useFullscreen(fsRef, show, {onClose: () => toggle(false)});

    const { current, sidebar } = useSelector(state => state.player)
    const {isLoop} = useSelector(state => state.queue)

    
    const [audio, state, controls, ref] = useAudio({
        src: current?.src
    });
    
    if(isLoop && current && state?.time === state?.duration){
        state.time = 0
        controls.play()
    }
    useEffect(() => {
        if(current){

            controls.play()
        }
    }, [current])

    useEffect(() => {
        if(current){
        dispatch(setControls(controls))
        }
    }, [])

    useEffect(() => {
        if(current){

            dispatch(setPlaying(state.playing))
        }
    }, [state.playing])

    const volumeIcon = useMemo(() => {
        if(state.volume === 0 || state.muted)
            return 'volumeMuted'
        if (state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'
        if(state.volume >= 0.33 && state.volume < 0.66)
            return 'volumeNormal'
        return 'volumeFull'
    }, [state.volume, state.muted])

    return (
        <div className="flex justify-between items-center h-full px-4">
            <div className="min-w-[11.25rem] w-[30%] flex items-center">
                { current && (
                <div className="flex items-center">
                    <div className="flex items-center">
                        {!sidebar && <div className="h-14 w-14 flex-shrink-0 relative group">
                            <img src={current.image} alt=""/>
                            <button onClick={() => dispatch(setSidebar(true))} className="w-[1.625rem] h-[1.625rem] absolute opacity-0 hover:scale-105 group-hover:opacity-100 top-[0.313rem] right-[0.313rem] rounded-full bg-black/70 flex items-center justify-center">
                                <Icon size={16} name={"arrowLeft"}/>
                            </button>
                        </div>}
                        <div className="mx-[0.875rem]">
                            <h6 className="text-sm text-white font-semibold hover:underline cursor-pointer line-clamp-1">{current.title}</h6>
                            <p className="text-[0.688rem] text-link hover:underline hover:text-white cursor-pointer">{current.artist}</p>
                        </div>
                    </div>
                    <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                        <Icon size={16} name="heart"/>
                    </button>
                    <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                        <Icon size={16} name="pictureInPicture"/>
                    </button>
                </div>
                )}
            </div>
            <div className="flex max-w-[45.125rem] w-[40%] flex-col px-4 items-center">
                <div className="flex items-center gap-x-2">
                    <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                        <Icon size={16} name="shuffle"/>
                    </button>
                    <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                        <Icon size={16} name="playerPrev"/>
                    </button>
                    <button onClick={controls[state?.playing ? "pause" : "play"] } className="w-8 h-8 cursor-default flex items-center mx-2 justify-center text-black bg-white rounded-full hover:scale-[1.06] transition-all">
                        <Icon size={16} name={state?.playing ? "pause" : "playerPlay"}/>
                    </button>
                    <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                        <Icon size={16} name="playerNext"/>
                    </button>
                    <button onClick={() => dispatch(setIsLoop(prev => !prev))} className={`w-8 h-8 cursor-default flex items-center relative justify-center ${isLoop ? "text-secondary after:block after:bottom-0 after:bg-secondary after:absolute after:translate-x-[-50%] after:rounded-full after:h-1 after:left-[50%] after:w-1" : "text-white/70 hover:text-white"} `}>
                        <Icon size={16} name="loop"/>
                    </button>
                </div>
                <div className="w-full flex items-center gap-x-2">
                    {audio}
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
                <button
                    onClick={toggle}
                    className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                    <Icon size={16} name="fullScreen"/>
                </button>
            </div>
            <div ref={fsRef}>
                {isFullscreen && (
                <FullScreenPlayer 
                    toggle={toggle}
                    state={state}
                    controls={controls}
                    volumeIcon={volumeIcon}
                />
            )}
            </div>
        </div>
    )
}