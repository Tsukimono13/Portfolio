import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'React'} description={'JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.'}/>
                    <Skill title={'CSS'} description={'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).'}/>
                    <Skill title={'HTML'} description={'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;