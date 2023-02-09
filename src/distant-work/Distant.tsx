import React from 'react';
import style from './Distant.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Text from "./text/Text";

const Distant = () => {
    return (
        <div className={style.distant}>
            <div className={`${styleContainer.container} ${style.workContainer}`}>
                <div className={style.work}>
                    <Text/>
                </div>
            </div>
        </div>
    );
};

export default Distant;