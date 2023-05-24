import React from 'react';
import styled from "styled-components";
import photo from 'assets/image/myPhoto.png'
import shadow from 'assets/image/shadow.png'
import name from 'assets/image/name.svg'
import {Wrapper} from "components/FlexWrapper";
import {theme} from "styles/Theme.styled";
import {Container} from "components/Container";


export const Main = () => {
    return (
        <MainDiv>
            <Container>
                <Wrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'}>
                    <TextBlock>
                        <NameImg src={name}/>
                        <AboutMe>I'm a Front-End developer from Russia, but now living in Istanbul. I'm interested in
                            programming and everything connected with it. Will be glad to code your project!</AboutMe>
                    </TextBlock>
                    <div>
                        <MyPhoto src={photo} alt="Photo"/>
                        <Shadow src={shadow} alt="Photo"/>
                    </div>
                </Wrapper>
            </Container>
        </MainDiv>
    );
};

const MainDiv = styled.div`
  min-height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  margin-top: 50px;
  @media ${theme.media.mobile} {
    margin-top: 0;
  }
`
const TextBlock = styled.div`
`

const AboutMe = styled.h1`
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  margin-top: 40px;
  color: #1F1C1F;
  width: 488px;

  @media ${theme.media.tablet} {
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    width: 304px;
    margin-top: 30px;
    margin-bottom: 100px;
  }
`
const MyPhoto = styled.img`
  width: 558px;
  height: 534px;
  rotate: -3.59deg;
  position: relative;
  z-index: 9999;

  @media ${theme.media.tablet} {
    width: 316px;
    height: 303px;
    margin-top: 64px;
    margin-bottom: 50px;
  }
`

const NameImg = styled.img`
  @media ${theme.media.tablet} {
    width: 304px;
    height: 148px;
  }
`

const Shadow = styled.img`
  position: absolute;
  right: 70px;
  top: 190px;
  width: 769px;
  height: 638px;

  @media screen and (max-width: 1120px) {
    display: none;
  }
`