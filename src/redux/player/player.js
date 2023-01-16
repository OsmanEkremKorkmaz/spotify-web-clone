import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: false,
  controls: false,
  playing: false,
  sidebar: false,
  queue: [],
  queueIndex: 0
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
        state.queue = action.payload
    },
    IncreaseQueueIndex: (state, action) => {
        if(state.queue.length-1 > state.queueIndex){
           state.queueIndex++ 
        }
    },
    DecreaseQueueIndex: (state, action) => {
      if(state.queueIndex > 0){
        state.queueIndex--
     }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrent, setControls, setPlaying, setSidebar, IncreaseQueueIndex, DecreaseQueueIndex, setQueue } = playerSlice.actions

export default playerSlice.reducer