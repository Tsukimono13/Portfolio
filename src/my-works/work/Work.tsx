import React from 'react';
import style from './Work.module.css'

type WorkPropsType = {
    title: string
    description: string
style: any
}
const Work = (props: WorkPropsType) => {
    return (
        <div className={style.workContainer}>
            <div className={style.imgContainer} style={props.style}>
            <button className={style.button}><a href={''} className={style.href}>Details</a></button>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Work;