import styled from "styled-components";
import {theme} from "styles/Theme.styled";

const ContextBlock = styled.div`
  margin-left: 36px;
`
const TagsStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
const Link = styled.a`
`
const CartWork = styled.div`
  height: 335px;
  min-width: 415px;
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
  height: 214px;
  min-width: 415px;
  border: 4px solid #F29CEF;
  margin-bottom: 16px;
`
const IconArrowStyled = styled.img`
  width: 28px;
  height: 18px;
  margin-left: 8px;
`
export const S = {IconArrowStyled, ProjectImg, Tags, Title, CartWork, Link, TagsStyled, ContextBlock}