import styled from "styled-components";
import {theme} from "styles/Theme.styled";

const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #2D2C2C;
  text-decoration: none;
  padding-left:28px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    height: 4px;
    background-color: #F29CEF;
    width: 0;
    left: 68%;
    top: 20px;
    transform: translateX(-50%);
    transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
  }
  
  :hover::after { width: 80%; };
  
  @media ${theme.media.tablet}{
    font-size: 40px;
    font-weight: 400;
    line-height: 56px;
    text-align: left;
    
    ::after{
      display: none;
    }
  }
`
const MenuItem = styled.li`
  list-style-type: none;
`
export const S = {Link, MenuItem}