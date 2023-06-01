import React from 'react';
import github from 'assets/icons/socialIcon/github.svg'
import instagram from 'assets/icons/socialIcon/instagram.svg'
import linkedin from 'assets/icons/socialIcon/linkedin.svg'
import {S} from "layout/footer/Footer_Styled"
import {Container} from "components/Container";
import {Wrapper} from "components/FlexWrapper";

export const Footer: React.FC = () => {
    const icons = [
        {icon: github, link: 'https://github.com/Tsukimono13'},
        {icon: instagram, link: 'https://www.instagram.com/tsukimono13/'},
        {icon: linkedin, link: 'https://www.linkedin.com/in/irina-litvinova-971397266/'}
    ]
    return (
        <S.MainDiv>
            <Container>
                <Wrapper justify={'center'} align={'center'} direction={'column'}>
                    <S.IconContainer>
                        {icons.map((i, index) => <a key={index} href={i.link} target="_blank"><S.Icons src={i.icon}/></a>)}
                    </S.IconContainer>
                    <S.MyNameServe>© Irina Litvinova, 2023</S.MyNameServe>
                    <S.DesignName>Design: <S.LinkDesignName href={'https://www.behance.net/psybolord-3000'}
                                                            target="_blank">
                        Anton Kartenov
                    </S.LinkDesignName></S.DesignName>
                </Wrapper>
            </Container>
        </S.MainDiv>
    );
};

