import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// RootState is the type of the entire Redux store state
// ReturnType<typeof store.getState> returns the type of the entire Redux store state
export type RootState = ReturnType<typeof store.getState>

// AppDispatch is the type of the dispatch function of the store
// typeof store.dispatch returns the type of the dispatch function of the store
export type AppDispatch = typeof store.dispatch