import {theme} from "styles/Theme.styled";
import styled from "styled-components";
import {TitlePropsType} from "./Title";

const StyledTitle = styled.h2<Omit<TitlePropsType, 'title'>>`
  font-size: 88px;
  font-weight: 800;
  line-height: 101px;
  margin-top: 92px;
  margin-bottom: 72px;
  color: ${props => props.color || 'red'};

  @media ${theme.media.mobile} {
    font-size: 60px;
    line-height: 69px;
    margin-top: 56px;
    margin-bottom: ${props => props.marginBot || '48px'};
  }
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const S = {StyledTitle, TitleContainer}