import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';

export const reducer = {
  counter: counterReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
