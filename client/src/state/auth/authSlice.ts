import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from '../../api';

interface AuthState {
    result: {
        name?: string;
        email: string;
        password: string;
    }
    token?: string;
};

const initialState: AuthState = {result: {name: '', email: '', password: ''}, token: ''};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder
        .addCase(signupAsync.fulfilled, (state, action: PayloadAction<{result: AuthState["result"], token: AuthState["token"]}>) => {
            localStorage.setItem('Profile', JSON.stringify(action.payload));
            state.result = action.payload.result;
            state.token = action.payload.token;
        })
        .addCase(signupAsync.rejected, (_, action) => {
            console.log(action.error);
        });

        builder
        .addCase(loginAsync.fulfilled, (state, action: PayloadAction<AuthState>) => {
            localStorage.setItem('Profile', JSON.stringify(action.payload));
            state.result = action.payload.result;
            state.token = action.payload.token;
        })
        .addCase(loginAsync.rejected, (_, action) => {
            console.log(action.error);
        });
    },

});

export const signupAsync = createAsyncThunk(
    'auth/signupAsync',
    async (data: {name: string, email: string, password: string}) => {
        const response = await api.signup(data);
        return response.data;
    },
);

export const loginAsync = createAsyncThunk(
    'auth/loginAsync',
    async (data: {email: string, password: string}) => {
        const response = await api.login(data);
        return response.data;
    },
);

export default authSlice.reducer;