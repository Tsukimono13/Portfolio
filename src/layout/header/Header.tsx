import React from "react";
import Logo from "components/logo/Logo";
import { Container } from "components/Container";
import { Wrapper } from "components/FlexWrapper";
import { MobileMenu } from "layout/header/headerMenu/mobileMenu/MobileMenu";
import { S } from "layout/header/Header_Styles";
import { DesktopMenu } from "layout/header/headerMenu/desktopMenu/DesktopMenu";
import { useWindowWidth } from "hooks/useWindowWidth";
import { theme } from "styles/Theme.styled";

export const Header: React.FC = () => {
  const width = useWindowWidth();

  return (
    <S.StyledHeader>
      <Container>
        <Wrapper justify={"space-between"} align={"center"}>
          <Logo />
          {width > theme.breakpoints.tablet ? <DesktopMenu /> : <MobileMenu />}
        </Wrapper>
      </Container>
    </S.StyledHeader>
  );
};
