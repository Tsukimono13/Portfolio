import React from 'react';
import style from './Form.module.css'


const Form = () => {
    return (
        <div className={style.form}>
            <h2 className={style.title}>Contacts</h2>
            <form className={style.formContainer}>
                <input/>
                <input/>
                <textarea></textarea>
            </form>
            <div><button>Send</button></div>
        </div>
    );
};

export default Form;