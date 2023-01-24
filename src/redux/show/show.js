import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  show: false
}

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    toggle: (state, action) => {
        state.show = !state.show
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = showSlice.actions

export default showSlice.reducer