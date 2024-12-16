import axios from 'axios';
import { AuthData } from '../action/auth';

const API = axios.create({
    baseURL: "http://localhost:7000"
});

API.interceptors.request.use((req) => {
    if(localStorage.getItem("Profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("Profile")).token
        }`
    }
    return req;
});

export const login = (authdata: AuthData) => API.post('user/login', authdata);
export const signup = (authdata: AuthData) => API.post('user/signup', authdata);
export const getallusers = () => API.get('/user/getallusers');
export const updateprofile = (id, updatedata) => API.patch(`user/update${id}`, updatedata);

export const postquestion = (questiondata) => API.post("/question/Ask", questiondata);
export const getallquestions = () => API.get('/questions/get');
export const deletequestion = (id) => API.delete(`/question/delete/${id}`);
export const votequestion = (id, value) => API.patch(`/question/vote/${id}`, {value});