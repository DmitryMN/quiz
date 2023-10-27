import React from 'react';
import style from '../styles/components/Main.module.scss';

const Play = () => {
    return (
        <div className={style.main}>
            <section>
                <div>
                    <h1 className={style.main__title}>Твой QUIZ</h1>
                </div>
                <div>
                    <h5>Google was founded in what year</h5>
                    <div>
                        <p>1997</p>
                        <p>1998</p>
                    </div>
                    <div>
                        <p>1997</p>
                        <p>1998</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Play;