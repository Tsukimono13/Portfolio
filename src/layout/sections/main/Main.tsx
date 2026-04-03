import React from "react";
import photo from "assets/image/myPhoto.png";
import shadow from "assets/image/shadow.png";
import name from "assets/image/name.svg";
import { Wrapper } from "components/FlexWrapper";
import { Container } from "components/Container";
import { S } from "layout/sections/main/Main_Styles";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
  return (
    <S.MainDiv id={"main"}>
      <Container $mobilePadding="84px 35px 100px">
        <Wrapper
          align={"center"}
          justify={"space-between"}
          wrap={"wrap-reverse"}
        >
          <div>
            <S.NameImg src={name} alt="Irina Litvinova" />
            <S.AboutMe>
              I'm a React developer from Russia, living in Moscow. I'm
              interested in programming and everything connected with it. Will
              be glad to code your project!
            </S.AboutMe>
          </div>
          <div>
            <Tilt
              className="tilt-img"
              tiltMaxAngleX={35}
              tiltMaxAngleY={35}
              perspective={900}
              scale={1.1}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <S.MyPhoto src={photo} alt="Irina Litvinova portrait" />
              <S.Shadow src={shadow} alt="" />
            </Tilt>
          </div>
        </Wrapper>
      </Container>
    </S.MainDiv>
  );
};
