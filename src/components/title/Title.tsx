import React from 'react';

import styled from "styled-components";
import {theme} from "styles/Theme.styled";

type TitlePropsType = {
    title: string
    color: string
}

const Title:React.FC<TitlePropsType> = ({title, color}) => {
    return (
        <TitleContainer>
            <StyledTitle color={color || '#F29CEF'}>{title}</StyledTitle>
        </TitleContainer>
    );
};

export default Title;

const StyledTitle = styled.h2`
  font-size: 88px;
  font-weight: 800;
  line-height: 101px;
  margin-top: 92px;
  margin-bottom: 74px;
  color: ${props => props.color || 'red'};
  
  @media ${theme.media.mobile} {
    font-size: 60px;
    line-height: 69px;
  }
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`
