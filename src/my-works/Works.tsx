import React from 'react';
import style from './Works.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.works}>
                <Work title={'Todolist'} description={'This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository. master. Todo List is very simple and intuitive, with its minimal and clean style. In fact, it has a very fast and lightweight interface, because we care about your battery life. Enjoy!'}/>
                <Work title={'Social Network'} description={'A social network is a social structure made up of a set of social actors (such as individuals or organizations), sets of dyadic ties, and other social interactions between actors.'}/>
                </div>
            </div>
        </div>
    );
};

export default Works;