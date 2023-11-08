import { JsQuizStateType } from '../../types/quizType';
import { createSlice } from '@reduxjs/toolkit';
import { fetchJsQuiz } from './JsActionCreators';

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
        builder.addCase(fetchJsQuiz.pending, (state) => {
            state.loading = true;
            state.error ='';
        }).addCase(fetchJsQuiz.fulfilled, (state, action) => {
            state.loading = false;
            if(action.payload) {
                state.jsquiz = action.payload;
            }
        }).addCase(fetchJsQuiz.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
});

export const jsReducer = jsQuizeSlice.reducer;