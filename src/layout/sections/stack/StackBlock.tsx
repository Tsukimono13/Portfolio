import React from "react";
import Stack from "components/stack/Stack";
import { Container } from "components/Container";
import { Wrapper } from "components/FlexWrapper";
import { S } from "layout/sections/stack/StackBlock_Styles";
import { Title } from "components/title/Title";

export const StackBlock: React.FC = () => {
  return (
    <S.Main id={"stack"}>
      <Container $padding="100px 0 150px" $mobilePadding="40px 35px">
        <Wrapper justify={"center"} align={"center"} direction={"column"}>
          <S.StackContainer>
            <S.StackTextBlock>
              <Title
                title={"Stack"}
                color={"rgba(242, 156, 239, 1)"}
                position={"left"}
              />
              <S.StackInfo>
                My main tech stack is React, React Native, Redux, TypeScript,
                JavaScript, SCSS, and HTML, and I’m also familiar with Next.js,
                Vue.js, and GraphQL. I enjoy keeping up with new technologies,
                taking on challenges, and continuously improving my skills to
                create better, user-friendly interfaces.
              </S.StackInfo>
            </S.StackTextBlock>
            <Stack />
          </S.StackContainer>
        </Wrapper>
      </Container>
    </S.Main>
  );
};
