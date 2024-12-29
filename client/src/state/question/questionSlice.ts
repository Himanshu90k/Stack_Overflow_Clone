import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from '../../api';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

interface questionState {
    _id: string;
    questionTitle: string;
    questionBody: string;
    questionTags: string[];
    noOfAnswers: number;
    upVote: string[];
    downVote: string[];
    userPosted: string;
    userId: string;
    askedOn: string;
    answer?: [
        answerBody: string,
        userAnswered: string,
        userId: string,
        answeredOn: string,
    ];
};

const navigate = useNavigate();
const dispatch = useDispatch<AppDispatch>();

const initialState: questionState[] = [];

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder
        .addCase(askQuestionAsync.fulfilled, (state) => {
            dispatch(fetchAllQuestionAsync());
            navigate('/');
            return state;
        })
        .addCase(askQuestionAsync.rejected, (_, action) => {
            console.log(action.error);
        });

        builder
        .addCase(fetchAllQuestionAsync.fulfilled, (state, action: PayloadAction<questionState[]>) => {
            state = action.payload;
        })
        .addCase(fetchAllQuestionAsync.rejected, (_, action) => {
            console.log(action.error);
        });

        builder
        .addCase(deleteQuestionAsync.fulfilled, () => {
            dispatch(fetchAllQuestionAsync());
            navigate('/');
        })
        .addCase(deleteQuestionAsync.rejected, (_, action) => {
            console.log(action.error);
        });

        builder
        .addCase(voteQuestionAsync.fulfilled, () => {
            dispatch(fetchAllQuestionAsync());
        })
        .addCase(voteQuestionAsync.rejected, (_, action) => {
            console.log(action.error);
        });

        builder
        .addCase(postAnswerAsync.fulfilled, () => {
            dispatch(fetchAllQuestionAsync());
        })
        .addCase(postAnswerAsync.rejected, (_, action) => {
            console.log(action.error);
        });

        builder
        .addCase(deleteAnswerAsync.fulfilled, () => {
            dispatch(fetchAllQuestionAsync());
        })
        .addCase(deleteAnswerAsync.rejected, (_, action) => {
            console.log(action.error);
        });
    },
});

export const askQuestionAsync = createAsyncThunk(
    'question/askQuestionAsync',
    async (data: {qustionTitle: string, questionBody: string, tags: string[], userPosted: string}) => {
        await api.postquestion(data);
    },
);

export const fetchAllQuestionAsync = createAsyncThunk(
    'question/fetchAllQuestionAsync',
    async () => {
        const response = await api.getallquestions();
        return response.data;
    },
);

export const deleteQuestionAsync = createAsyncThunk(
    'question/deleteQuestionAsync',
    async (id: string) => {
        await api.deletequestion(id);
    },
);

export const voteQuestionAsync = createAsyncThunk(
    'question/voteQuestionAsync',
    async (data: {id: string, value: string}) => {
        await api.votequestion(data.id, data.value);
    },
);

export const postAnswerAsync = createAsyncThunk(
    'question/postAnswerAsync',
    async (data: {id: string, noOfAnswers: number, answerBody: string, userAnswered: string}) => {
        const response = await api.postanswer(data.id, data.noOfAnswers, data.answerBody, data.userAnswered);
        return response.data;
    },
);

export const deleteAnswerAsync = createAsyncThunk(
    'question/deleteAnswerAsync',
    async (data: {id: string, answerId: string, noOfAnswers: number}) => {
        await api.deleteanswer(data.id, data.answerId, data.noOfAnswers);
    },
);

export default questionSlice.reducer;