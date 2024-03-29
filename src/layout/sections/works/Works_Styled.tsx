import {theme} from "styles/Theme.styled";
import styled from "styled-components";

const MainDiv = styled.div`
  min-height: 100vh;
  background: ${theme.colors.primary};
`
const WorkCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  flex-direction: column;
  padding-bottom: 136px;

  @media ${theme.media.tablet} {
    gap: 0;
    padding-bottom: 64px;
  }
`
export const S = {MainDiv, WorkCards}