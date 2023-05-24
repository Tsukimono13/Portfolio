import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "styles/Theme.styled";

export const MobileMenu = () => {
    const menuItems = ['About me', 'Skills', 'Projects', 'Contact']
    return (
        <StyledMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            <MobilMenuPopup isOpen={true}>
                <ul>
                    {menuItems.map((item, index) => <MenuItem key={index}>
                        <Link href="">{item}</Link>
                    </MenuItem>)
                    }
                </ul>
            </MobilMenuPopup>
        </StyledMenu>
    );
};

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background: ${theme.colors.secondary};
    position: absolute;
    left: 40px;
    bottom: 50px;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
      background: rgba(242, 156, 239, 0);
    `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background: ${theme.colors.secondary};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
      transform: rotate(-45deg) translateY(0);
    `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background: ${theme.colors.secondary};
      position: absolute;
      transform: translate(10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 36px
    `}
    }
  }
`
const MobilMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  background: #F29CEF;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `}
  
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
   flex-direction: column;
    margin-bottom: 105px;
  }
`
const StyledMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`
const Link = styled.a`
  font-size: 40px;
  font-weight: 400;
  line-height: 56px;
  text-align: left;

  color:rgba(31, 28, 31, 1);
  text-decoration: none;
  padding-left: 28px;
  position: relative;
`
const MenuItem = styled.li`
  list-style-type: none;
`
