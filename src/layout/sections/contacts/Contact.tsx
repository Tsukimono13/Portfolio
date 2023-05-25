import React from 'react';
import {theme} from "styles/Theme.styled";
import {Container} from "components/Container";
import {Wrapper} from "components/FlexWrapper";
import {Title} from "components/title/Title";
import { S } from './Contact_Styles';

export const Contact: React.FC = () => {
    return (
        <S.MainDiv>
            <Container>
                <Wrapper justify={'center'} align={'center'} direction={'column'}>
                    <Title title={'Contact'} color={`${theme.colors.primary}`}/>
                    <S.WelcomeText>Write me if you have questions, suggestions or just want to chat :)</S.WelcomeText>
                    <S.ButtonStyled>Send message</S.ButtonStyled>
                </Wrapper>
            </Container>
        </S.MainDiv>
    );
};
