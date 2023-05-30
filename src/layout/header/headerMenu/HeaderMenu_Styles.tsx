import styled, {css} from "styled-components";
import {theme} from "styles/Theme.styled";

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -132px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999999;

  span {
    display: block;
    width: 28px;
    height: 4px;
    background: ${theme.colors.secondary};
    position: absolute;
    left: 22px;
    bottom: 11px;
    border-radius: 4px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background: rgba(242, 156, 239, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 28px;
      height: 4px;
      background: ${theme.colors.secondary};
      position: absolute;
      transform: translateY(-10px);
      border-radius: 4px;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 28px;
      height: 4px;
      background: ${theme.colors.secondary};
      position: absolute;
      transform: translateY(10px);
      border-radius: 4px;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 28px
      `}
    }
  }
`
const MobilMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background: rgba(242, 156, 239);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;

  justify-content: center;
  align-items: flex-end;
  transform: translateY(-100%);
  transition: 0.8s ease-in-out;

 
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    flex-direction: column;
    margin-bottom: 105px;
    transition: 0.8s ease-in-out;
  }
  
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
    
   & ul{
     gap: 48px;
    }
  `}
  
`
const MobileMenu = styled.nav`
    display: none;
  @media ${theme.media.tablet}{
    display: block;
  }
`
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content:flex-end;
    align-items: center;
    min-height: 89px;
  }
`

export const S = {BurgerButton, MobilMenuPopup, MobileMenu, DesktopMenu}