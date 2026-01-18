import styled from "styled-components";
import { theme } from "styles/Theme.styled";

export const Container = styled.div`
  max-width: 1230px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  border: 1px solid red;

  @media ${theme.media.mobile} {
    padding: 0 10px;
  }
`;
