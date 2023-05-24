import React from 'react';
import {Wrapper} from "components/FlexWrapper";
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
import styled from "styled-components";
import {theme} from "styles/Theme.styled";

const stackIcons = [{icon: react, title: 'React'}, {icon: next, title: 'Next.js'}, {icon: redux, title: 'Redux'}, {icon: ts, title: 'TypeScript'}, {icon: js, title: 'JavaScript'}, {icon: css, title: 'CSS'}, {icon: scss, title: 'SCSS'}, {icon: html, title: 'HTML'}, {icon: tailwind, title: 'Tailwind'}, {icon: material, title: 'Material UI' }]

const SkillCart = () => {
    return (
        <Box>
            {stackIcons.map((i, index) => <IconWrapper key={index}>
                <StyledIcon src={i.icon}/>
                <StyledDescription>{i.title}</StyledDescription>
            </IconWrapper>)}
        </Box>
    );
};

export default SkillCart;

const StyledDescription = styled.p`
color:#FFFFFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin-top: 12px;
`
const StyledIcon = styled.img`
  width: 100px;
  height: 100px;
`
const IconWrapper = styled.div`
`
const Box = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  flex-wrap: wrap;
 
  @media ${theme.media.mobile}{

  }
`