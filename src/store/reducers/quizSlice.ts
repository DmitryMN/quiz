import { QizzesStateType } from "../../types/quizType";
import { createSlice } from '@reduxjs/toolkit';

let initialState: QizzesStateType = {
    quizzes: {
        js: []
    },
    loading: false,
    error: ""
}


const quizeSlice = createSlice({
    name: 'qiuz',
    initialState,
    reducers: {}
});