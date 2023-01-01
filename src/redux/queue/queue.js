import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoop: false
}

export const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    setIsLoop: (state, action) => {
        state.isLoop = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIsLoop } = queueSlice.actions

export default queueSlice.reducer