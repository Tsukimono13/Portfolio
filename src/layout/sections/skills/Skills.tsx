import React from 'react';
import styled from "styled-components";
import Title from "components/title/Title";
import {theme} from "styles/Theme.styled";
import SkillCart from "components/skill/SkillCart";
import {Container} from "components/Container";
import {Wrapper} from "components/FlexWrapper";


const Skills = () => {
    return (
        <MainDiv>
            <Container>
                <Wrapper justify={'center'} align={'center'} direction={'column'}>
                    <div>
                        <Title title={'Stack'} color={'rgba(242, 156, 239, 1)'}/>
                    </div>
                    <SkillContainer>
                        <SkillCart/>
                    </SkillContainer>
                </Wrapper>
            </Container>
        </MainDiv>
    );
};

export default Skills;

const MainDiv = styled.div`
  background: ${theme.colors.secondary};
  min-height: 70vh;
`
const SkillContainer = styled.div`
  width: 756px;
  margin-bottom: 136px;
  
  @media ${theme.media.tablet}{
    width: 375px;
  }
`