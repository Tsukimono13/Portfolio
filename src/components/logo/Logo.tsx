import React from 'react';
import logo from "assets/image/Logo.svg";
import styled from "styled-components";
import {theme} from "styles/Theme.styled";

const Logo = () => {
    return (
        <Link href={''}>
            <img src={logo}/>
        </Link>
    );
};

export default Logo;

const Link = styled.a`
 @media ${theme.media.mobile}{
   margin-top: 52px;
   margin-left: 36px;
 }
`
