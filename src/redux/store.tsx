import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import RikanSlice from "./Slice";

const rootReducer = combineReducers({
  rikanList: RikanSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
