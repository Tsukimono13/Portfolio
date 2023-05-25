import styled, {css} from "styled-components";
import {theme} from "styles/Theme.styled";

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -127px;
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
    bottom: 20px;
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
        width: 36px
      `}
    }
  }
`
const MobilMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background: #F29CEF;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
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
const MobileMenu = styled.nav`
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