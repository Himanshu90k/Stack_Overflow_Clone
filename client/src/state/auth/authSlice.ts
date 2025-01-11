import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api';
import { setCurrentUser } from "../currentUser/currentUserSlice";
import { fetchUsersAsync } from "../users/usersSlice";
import { AppDispatch } from "../store";

interface AuthState {
    result: {
        name?: string;
        email: string;
        password: string;
    }
    token?: string;
};

const initialState: AuthState = { result: { name: '', email: '', password: '' }, token: '' };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state: AuthState) => {
            localStorage.clear();
            state.result = initialState.result;
            state.token = initialState.token;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(signupAsync.fulfilled, (state, action) => {
                state.result = action.payload.result;
                state.token = action.payload.token;
            })
            .addCase(signupAsync.rejected, (_, action) => {
                console.log(action.error);
            });

        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.result = action.payload.result;
                state.token = action.payload.token;
            })
            .addCase(loginAsync.rejected, (_, action) => {
                console.log(action.error);
            });
    },

});

export const signupAsync = createAsyncThunk<
    AuthState, // Return type
    { name: string; email: string; password: string; }, // Argument type
    { dispatch: AppDispatch }
>(
    'auth/signupAsync',
    async ({ name, email, password }, thunkApi) => {

        const data = { name, email, password };
        const response = await api.signup(data);

        const { dispatch } = thunkApi;
        if (response.status === 200) {

            localStorage.setItem('Profile', JSON.stringify(response.data));
            const profile = localStorage.getItem('Profile');
            if (profile) {
                dispatch(setCurrentUser(JSON.parse(profile)));
            };

            dispatch(fetchUsersAsync());
        }
        return response.data;
    },
);

export const loginAsync = createAsyncThunk<
    AuthState, // Return type
    { email: string; password: string; }, // Argument type
    { dispatch: AppDispatch }
>(
    'auth/loginAsync',
    async ({ email, password }, thunkApi) => {

        const data = { email, password };
        const response = await api.login(data);

        const { dispatch } = thunkApi;
        if (response.status === 200) {
            localStorage.setItem('Profile', JSON.stringify(response.data));
            const profile = localStorage.getItem('Profile');
            if (profile) {
                dispatch(setCurrentUser(JSON.parse(profile)));
            };
        }
        return response.data;
    },
);

export const { logout } = authSlice.actions;
export default authSlice.reducer;