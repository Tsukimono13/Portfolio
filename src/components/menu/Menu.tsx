import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme.styled";

export const Menu = () => {
    const menuItems = ['About me', 'Skills', 'Projects', 'Contact']
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item, index) => <MenuItem key={index}>
                    <Link href="">{item}</Link>
                </MenuItem>)
                }
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content:flex-end;
    align-items: center;
    min-height: 89px;
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }
`

const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
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
  
  :hover::after { width: 80%; }
`
const MenuItem = styled.li`
  list-style-type: none;
`
