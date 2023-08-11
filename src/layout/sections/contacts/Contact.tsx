import React from 'react';
import {theme} from "styles/Theme.styled";
import {Container} from "components/Container";
import {Wrapper} from "components/FlexWrapper";
import {Title} from "components/title/Title";
import {S} from './Contact_Styles';

export const Contact: React.FC = () => {
    return (
        <S.MainDiv id={'contact'}>
            <Container>
                <Wrapper justify={'center'} align={'center'} direction={'column'}>
                    <Title title={'Contact'} color={`${theme.colors.primary}`}/>
                    <S.WelcomeText>Write me if you have questions, suggestions or just want to chat :)</S.WelcomeText>
                    <a href={'https://t.me/Tsukimono13'}><S.ButtonStyled>Send message</S.ButtonStyled></a>
                </Wrapper>
            </Container>
        </S.MainDiv>
    );
};
