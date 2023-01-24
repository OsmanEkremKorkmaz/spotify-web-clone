import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './player/player'
import queueSlice from './queue/queue'
import searchSlice from './search/search'
import authSlice from './auth/auth'
import modalsSlice from './modals/modals'
import showSlice from './show/show'

export default configureStore({
  reducer: {
      player: playerSlice,
      show: showSlice,
      search: searchSlice,
      auth: authSlice,
      modals: modalsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})