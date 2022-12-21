import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import bidSlice from "./bidSlice";

export const store = configureStore({
    reducer:{
      app: appSlice,
      bid:bidSlice,
    },
});

type RootState = ReturnType<typeof store.getState>
export type {RootState};

type AppDispatch = typeof store.dispatch
export type {AppDispatch}