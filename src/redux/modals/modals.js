import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: false
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModal: (state, action) => {
        state.current = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setModal } = modalsSlice.actions

export default modalsSlice.reducer