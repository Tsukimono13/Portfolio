import React from 'react';
import logo from "assets/image/Logo.svg";
import styled from "styled-components";
import {theme} from "styles/Theme.styled";
import {animateScroll as scroll} from "react-scroll";

const Logo = () => {
    return (
        <Link onClick={()=>{scroll.scrollToTop()}}>
            <img src={logo}/>
        </Link>
    );
};

export default Logo;

const Link = styled.a`
:hover{
  cursor: pointer;
}
 @media ${theme.media.tablet}{
   margin-top: 35px;
   margin-left: 36px;
   padding-bottom: 6px;
 }
`
