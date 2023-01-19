import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'Icons'
import { getColor, secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useWindowWidth } from '@react-hook/window-size';
import { DecreaseQueueIndex, IncreaseQueueIndex, resetShuffle, setIsCurrentLoop, setIsLoop, setIsShuffle, setQueue } from 'redux/player/player';

function FullScreenPlayer({toggle, state, controls, volumeIcon}) {
    const dispatch = useDispatch();
    const windowWith = useWindowWidth()

    const { current, sidebar, queue, queueIndex, isShuffle, isCurrentLoop, isLoop } = useSelector(state => state.player)


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

    const nextSong = () => {
        dispatch(IncreaseQueueIndex())
    }
    const prevSong = () => {
        dispatch(DecreaseQueueIndex())    
    }

    const [color, setColor] = useState("#535353")

    useEffect(() => {
        getColor(current?.cover, setColor)
      }, [current])

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

  return (
    <div className='h-full flex flex-col relative' onClick={windowWith >= 768 ? controls[state?.playing ? "pause" : "play"] : () => false }>
        { 
            windowWith >= 768 
            ? <div className='absolute inset-0 object-cover -z-10 bg-center bg-cover blur-md opacity-30' style={{backgroundImage: `url(${current.cover})`}}></div> 
            : <div style={{backgroundColor: color }} className='absolute full-screen-gradient inset-0 -z-10'></div> 
        }
            { windowWith >= 768 ? <div className='px-3 md:px-14 mt-9 mb-14 text-white text-opacity-60 flex items-center'>
                <Icon name="logo" size={32}/>
                <div className='align-middle ml-3'>
                    <div className='text-sm font-semibold uppercase'>Playing from playlist</div>
                    <div className='text-xs font-bold'>{current.album}</div>
                </div>
            </div> : <div className='px-3 pt-3 mb-10 w-full h-15 flex items-center'>
                <button
                    onClick={current ? toggle : () => false}
                    className="w-12 h-12 shrink-0 cursor-default rotate-180 flex items-center justify-center text-white/70 hover:text-white">
                    <Icon size={24} name="arrowLeft"/>
                </button>
                <div className='flex items-center justify-center w-full font-bold text-[0.815rem]'>{current.album}</div>
                <button
                    className="w-12 shrink-0 h-12 cursor-default rotate-180 flex items-center justify-center text-white/70 hover:text-white">
                    <Icon size={24} name="more"/>
                </button>
            </div> }
            
            <div className='h-full w-full flex px-3 md:px-14 pb-6 items-center justify-center'>
                { windowWith < 768 ? <img alt={current.name} src={current.cover} className="h-64 object-contain" /> : null }
            </div>
            <div className='mx-3 md:mx-14 mb-0 flex gap-x-4 items-end'>

                {windowWith >= 768 ? <div className=' flex items-center justify-center'>
                    <img className='w-20 h-20 object-cover' src={current.cover} />
                </div> : null}
                <div className=' md:left-40 w-full md:font-bold'>
                    <div className='text-2xl md:text-3xl md:mb-2 font-bold'>
                        {current.name}
                    </div>
                    <div className='text-base md:text-xs opacity-70'>
                        {current.artist}
                    </div>
                </div>
            </div>

        <div onClick={e => e.stopPropagation()} className="flex mb-16 px-3 md:px-14 flex-col items-center">
                <div className="w-full flex items-center h-11 pt-auto gap-x-2">
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
                <div  className='w-full flex justify-between'>
                    { windowWith >= 768 ? <div className='w-1/3'></div> : null}
                    <div className="flex items-center gap-x-5 justify-between md:justify-center h-20 w-full md:w-1/3">
                        <button onClick={shuffle} className={`w-8 h-8 cursor-default flex relative items-center justify-center ${isShuffle ? "text-secondary after:block after:bottom-0 after:bg-secondary after:absolute after:translate-x-[-50%] after:rounded-full after:h-1 after:left-[50%] after:w-1" : "text-white/70 hover:text-white"}`}>
                            <Icon size={24} name="shuffle"/>
                        </button>
                        <button onClick={prevSong} className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                            <Icon size={24} name="playerPrev"/>
                        </button>
                        <button onClick={controls[state?.playing ? "pause" : "play"] } className="w-16 h-16 flex-shrink-0 cursor-default flex items-center mx-2 justify-center text-black bg-white rounded-full hover:scale-[1.06] transition-all">
                            <Icon size={32} name={state?.playing ? "pause" : "playerPlay"}/>
                        </button>
                        <button onClick={nextSong} className="w-8 h-8 cursor-default flex items-center justify-center text-white/70 hover:text-white">
                            <Icon size={24} name="playerNext"/>
                        </button>
                        <button onClick={handleLoop} className={`w-8 h-8 relative cursor-default flex items-center justify-center ${isCurrentLoop ? "text-secondary after:block after:bottom-0 after:bg-secondary after:absolute after:translate-x-[-50%] after:rounded-full after:h-1 after:left-[50%] after:w-1" : isLoop ? "text-secondary" : "text-white/70 hover:text-white"} `}>
                            <Icon size={24} name="loop"/>
                        </button>
                    </div>
                        { windowWith >= 768 ? <div className='items-center flex justify-end gap-x-5 w-1/3'>
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
                    </div> : null}
                </div>
            </div>
    </div>
  )
}

export default FullScreenPlayer