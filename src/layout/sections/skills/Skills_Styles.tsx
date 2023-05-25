import styled from "styled-components";
import {theme} from "styles/Theme.styled";

const Main = styled.div`
  background: ${theme.colors.secondary};
  min-height: 70vh;
`
const SkillContainer = styled.div`
  width: 756px;
  margin-bottom: 136px;
  
  @media ${theme.media.tablet}{
    width: 375px;
  }
`

export const S = {Main, SkillContainer}