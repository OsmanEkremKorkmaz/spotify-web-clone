import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './player/player'
import queueSlice from './queue/queue'
import searchSlice from './search/search'
import authSlice from './auth/auth'
import modalsSlice from './modals/modals'

export default configureStore({
  reducer: {
      player: playerSlice,
      queue: queueSlice,
      search: searchSlice,
      auth: authSlice,
      modals: modalsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})