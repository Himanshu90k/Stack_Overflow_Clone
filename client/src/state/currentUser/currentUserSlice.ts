import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from '../../api';
import { UserType } from "../users/usersSlice";

const initialState: UserType = {
    _id: '',
    name: '',
    email: '',
    password: '',
    about: '',
    tags: [''],
    joinedon: ''
};

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserType>) => {
            state = action.payload;
        },
    },
});

export const { setCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;