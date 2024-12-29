import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/usersSlice';
import authReducer from './auth/authSlice';
import currentUserReducer from './currentUser/currentUserSlice';
import questionReducer from './question/questionSlice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        auth: authReducer,
        currentUser: currentUserReducer,
        question: questionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;