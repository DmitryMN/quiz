
export type QuizType = {
    id: number
    question: string
    answer: string
    options: string[]
}

export type JsQuizeType = {
    js: QuizType[]
}

export type QizzesStateType = {
    quizzes: JsQuizeType
    loading: boolean
    error: string
}