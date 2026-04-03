import {theme} from "styles/Theme.styled";
import styled from "styled-components";


const MainDiv = styled.div`
  min-height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
`

const AboutMe = styled.h1`
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  margin-top: 40px;
  color: ${theme.colors.text};
  width: 488px;

  @media ${theme.media.desktop} {
    width: 400px;
    font-size: 20px;
    line-height: 28px;
  }

  @media ${theme.media.tablet} {
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    width: 304px;
    margin-top: 20px;
    padding-bottom: 0px;
  }
`

const MyPhoto = styled.img`
  width: 558px;
  height: 534px;
  rotate: -3.59deg;
  position: relative;
  z-index: 9999;
  margin-top: 50px;
  overflow-y: hidden;

  @media ${theme.media.desktop} {
    width: 420px;
    height: 402px;
  }

  @media ${theme.media.tablet} {
    width: 316px;
    height: 303px;
    margin-top: 32px;
    margin-bottom: 50px;
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

  @media ${theme.media.desktop} {
    display: none;
  }
`
export const S = {MainDiv, AboutMe, MyPhoto, NameImg, Shadow}