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

export const login = (authdata: {email: string, password: string}) => API.post('user/login', authdata);
export const signup = (authdata: {name: string, email: string, password: string}) => API.post('user/signup', authdata);
export const getallusers = () => API.get('/user/getallusers');
export const updateprofile = (id: string, updatedata: {name: string, about: string, tags: string[]}) => API.patch(`user/update/${id}`, updatedata);

export const postquestion = (questiondata: {qustionTitle: string, questionBody: string, tags: string[], userPosted: string}) => API.post("/question/Ask", questiondata);
export const getallquestions = () => API.get('/question/get');
export const deletequestion = (id: string) => API.delete(`/question/delete/${id}`);
export const votequestion = (id: string, value: string) => API.patch(`/question/vote/${id}`, {value});

export const postanswer = (id: string, noofanswers: number, answerbody: string, useranswered: string) => API.patch(`/answer/post/${id}`, {noofanswers, answerbody, useranswered});
export const deleteanswer = (id: string, answerid: string, noofanswers: number) => API.patch(`/answer/delete/${id}`, {answerid, noofanswers});