import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: false,
  controls: false,
  playing: false,
  sidebar: false,
  queue: [],
  queueIndex: 0,
  isLoop: false,
  isCurrentLoop: false,
  isShuffle: false,
  tempQueue: []
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
        state.current = action.payload
    },
    setControls: (state, action) => {
        state.controls = action.payload
    },
    setPlaying: (state, action) => {
        state.playing = action.payload
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload
    },
    setQueue: (state, action) => {
      if(!state.tempQueue.length){

        state.tempQueue = action.payload
      }
        state.queue = action.payload
    },
    IncreaseQueueIndex: (state, action) => {
        if(state.queue.length-1 > state.queueIndex){
           state.queueIndex++ 
        } else if (state.isLoop) {
          state.queueIndex = 0
        }
    },
    DecreaseQueueIndex: (state, action) => {
      if(state.queueIndex > 0){
        state.queueIndex--
     } else if (state.isLoop) {
      state.queueIndex = state.queue.length - 1
    }
    },
    setIsLoop: (state, action) => {
      state.isLoop = action.payload
    },
    setIsCurrentLoop: (state, action) => {
        state.isCurrentLoop = action.payload
    },
    setIsShuffle: (state, action) => {
      state.isShuffle = action.payload
    },
    setTempQueue: (state, action) => {
        state.tempQueue = action.payload
    },
    resetShuffle: (state) => {
       state.queue = state.tempQueue
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrent, setControls, setPlaying, setSidebar, IncreaseQueueIndex, DecreaseQueueIndex, setQueue, setIsLoop, setIsCurrentLoop, setIsShuffle, setTempQueue, resetShuffle } = playerSlice.actions

export default playerSlice.reducer