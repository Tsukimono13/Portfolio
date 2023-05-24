import React from 'react';
import github from 'assets/icons/socialIcon/github.svg'
import instagram from 'assets/icons/socialIcon/instagram.svg'
import linkedin from 'assets/icons/socialIcon/linkedin.svg'
import styled from "styled-components";
import {theme} from "styles/Theme.styled";
import {Container} from "components/Container";
import {Wrapper} from "components/FlexWrapper";

const Footer = () => {
    const icons = [github, instagram, linkedin]
    return (
        <MainDiv>
            <Container>
                <Wrapper justify={'center'} align={'center'} direction={'column'}>
                    <IconContainer>
                        {icons.map((icon, index) => <a key={index} href={''}><Icons src={icon}/></a>)}
                    </IconContainer>
                    <MyNameServe>© Irina Litvinova, 2023</MyNameServe>
                    <DesignName>Design: Anton Kartenov</DesignName>
                </Wrapper>
            </Container>
        </MainDiv>
    );
};

export default Footer;

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