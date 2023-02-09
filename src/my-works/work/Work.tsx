import React from 'react';
import style from './Work.module.css'

type WorkPropsType = {
    title: string
    description: string
}
const Work = (props: WorkPropsType) => {
    return (
        <div className={style.workContainer}>
            <div className={style.imgContainer}>
            <img></img>
            <button><a href={''} className={style.href}>Details</a></button>
            </div>
            <h3 className={style.h3}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Work;