import styled from "styled-components";
import {theme} from "styles/Theme.styled";

const MainDiv = styled.div`
  min-height: 25vh;
  background: rgba(240, 235, 240, 1);
`

const Icons = styled.img`
  width: 40px;
  height: 40px;

  :hover {
    transform: scale(1.1);
`
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 28px;
  margin-top: 48px;
`

const MyNameServe = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: ${theme.colors.text};
  margin-top: 32px;
`
const DesignName = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: ${theme.colors.text};
  margin-top: 12px;
  margin-bottom: 68px;
`
const LinkDesignName = styled.a`
  color: ${theme.colors.text};
  text-decoration-line: underline;
`
export const S = {MainDiv, Icons, MyNameServe, IconContainer, DesignName, LinkDesignName}