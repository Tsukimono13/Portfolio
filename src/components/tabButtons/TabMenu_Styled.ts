import {theme} from "styles/Theme.styled";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 76px;

  @media ${theme.media.tablet} {
    gap: 12px;
    margin-bottom: 48px;
  }
`

const MenuButton = styled.button`
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  padding: 16px 28px;
  cursor: pointer;
  color: ${theme.colors.text};

  &.active {
    background: #F29CEF;
    border-radius: 12px;
    transition: background-color 0.3s ease-in-out;
  }

  @media ${theme.media.tablet}{
    font-size: 20px;
    line-height: 20px;
    padding: 12px 20px;
  }
`
export const S = {MenuButton, MenuContainer}