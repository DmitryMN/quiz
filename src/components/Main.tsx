import React from 'react';
import Button from '@mui/material/Button';
import style from '../styles/components/Main.module.scss';


const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <section className={style.main__content}>
                    <div className={style.main__logo}>
                        <span>
                            <img className={style.main__img} src='./logo.svg' alt="main_logo" />
                        </span>
                    </div>
                    <h1 className={style.main__title}>Твой Квиз</h1>
                    <div className={style.nav}>
                        <Button href='/play' className={style.nav__play} variant='contained'>Играть</Button>
                        <div className={style.nav__auth}>
                            <Button href='/login' variant='contained'>Войти</Button>
                            <Button href='/register' variant='contained'>Выход</Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Main;