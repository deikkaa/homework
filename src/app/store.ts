
import { postsApi } from '../shared/api/postsApi'
import { configureStore } from '@reduxjs/toolkit'

export const rootReducer = {
  [postsApi.reducerPath]: postsApi.reducer,
}

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware().concat(postsApi.middleware),
  })
}