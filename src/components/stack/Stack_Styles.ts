import {theme} from "styles/Theme.styled";
import styled from "styled-components";

const StyledDescription = styled.p`
color:#FFFFFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin-top: 12px;
`
const StyledIcon = styled.img`
  width: 100px;
  height: 100px;
  
  @media ${theme.media.tablet}{
    width: 80px;
    height: 80px;
  }
`
const ContainerForIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  flex-wrap: wrap;

  @media ${theme.media.mobile} {
    gap: 32px;
  }
`
export const S = {StyledDescription, StyledIcon, ContainerForIcons}