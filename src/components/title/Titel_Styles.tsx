import {theme} from "styles/Theme.styled";
import styled from "styled-components";

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
export const S = {StyledTitle, TitleContainer}