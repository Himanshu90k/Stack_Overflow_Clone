import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../users/usersSlice";

const initialState: UserType = {
    result: {
        _id: '',
        name: '',
        email: '',
        password: '',
        about: '',
        tags: [''],
        joinedon: ''
    },
    token: '',
};

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state: UserType, action: PayloadAction<UserType>) => {
            state.result = action.payload.result;
            state.token = action.payload.token;
        },
    },
});

export const { setCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;