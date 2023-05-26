import {theme} from "styles/Theme.styled";
import styled from "styled-components";


const MainDiv = styled.div`
  min-height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  @media ${theme.media.mobile} {
    margin-top: 64px;
    margin-bottom: 50px;
  }
`

const AboutMe = styled.h1`
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  margin-top: 40px;
  color: #1F1C1F;
  width: 488px;

  @media ${theme.media.tablet} {
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    width: 304px;
    margin-bottom: 100px;
  }
`
const MyPhoto = styled.img`
  width: 558px;
  height: 534px;
  rotate: -3.59deg;
  position: relative;
  z-index: 9999;
  margin-top: 50px;

  @media ${theme.media.tablet} {
    width: 316px;
    height: 303px;
    margin-top: 32px;
  }
`

const NameImg = styled.img`
  @media ${theme.media.tablet} {
    width: 304px;
    height: 148px;
    padding-right: 40px;
  }
`

const Shadow = styled.img`
  position: absolute;
  right: -85px;
  top: 140px;
  width: 769px;
  height: 638px;
 

  @media screen and (max-width: 1120px) {
    display: none;
  }
`
export const S = {MainDiv, AboutMe, MyPhoto, NameImg, Shadow}