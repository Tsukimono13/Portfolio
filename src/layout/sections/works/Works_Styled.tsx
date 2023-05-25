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
  gap: 48px;
  flex-direction: column;
  padding-bottom: 128px;

  @media ${theme.media.tablet} {
    gap: 0;
  }
`
export const S = {MainDiv, WorkCards}