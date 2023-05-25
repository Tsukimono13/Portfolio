import React from 'react';
import SkillCart from "components/skill/SkillCart";
import {Container} from "components/Container";
import {Wrapper} from "components/FlexWrapper";
import {S} from "layout/sections/skills/Skills_Styles"
import {Title} from "components/title/Title";


export const Skills: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <Wrapper justify={'center'} align={'center'} direction={'column'}>
                    <div>
                        <Title title={'Stack'} color={'rgba(242, 156, 239, 1)'}/>
                    </div>
                    <S.SkillContainer>
                        <SkillCart/>
                    </S.SkillContainer>
                </Wrapper>
            </Container>
        </S.Main>
    );
};