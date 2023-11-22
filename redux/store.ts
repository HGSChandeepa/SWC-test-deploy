//here i will configure the store and export it
import { configureStore } from "@reduxjs/toolkit";
import windowDataReducer from "./slices/windowDataSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  //here i will add the reducers
  reducer: {
    //here i will add the reducers
    windowDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
