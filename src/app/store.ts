import { configureStore } from "@reduxjs/toolkit";
import { quoteApi } from "../features/quotes/qouteApiSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
// import quoteReducer from '../features/quotes/qouteSlice'


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [quoteApi.reducerPath]: quoteApi.reducer,
  },
  // Adding the custom genrated api middleware to the store which 
  // enables caching, invalidation, polling,
  // and other useful features of `rtk-query`
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(quoteApi.middleware)
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// RootState is the type of the entire Redux store state
// ReturnType<typeof store.getState> returns the type of the entire Redux store state
export type RootState = ReturnType<typeof store.getState>

// AppDispatch is the type of the dispatch function of the store
// typeof store.dispatch returns the type of the dispatch function of the store
export type AppDispatch = typeof store.dispatch

// A utility used to enable refetchOnMount and refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)