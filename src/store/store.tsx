import {configureStore} from '@reduxjs/toolkit';
import {audioApi} from '../api/audioApi';

export const store = configureStore({
  reducer: {
    [audioApi.reducerPath]: audioApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(audioApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
