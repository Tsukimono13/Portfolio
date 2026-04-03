import styled from "styled-components";
import { theme } from "styles/Theme.styled";

const POSITION = { bottom: 115, right: 44, rightTablet: 23 } as const;

const ButtonStyle = styled.button`
  position: fixed;
  bottom: ${POSITION.bottom}px;
  right: ${POSITION.right}px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  @media ${theme.media.tablet} {
    right: ${POSITION.rightTablet}px;
  }
`;
const Icon = styled.img`
  @media ${theme.media.tablet} {
    height: 54px;
    width: 28px;
  }
`;

export const S = {
  ButtonStyle,
  Icon,
};
