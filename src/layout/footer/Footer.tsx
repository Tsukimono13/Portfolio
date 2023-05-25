import React from 'react';
import github from 'assets/icons/socialIcon/github.svg'
import instagram from 'assets/icons/socialIcon/instagram.svg'
import linkedin from 'assets/icons/socialIcon/linkedin.svg'
import {S} from "layout/footer/Footer_Styled"
import {Container} from "components/Container";
import {Wrapper} from "components/FlexWrapper";

export const Footer: React.FC = () => {
    const icons = [github, instagram, linkedin]
    return (
        <S.MainDiv>
            <Container>
                <Wrapper justify={'center'} align={'center'} direction={'column'}>
                    <S.IconContainer>
                        {icons.map((icon, index) => <a key={index} href={''}><S.Icons src={icon}/> </a>)}
                    </S.IconContainer>
                    <S.MyNameServe>© Irina Litvinova, 2023</S.MyNameServe>
                    <S.DesignName>Design: <S.LinkDesignName href={''}>Anton Kartenov</S.LinkDesignName></S.DesignName>
                </Wrapper>
            </Container>
        </S.MainDiv>
    );
};

