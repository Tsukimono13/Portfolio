import styled from "styled-components";
import {theme} from "styles/Theme.styled";


const TagsStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  flex-wrap: wrap;
  padding-bottom: 40px;
  width: 305px;
`
const Link = styled.a`
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  text-align: left;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`
const Tags = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.text};
  border-radius: 40px;
  padding: 7px 16px 5px;
`
const ProjectImg = styled.img`
  height: 152px;
  width: 305px;
  border: 4px solid #F29CEF;
  margin-bottom: 16px;
  border-radius: 12px;
`

export const S = {ProjectImg, Tags, Title, Link, TagsStyled}