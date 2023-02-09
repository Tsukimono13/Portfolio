import React from 'react';
import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'


const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
            <div className={style.greetings}>
                <span>Hi there</span>
                <h1>I am Irina Litvinova</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={style.photo}>
            </div>
        </div>
        </div>
    );
};

export default Main;