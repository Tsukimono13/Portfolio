import React from 'react';
import style from './Text.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Text = () => {
    return (
        <div className={style.text}>
            <h1 className={style.h1}>Looking at variants of distant work</h1>
            <button>Text me</button>
        </div>
    );
};

export default Text;