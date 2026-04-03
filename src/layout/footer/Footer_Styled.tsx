import styled from "styled-components";
import {theme} from "styles/Theme.styled";

const MainDiv = styled.div`
  min-height: 25vh;
  background: rgba(240, 235, 240, 1);
`

const Icons = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.2s ease;

  :hover {
    transform: scale(1.1);
  }

  @media ${theme.media.mobile} {
    width: 32px;
    height: 32px;
  }
`
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 28px;
  margin-top: 48px;

  @media ${theme.media.mobile} {
    gap: 20px;
    margin-top: 32px;
  }
`

const MyNameServe = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: ${theme.colors.text};
  margin-top: 32px;

  @media ${theme.media.mobile} {
    margin-top: 24px;
    font-size: 12px;
  }
`
const DesignName = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: ${theme.colors.text};
  margin-top: 12px;
  margin-bottom: 68px;

  @media ${theme.media.mobile} {
    font-size: 12px;
    margin-bottom: 40px;
  }
`
const LinkDesignName = styled.a`
  color: ${theme.colors.text};
  text-decoration-line: underline;
`
export const S = {MainDiv, Icons, MyNameServe, IconContainer, DesignName, LinkDesignName}