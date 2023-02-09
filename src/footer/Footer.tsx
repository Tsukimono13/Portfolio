import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Info from "./info/Info";


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footer}>
                    <Info/>
                </div>
            </div>
        </div>
    );
};

export default Footer;