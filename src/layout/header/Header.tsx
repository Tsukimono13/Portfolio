import React from 'react';
import Logo from "components/logo/Logo";
import {Container} from "components/Container";
import {Wrapper} from "components/FlexWrapper";
import {MobileMenu} from "layout/header/headerMenu/mobileMenu/MobileMenu";
import {S} from "layout/header/Header_Styles"
import {DesktopMenu} from "layout/header/headerMenu/desktopMenu/DesktopMenu";


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.StyledHeader>
            <Container>
                <Wrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    {width > breakpoint ? <DesktopMenu/> : <MobileMenu/>}
                </Wrapper>
            </Container>
        </S.StyledHeader>
    );
};


