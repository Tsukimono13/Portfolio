import React from 'react';
import style from './Form.module.css'


const Form = () => {
    return (
        <div className={style.form}>
            <h2 className={style.title}>Contacts</h2>
            <form className={style.formContainer}>
                <input type={"text"}/>
                <input type={"text"}/>
                <textarea></textarea>
           <button type={"submit"}>Send</button>
            </form>
        </div>
    );
};

export default Form;