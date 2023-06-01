import React from 'react';
import Stack from "components/stack/Stack";
import {Container} from "components/Container";
import {Wrapper} from "components/FlexWrapper";
import {S} from "layout/sections/stack/StackBlock_Styles"
import {Title} from "components/title/Title";


export const StackBlock: React.FC = () => {
    return (
        <S.Main id={'stack'}>
            <Container>
                <Wrapper justify={'center'} align={'center'} direction={'column'}>
                    <div>
                        <Title title={'Stack'} color={'rgba(242, 156, 239, 1)'}/>
                    </div>
                    <S.StackContainer>
                        <Stack/>
                    </S.StackContainer>
                </Wrapper>
            </Container>
        </S.Main>
    );
};