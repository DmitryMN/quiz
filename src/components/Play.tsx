import React from 'react';
import { Button } from '@mui/material';
import style from '../styles/components/Play.module.scss'

const Play: React.FC<any> = () => {
    return (
        <section className={style.section}>
            <h1 className={style.play__title}>Твой QUIZ</h1>
            <div className={style.questions}> 
                <div className={style.questions__container}>
                    <h5 className={style.questions__title}>Google was founded in what year</h5>
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