import React from 'react';
import logo from "assets/image/Logo.svg";
import styled from "styled-components";

const Logo = () => {
    return (
        <Link href={''}>
            <img src={logo}/>
        </Link>
    );
};

export default Logo;

const Link = styled.a`

`
