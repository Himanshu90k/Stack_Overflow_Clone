import * as api from '../api';
import { setcurrentuser } from './currentuser.Js';
import { fetchallusers } from './users';

export const signup = (authdata, navigate) => async(dispatch) => {
    try {
        const { data } = await api.signup(authdata);
        dispatch({ type: 'AUTH', data });

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

export const login = (authdata, navigate) => async(dispatch) => {
    try {
        const { data } = await api.login(authdata);
        dispatch({ type: 'AUTH', data });

        const profile = localStorage.getItem("Profile");
        if (profile) {
            dispatch(setcurrentuser(JSON.parse(profile)));
        }

        navigate("/");
    } catch (error) {
        console.log(error);
    }
};