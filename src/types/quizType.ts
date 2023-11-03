
export type QuizType = {
    id: number
    question: string
    answer: string
    options: string[]
}

export type JsQuizStateType = {
    jsquiz: QuizType[]
    loading: boolean
    error: string
}
