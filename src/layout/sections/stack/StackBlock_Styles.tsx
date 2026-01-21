import styled from "styled-components";
import { theme } from "styles/Theme.styled";

const Main = styled.div`
  background: ${theme.colors.secondary};
`;

const StackContainer = styled.div`
  display: flex;
  gap: 71px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
    max-width: 100%;
  }

  @media ${theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    max-width: 100%;
  }
`;

const StackTextBlock = styled.div`
  width: 371px;
  flex-shrink: 0;
  max-width: 100%;
  box-sizing: border-box;

  @media ${theme.media.tablet} {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }

  @media ${theme.media.mobile} {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
`;

const StackInfo = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin-top: 16px;
  color: ${theme.colors.primary};
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  box-sizing: border-box;
  width: 100%;

  @media ${theme.media.tablet} {
    font-size: 16px;
    padding: 0;
    width: 100%;
  }

  @media ${theme.media.mobile} {
    font-size: 14px;
    padding: 0;
    width: 100%;
  }
`;

export const S = { Main, StackContainer, StackInfo, StackTextBlock };
