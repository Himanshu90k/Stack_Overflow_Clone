import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:7000"
});

API.interceptors.request.use((req) => {
    const profile = localStorage.getItem('Profile');
    if(profile) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(profile).token
        }`
    }
    return req;
});

export const login = (authdata) => API.post('user/login', authdata);
export const signup = (authdata) => API.post('user/signup', authdata);
export const getallusers = () => API.get('/user/getallusers');
export const updateprofile = (id, updatedata) => API.patch(`user/update/${id}`, updatedata);

export const postquestion = (questiondata) => API.post("/question/Ask", questiondata);
export const getallquestions = () => API.get('/question/get');
export const deletequestion = (id) => API.delete(`/question/delete/${id}`);
export const votequestion = (id, value) => API.patch(`/question/vote/${id}`, {value});

export const postanswer = (id, noofanswers, answerbody, useranswered) => API.patch(`/answer/post/${id}`, {noofanswers, answerbody, useranswered});
export const deleteanswer = (id, answerid, noofanswers) => API.patch(`/answer/delete/${id}`, {answerid, noofanswers});