import {theme} from "styles/Theme.styled";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: ${theme.colors.primary};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999999999999;
`

export const S = {StyledHeader}