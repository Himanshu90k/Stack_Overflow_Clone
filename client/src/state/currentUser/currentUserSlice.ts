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
    }
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