import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'Icons'
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { setIsLoop } from "redux/queue/queue";

function FullScreenPlayer({toggle, state, controls, volumeIcon}) {
    const {current} = useSelector(state => state.player)
    const {isLoop} = useSelector(state => state.queue)
    const dispatch = useDispatch();
  return (
    <div className='h-full relative' onClick={controls[state?.playing ? "pause" : "play"] }>
        <div className='absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30' style={{backgroundImage: `url(${current.image})`}}></div>
            <div className='absolute bottom-[11.5rem] left-14 flex items-center justify-center'>
                <img className='w-20 h-20 object-cover' src={current.image} />
            </div>
            <div className='absolute bottom-[11.5rem] left-40 w-full right-14 font-[700]'>
                <div className='text-3xl mb-2'>
                    {current.title}
                </div>
                <div className='text-xs opacity-70'>
                    {current.artist}
                </div>
            </div>
            <div className='px-14 mt-9 mb-14 text-white text-opacity-60 flex items-center'>
                <Icon name="logo" size={32}/>
                <div className='align-middle ml-3'>
                    <div className='text-sm font-semibold uppercase'>Playing from playlist</div>
                    <div className='text-xs font-bold'>{current.description}</div>
                </div>
            </div>

        <div onClick={e => e.stopPropagation()} className="flex absolute bottom-16 right-14 left-14 flex-col items-center">
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
                    </div>
                </div>
                <div className='w-full flex justify-between'>
                    <div className='w-1/3'></div>
                    <div className="flex items-center gap-x-5 justify-center h-20 w-1/3">
                        <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                            <Icon size={24} name="shuffle"/>
                        </button>
                        <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                            <Icon size={24} name="playerPrev"/>
                        </button>
                        <button onClick={controls[state?.playing ? "pause" : "play"] } className="w-16 h-16 cursor-default flex items-center mx-2 justify-center text-black bg-white rounded-full hover:scale-[1.06] transition-all">
                            <Icon size={32} name={state?.playing ? "pause" : "playerPlay"}/>
                        </button>
                        <button className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                            <Icon size={24} name="playerNext"/>
                        </button>
                        <button onClick={() => dispatch(setIsLoop(prev => !prev))} className={`w-8 h-8 relative cursor-default flex items-center justify-center ${isLoop ? "text-secondary after:block after:bottom-0 after:bg-secondary after:absolute after:translate-x-[-50%] after:rounded-full after:h-1 after:left-[50%] after:w-1" : "text-white/70 hover:text-white"} `}>
                            <Icon size={24} name="loop"/>
                        </button>
                    </div>
                        <div className='items-center flex justify-end gap-x-5 w-1/3'>
                            <div className='items-center flex'>                                
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
                        <button
                            onClick={toggle}
                            className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                            <Icon size={24} name="fullScreenOff"/>
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FullScreenPlayer