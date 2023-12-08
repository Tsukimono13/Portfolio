import styled from "styled-components";
import {theme} from "styles/Theme.styled";
import back from 'assets/image/mobileBack.png'

const VideoBox = styled.div`
  position: absolute;
  top: 41px;
  left: 390px;
  height: 100%;
  z-index: 1;

  @media ${theme.media.tablet} {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    background-image: url("${back}");
    background-repeat: no-repeat;
    background-size: cover;
    border: 4px solid #F29CEF;
    border-radius: 12px;
    width: 305px;
    min-height: 438px;
  }
`
export const S = {VideoBox}