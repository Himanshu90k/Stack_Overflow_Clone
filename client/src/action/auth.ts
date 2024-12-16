import * as api from '../api';
import { setcurrentuser } from './currentuser';
import { fetchallusers } from './users';
import { Dispatch } from 'redux';

export interface AuthData {
    email: string;
    password: string;
    name?: string;
};

type NavigateFunction = (path: string) => void;

export const signup = (authdata: AuthData, navigate: NavigateFunction) => async(dispatch: Dispatch) => {
    try {
        const { data } = await api.signup(authdata);
        dispatch({ type: "AUTH", data });

        const profile = localStorage.getItem("Profile");
        if (profile) {
            dispatch(setcurrentuser(JSON.parse(profile)));
        }

        dispatch(fetchallusers());
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export const login = (authdata: AuthData, navigate: NavigateFunction) => async(dispatch: Dispatch) => {
    try {
        const { data } = await api.login(authdata);
        dispatch({ type: "AUTH", data });

        const profile = localStorage.getItem("Profile");
        if (profile) {
            dispatch(setcurrentuser(JSON.parse(profile)));
        }

        navigate("/");
    } catch (error) {
        console.log(error);
    }
};