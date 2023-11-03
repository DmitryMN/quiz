import axios from "axios";
import { QuizType } from "../types/quizType";

const instance = axios.create({
    baseURL: "http://localhost:5000",
});


export const jsQuizApi = {
    getJsQuiz: async () => {
        return instance.get<QuizType[]>('/jsquiz')
    }
}