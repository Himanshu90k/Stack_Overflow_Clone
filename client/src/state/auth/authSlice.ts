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
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(signupAsync.fulfilled, (state, action) => {
                state.result = action.payload.data.result;
                state.token = action.payload.data.token;
                action.payload.navigate('/');
            })
            .addCase(signupAsync.rejected, (_, action) => {
                console.log(action.error);
            });

        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.result = action.payload.data.result;
                state.token = action.payload.data.token;
                action.payload.navigate('/');
            })
            .addCase(loginAsync.rejected, (_, action) => {
                console.log(action.error);
            });
    },

});

export const signupAsync = createAsyncThunk<
    {data: AuthState, navigate: (path: string) => void}, // Return type
    { name: string; email: string; password: string; navigate: (path: string) => void }, // Argument type
    { dispatch: AppDispatch }
>(
    'auth/signupAsync',
    async ({ name, email, password, navigate }, thunkApi) => {

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
            navigate('/');
        }
        return {data: response.data, navigate};
    },
);

export const loginAsync = createAsyncThunk<
    {data: AuthState, navigate: (path: string) => void }, // Return type
    { email: string; password: string; navigate: (path: string) => void }, // Argument type
    { dispatch: AppDispatch }
>(
    'auth/loginAsync',
    async ({ email, password, navigate }, thunkApi) => {

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
        return {data: response.data, navigate};
    },
);

export default authSlice.reducer;