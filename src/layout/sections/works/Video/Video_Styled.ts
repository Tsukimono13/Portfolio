import styled from "styled-components";
import {theme} from "styles/Theme.styled";

const VideoBox = styled.div`
  position: absolute;
  top: 41px;
  left: 390px;
  width: 100%;
  height: 100%;
  z-index: 1;
  @media ${theme.media.tablet} {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 16px;
  }
`
export const S = {VideoBox}