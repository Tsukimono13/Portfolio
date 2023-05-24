import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme.styled";

export const HeaderMenu = () => {
    const menuItems = ['About me', 'Skills', 'Projects', 'Contact']
    return (
        <StyledHeaderMenu>
            <ul>
                {menuItems.map((item, index) => <MenuItem key={index}>
                    <Link href="">{item}</Link>
                </MenuItem>)
                }
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    justify-content:flex-end;
    gap: 30px;
  }
  
`

const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #2D2C2C;
  text-decoration: none;
  padding-left:28px;
  
text-align: center;
`
const MenuItem = styled.li`
  list-style-type: none;
`
