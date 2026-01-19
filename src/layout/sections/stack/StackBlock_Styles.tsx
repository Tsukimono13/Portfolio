import styled from "styled-components";
import { theme } from "styles/Theme.styled";

const Main = styled.div`
  background: ${theme.colors.secondary};
`;

const StackContainer = styled.div`
  display: flex;
  gap: 71px;
  @media ${theme.media.tablet} {
  }
`;

const StackTextBlock = styled.div`
  width: 371px;
  flex-shrink: 0;
`;

const StackInfo = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin-top: 16px;
  color: ${theme.colors.primary};
`;

export const S = { Main, StackContainer, StackInfo, StackTextBlock };
