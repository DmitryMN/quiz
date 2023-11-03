import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../utils/appAsyncThunk';
import { QuizType } from '../../types/quizType';
import { jsQuizApi } from '../../api/QuizApi';
import axios, { AxiosError } from 'axios';


// export const fetchJsQuiz = createAsyncThunk(
//     'jsQuiz/fetchJsQuiz',
//     async () => {

//     }
// );

export const fetchJsQuiz = createAppAsyncThunk<any>(
    'jsQuiz/fetchJsQuiz',
    async () => {
        try {
            const response = await jsQuizApi.getJsQuiz();
            return response.data;
        } catch (e) {
            if(axios.isAxiosError(e)) {
                console.log(e.status)
            } else {
                console.log(e)
            }
        }
    }
)