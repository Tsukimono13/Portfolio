import React from 'react';
import react from "assets/icons/stackIcons/react.svg";
import redux from "assets/icons/stackIcons/redux.svg";
import ts from "assets/icons/stackIcons/ts.svg";
import js from "assets/icons/stackIcons/js.svg";
import css from "assets/icons/stackIcons/css.svg";
import scss from "assets/icons/stackIcons/scss.svg";
import html from "assets/icons/stackIcons/htnl.svg";
import tailwind from "assets/icons/stackIcons/tailwind.svg";
import material from "assets/icons/stackIcons/material.svg";
import next from "assets/icons/stackIcons/next.svg";
import {S} from "components/stack/Stack_Styles"
import {Fade} from "react-awesome-reveal";

const stackIcons = [
    {icon: react, title: 'React'}, {icon: next, title: 'Next.js'},
    {icon: redux, title: 'Redux'}, {icon: ts, title: 'TypeScript'}, {icon: js, title: 'JavaScript'},
    {icon: css, title: 'CSS'}, {icon: scss, title: 'SCSS'}, {icon: html, title: 'HTML'},
    {icon: tailwind, title: 'Tailwind'}, {icon: material, title: 'Material UI'}
]

const Stack = () => {
    return (
        <S.ContainerForIcons>
            <Fade cascade={true} damping={0.2}>
            {stackIcons.map((i, index) => <div key={index}>
                <S.StyledIcon src={i.icon}/>
                <S.StyledDescription>{i.title}</S.StyledDescription>
            </div>)}
            </Fade>
        </S.ContainerForIcons>
    );
};

export default Stack;

