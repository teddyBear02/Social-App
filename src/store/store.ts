import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice'
import postReducer from './post/post.slice'
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        auth : authReducer,
        post: postReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 

export const useAppDispatch: () => AppDispatch = useDispatch;
