import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from '../../api'

export interface UserType {
    _id: string;
    name: string;
    email?: string;
    password?: string;
    about: string;
    tags?: string[];
    joinedon: string;
};

const initialState: UserType[] = [];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder.addCase(fetchUsersAsync.fulfilled, (_, action: PayloadAction<UserType[]>) => {
            return action.payload;
        });

        builder.addCase(updateProfileAsync.fulfilled, (state, action: PayloadAction<UserType>) => {
            return state.map((user) => user._id === action.payload._id ? action.payload : user);
        });
    },
});

export const fetchUsersAsync = createAsyncThunk(
    'users/fetchUsersAsync',
    async () => {
        const response = await api.getallusers();
        return response.data;
    },
);

export const updateProfileAsync = createAsyncThunk(
    'users/updateProfileAsync',
    async (data: {id: string, updatedata: {name: string, about: string, tags: string[]}}) => {
        const response = await api.updateprofile(data.id, data.updatedata);
        return response.data;
    },
);

export default usersSlice.reducer;