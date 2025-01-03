import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from '../../api';
import { AppDispatch } from "../store";

export interface questionState {
    _id: string;
    questiontitle: string;
    questionbody: string;
    questiontags: string[];
    noofanswers: number;
    upvote: string[];
    downvote: string[];
    userposted: string;
    userid: string;
    askedon: string;
    answer: [
        {
            _id: string;
            answerbody: string;
            useranswered: string;
            userid: string;
            answeredon: string;
        },
    ];
};


const initialState: questionState[] = [];

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(askQuestionAsync.fulfilled, (state) => {
                return state;
            })
            .addCase(askQuestionAsync.rejected, (_, action) => {
                console.log(action.error);
            });

        builder
            .addCase(fetchAllQuestionAsync.fulfilled, (_, action: PayloadAction<questionState[]>) => {
                return action.payload;
            })
            .addCase(fetchAllQuestionAsync.rejected, (_, action) => {
                console.log(action.error);
            });

        builder
            .addCase(deleteQuestionAsync.rejected, (_, action) => {
                console.log(action.error);
            });

        builder
            .addCase(voteQuestionAsync.rejected, (_, action) => {
                console.log(action.error);
            });

        builder
            .addCase(postAnswerAsync.rejected, (_, action) => {
                console.log(action.error);
            });

        builder
            .addCase(deleteAnswerAsync.rejected, (_, action) => {
                console.log(action.error);
            });
    },
});

export const askQuestionAsync = createAsyncThunk<
    void, // return type
    { questionTitle: string, questionBody: string, tags: string[], userPosted: string, navigate: (path: string) => void }, // payload type
    { dispatch: AppDispatch } //dispatch type
>(
    'question/askQuestionAsync',
    async ({ questionTitle, questionBody, tags, userPosted, navigate }, thunkApi) => {
        const { dispatch } = thunkApi;
        const data = { questiontitle: questionTitle, questionbody: questionBody, tags, userposted: userPosted };
        const response = await api.postquestion(data);

        if(response.status === 200) {
            dispatch(fetchAllQuestionAsync());
            navigate('/');
        }
    },
);

export const fetchAllQuestionAsync = createAsyncThunk(
    'question/fetchAllQuestionAsync',
    async () => {
        const response = await api.getallquestions();
        return response.data;
    },
);

export const deleteQuestionAsync = createAsyncThunk<
    void,
    { id: string, navigate: (path: string) => void},
    { dispatch: AppDispatch }
>(
    'question/deleteQuestionAsync',
    async ({id, navigate}, thunkApi) => {
        const { dispatch } = thunkApi;
        const response = await api.deletequestion(id);

        if(response.status === 200) {
            dispatch(fetchAllQuestionAsync());
            navigate('/');
        }
    },
);

export const voteQuestionAsync = createAsyncThunk<
    void,
    {id: string, value: string},
    { dispatch: AppDispatch }
>(
    'question/voteQuestionAsync',
    async ({ id, value }, thunkApi) => {
        const { dispatch } = thunkApi;
        const response = await api.votequestion(id, value);

        if(response.status === 200) {
            dispatch(fetchAllQuestionAsync());
        }
    },
);

export const postAnswerAsync = createAsyncThunk<
    void,
    {id: string, noOfAnswers: number, answerBody: string, userAnswered: string},
    { dispatch: AppDispatch }
>(
    'question/postAnswerAsync',
    async ({ id, noOfAnswers, answerBody, userAnswered }, thunkApi) => {
        const { dispatch } = thunkApi;
        const response = await api.postanswer(id, noOfAnswers, answerBody, userAnswered);
        
        if(response.status === 200) {
            dispatch(fetchAllQuestionAsync());
        }
    },
);

export const deleteAnswerAsync = createAsyncThunk<
    void,
    {id: string, answerId: string, noOfAnswers: number},
    { dispatch: AppDispatch }
>(
    'question/deleteAnswerAsync',
    async ({ id, answerId, noOfAnswers }, thunkApi) => {
        const { dispatch } = thunkApi;
        const response = await api.deleteanswer(id, answerId, noOfAnswers);

        if(response.status === 200) {
            dispatch(fetchAllQuestionAsync());
        }
    },
);

export default questionSlice.reducer;