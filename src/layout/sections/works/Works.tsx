import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme.styled";
import {Container} from "components/Container";
import {Title} from "components/title/Title";
import {Work} from "components/work/Work";


export const Works: React.FC = () => {
    const tags = ['react', 'redux', 'css']

    return (
        <MainDiv>
            <Container>
                <Title title={'Projects'} color={`${theme.colors.text}`}/>
                <WorkCards>
                    <Work title={'Title'} img={''} tags={tags}/>
                    <Work title={'Hello how are you'} img={''} tags={tags}/>
                    <Work title={'React redux hgjgjg gjgjjg'} img={''} tags={tags}/>
                </WorkCards>
            </Container>
        </MainDiv>
    );
};


const MainDiv = styled.div`
  min-height: 100vh;
  background: ${theme.colors.primary};
`
const WorkCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-direction: column;
  margin-bottom: 128px;
`
