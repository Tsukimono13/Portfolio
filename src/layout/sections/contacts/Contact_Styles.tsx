import {theme} from "styles/Theme.styled";
import styled from "styled-components";

const MainDiv = styled.div`
  min-height: 60vh;
  background: ${theme.colors.secondary};
`

const WelcomeText = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  width: 590px;

  @media ${theme.media.mobile} {
    font-size: 16px;
    line-height: 22px;
    width: 304px;
  }
`

const ButtonStyled = styled.button`
  background: rgba(242, 156, 239, 1);
  padding: 18px 64px 14px;
  border-radius: 16px;
  margin-top: 28px;
  margin-bottom: 136px;
  cursor: pointer;

  font-size: 34px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
  color: ${theme.colors.text};


  :hover {
    background: #FCC419;
  }

  :active {
    background: #FCC419;
  }

  @media ${theme.media.mobile} {
    font-size: 20px;
    line-height: 28px;
    padding: 12px 77px;
  }
`
export const S = {MainDiv, WelcomeText, ButtonStyled}