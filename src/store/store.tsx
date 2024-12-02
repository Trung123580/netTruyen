import {configureStore} from '@reduxjs/toolkit'
import storeApi from '@/store/storeApi'
import storeAction from '@/store/storeAction'

export const store = configureStore({
  reducer: {
    storeApi: storeApi,
    storeAction: storeAction
  }
})
// type store
export type RootState = ReturnType<typeof store.getState>
// type for dispatch action in store
export type AppDispatch = typeof store.dispatch
