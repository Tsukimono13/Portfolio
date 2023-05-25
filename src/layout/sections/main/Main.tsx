import React from 'react';
import photo from 'assets/image/myPhoto.png'
import shadow from 'assets/image/shadow.png'
import name from 'assets/image/name.svg'
import {Wrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {S} from "layout/sections/main/Main_Styles"


export const Main: React.FC = () => {
    return (
        <S.MainDiv>
            <Container>
                <Wrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'}>
                    <div>
                        <S.NameImg src={name}/>
                        <S.AboutMe>I'm a Front-End developer from Russia, but now living in Istanbul. I'm interested in
                            programming and everything connected with it. Will be glad to code your project!</S.AboutMe>
                    </div>
                    <div>
                        <S.MyPhoto src={photo} alt="Photo"/>
                        <S.Shadow src={shadow} alt="Photo"/>
                    </div>
                </Wrapper>
            </Container>
        </S.MainDiv>
    );
};

