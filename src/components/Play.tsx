import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import style from '../styles/components/Play.module.scss';
import { fetchJsQuiz } from '../store/reducers/JsActionCreators';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const Play: React.FC<any> = () => {

    const { jsquiz, loading } = useAppSelector((state) => state.jsquiz)
    const dispatch = useAppDispatch();
    const quiz1 = jsquiz[0]

    useEffect(() => {
        dispatch(fetchJsQuiz())
    }, []);

    if (loading) return <div>Идет загрузка...</div>

    return (
        <section className={style.section}>
            <h1 className={style.play__title}>Твой QUIZ</h1>
            <div className={style.questions}>
                <div className={style.questions__container}>
                    <h5 className={style.questions__title}>{quiz1?.question}</h5>
                    <div className={style.questions__main}>
                        <p>1997</p>
                        <p>1998</p>
                    </div>
                    <div className={style.questions__main}>
                        <p>1997</p>
                        <p>1998</p>
                    </div>
                </div>
                <div>
                    <Button variant='contained'>Предыдущий</Button>
                    <Button variant='contained'>Следующий</Button>
                    <Button variant='contained'>Выход</Button>
                </div>
            </div>
        </section>
    )
}

export default Play;