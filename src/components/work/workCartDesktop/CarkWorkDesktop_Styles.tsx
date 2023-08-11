import styled from "styled-components";
import {theme} from "styles/Theme.styled";

const TagsStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  line-height: 46px;
  color: ${theme.colors.text};
  text-align: left;
  margin-bottom: 16px;
  margin-top: 32px;
`
const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.text};
  border-radius: 40px;
  padding: 12px 24px 8px;
`

const ImgProject = styled.img`
  transition: all 0.2s linear;
  width: 996px;
  height: 484px;
  border: 8px solid #F29CEF;
  border-radius: 32px;
`
const VideoContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const S = {TagsStyled, ImgProject, Description, Title, VideoContainer}

