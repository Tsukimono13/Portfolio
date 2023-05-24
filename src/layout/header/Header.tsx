import React from 'react';
import {Menu} from "components/menu/Menu";
import styled from "styled-components";
import Logo from "components/logo/Logo";
import {theme} from "styles/Theme.styled";
import {HeaderMenu} from "layout/header/headerMenu/HeaderMenu";
import {Container} from "components/Container";
import {Wrapper} from "components/FlexWrapper";
import {MobileMenu} from "layout/header/mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Wrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu/>
                  {/*<MobileMenu/>*/}
                </Wrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background: ${theme.colors.primary};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99999;
`
