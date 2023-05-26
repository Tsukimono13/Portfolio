import React from 'react';
import photo from 'assets/image/myPhoto.png'
import shadow from 'assets/image/shadow.png'
import name from 'assets/image/name.svg'
import {Wrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {S} from "layout/sections/main/Main_Styles"
import Tilt from 'react-parallax-tilt';



export const Main: React.FC = () => {
    return (
        <S.MainDiv id={'main'}>
            <Container>
                <Wrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'}>
                    <div>
                        <S.NameImg src={name}/>
                        <S.AboutMe>I'm a Front-End developer from Russia, but now living in Istanbul. I'm interested in
                            programming and everything connected with it. Will be glad to code your project!</S.AboutMe>
                    </div>
                    <div>
                        <Tilt className="tilt-img"
                              tiltMaxAngleX={35}
                              tiltMaxAngleY={35}
                              perspective={900}
                              scale={1.1}
                              transitionSpeed={2000}
                              gyroscope={true}>

                            <S.MyPhoto src={photo} alt="Photo" />
                            <S.Shadow src={shadow} alt="Photo"/>
                        </Tilt>
                    </div>
                </Wrapper>
            </Container>
        </S.MainDiv>
    );
};

