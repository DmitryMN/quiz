import { JsQuizStateType } from "../../types/quizType";
import { createSlice } from '@reduxjs/toolkit';

let initialState: JsQuizStateType = {
    jsquiz: [],
    loading: false,
    error: ""
}


const jsQuizeSlice = createSlice({
    name: 'jsqiuz',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export const jsReducer = jsQuizeSlice.reducer;