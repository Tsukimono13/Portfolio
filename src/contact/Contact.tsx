import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Form from "./form/Form";


const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <div className={style.contact}>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

export default Contact;