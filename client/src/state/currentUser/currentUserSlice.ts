import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrentUserType {
    result: {
        _id: string;
        name: string;
        email?: string;
        password?: string;
        about: string;
        tags: [string];
        joinedon: string;
    };
    token?: string;
};

const initialState: CurrentUserType = {
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
        setCurrentUser: (state: CurrentUserType, action: PayloadAction<CurrentUserType>) => {
            state.result = action.payload.result;
            state.token = action.payload.token;
        },
    },
});

export const { setCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;