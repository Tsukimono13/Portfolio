import { theme } from "styles/Theme.styled";
import styled from "styled-components";

const MainDiv = styled.div`
  background: ${theme.colors.secondary};
`;

const WelcomeText = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  width: 590px;
  max-width: 100%;

  @media ${theme.media.tablet} {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
    max-width: 440px;
  }

  @media ${theme.media.mobile} {
    font-size: 16px;
    line-height: 22px;
    max-width: 304px;
  }
`;

const ButtonStyled = styled.button`
  background: ${theme.colors.accent};
  padding: 18px 64px 14px;
  border-radius: 16px;
  margin-top: 28px;
  cursor: pointer;

  font-size: 34px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
  color: ${theme.colors.text};

  :hover {
    background: ${theme.colors.accentHover};
  }

  :active {
    background: ${theme.colors.accentHover};
  }

  @media ${theme.media.tablet} {
    font-size: 26px;
    line-height: 36px;
    padding: 14px 48px 10px;
  }

  @media ${theme.media.mobile} {
    font-size: 20px;
    line-height: 28px;
    padding: 12px 48px;
  }
`;
export const S = { MainDiv, WelcomeText, ButtonStyled };
