import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/usersSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;