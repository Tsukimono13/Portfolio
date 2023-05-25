import React from 'react';
import styled from "styled-components";
import arrow from "assets/icons/black_arrow.svg";
import {theme} from "styles/Theme.styled";
import image from 'assets/image/Project.png';

type WorkPropsType = {
    title: string
    tags: string[]
    img: string
}
export const CartWorkMobile: React.FC<WorkPropsType> = ({img, title, tags}) => {
    return (
        <Link href={''}>
            <CartWork>
                <ProjectImg src={image}/>
                <ContextBlock>
                    <Title>{title}<IconArrowStyled src={arrow}/></Title>
                    <TagsStyled>
                        {tags.map((tag, index) => <Tags key={index}>{tag}</Tags>)}
                    </TagsStyled>
                </ContextBlock>
            </CartWork>
        </Link>
    );
};
const ContextBlock = styled.div`
  margin-left: 36px;
`
const TagsStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
const Link = styled.a`
  text-decoration: none;
`
const CartWork = styled.div`
  height: 295px;
  min-width: 375px;
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
  height: 184px;
  min-width: 375px;
  border: 4px solid #F29CEF;
  margin-bottom: 21px;
`
const IconArrowStyled = styled.img`
  width: 28px;
  height: 18px;
  margin-left: 8px;
`