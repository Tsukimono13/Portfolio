import React from 'react';
import style from './Info.module.css'



const Info = () => {
    return (
        <div className={style.info}>
            <h2 className={style.h2}>Irina Litvinova</h2>
            <div className={style.icons}>
                <div className={style.red}></div>
                <div className={style.purple}></div>
                <div className={style.red}></div>
                <div className={style.purple}></div>
                <div className={style.red}></div>
                <div className={style.purple}></div>
            </div>
            <h5 className={style.h5}>@2023 All rights reserved</h5>
        </div>
    );
};

export default Info;