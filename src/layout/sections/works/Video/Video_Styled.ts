import styled from "styled-components";
import {theme} from "styles/Theme.styled";
import back from 'assets/image/mobileBack.png'

const VideoBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 196px;
  height: 292px;
  overflow: hidden;

  @media ${theme.media.tablet} {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    background-image: url("${back}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 4px solid ${theme.colors.accent};
    border-radius: 12px;
    width: 305px;
    height: 152px;
  }
`

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

export const S = {VideoBox, VideoIframe}