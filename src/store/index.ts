import { configureStore } from '@reduxjs/toolkit';
import { jsReducer } from './reducers/jsQuizSlice';

export const store = configureStore({
    reducer: {
        'jsquiz': jsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;