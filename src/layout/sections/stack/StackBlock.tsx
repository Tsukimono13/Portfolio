import React from "react";
import Stack from "components/stack/Stack";
import { Container } from "components/Container";
import { Wrapper } from "components/FlexWrapper";
import { S } from "layout/sections/stack/StackBlock_Styles";
import { Title } from "components/title/Title";

export const StackBlock: React.FC = () => {
  return (
    <S.Main id={"stack"}>
      <Container $padding="100px 0 150px">
        <Wrapper justify={"center"} align={"center"} direction={"column"}>
          <S.StackContainer>
            <S.StackTextBlock>
              <Title
                title={"Stack"}
                color={"rgba(242, 156, 239, 1)"}
                position={"left"}
              />
              <S.StackInfo>
                I'm a Front-End developer from Russia, but now living in
                Istanbul. I'm interested in programming and everything connected
                with it. Will be glad to code your project!
              </S.StackInfo>
            </S.StackTextBlock>
            <Stack />
          </S.StackContainer>
        </Wrapper>
      </Container>
    </S.Main>
  );
};
