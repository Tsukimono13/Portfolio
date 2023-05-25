import React from 'react';
import styled from "styled-components";
import image from 'assets/image/Project.png';
import arrow from 'assets/icons/arrow.svg';

type WorkPropsType = {
    title: string
    tags: string[]
    img: string
}

export const CartWorkDesktop: React.FC<WorkPropsType> = ({img, title,tags}) => {
    return (
            <Link href={''}>
                <UlStyled>
                    <LiStyled>
                        <ImgProject src={image}/>
                        <ContentContainer>
                            <TextBlock>
                                <Title>{title}<IconArrowStyled src={arrow}/></Title>
                                <TagsStyled>
                                {tags.map((tag, index) => <Parag key={index}>{tag}</Parag>)}
                                </TagsStyled>
                            </TextBlock>
                        </ContentContainer>
                    </LiStyled>
                </UlStyled>
            </Link>
    );
};


const TextBlock = styled.div`
`

const TagsStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const UlStyled = styled.ul`
  list-style:none;
  width: 100%;
  text-align: center;
  padding: 0;
`

const LiStyled = styled.li`
  position: relative;
  display: inline-block;
  margin: 0;
  overflow: hidden;

  :hover > div {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  }
`
const Title = styled.h3`
  color: #000000;
  font-size: 40px;
  font-weight: 700;
  line-height: 46px;
  color: rgba(255, 255, 255, 1);
  padding-bottom: 12px;
  text-align: left;
  margin-bottom: 52px;
`
const Parag = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(240, 235, 240, 1);
  border: 1px solid rgba(240, 235, 240, 1);
  border-radius: 40px;
  padding: 12px 24px 8px;
`
const Link = styled.a`
  text-decoration: none;
`
const IconArrowStyled = styled.img`
  width: 91px;
  height: 32px;
  margin-left: 36px;
`

const ContentContainer = styled.div`
  opacity: 0;
  background-color: rgba(18, 4, 18, 0.85);
  border: 8px solid #F29CEF;
  border-radius: 32px;
  transition: all 0.5s ease-in-out;
  padding-bottom: 44px;
  padding-left: 44px;
  backdrop-filter: blur(4px);

  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  :hover {
    opacity: 2;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  }
`
const ImgProject = styled.img`
  transition: all 0.2s linear;
  width: 996px;
  height: 484px;
  border: 8px solid #F29CEF;
  border-radius: 32px;
`