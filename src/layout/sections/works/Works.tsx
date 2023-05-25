import React from 'react';
import {S} from "layout/sections/works/Works_Styled"
import {theme} from "styles/Theme.styled";
import {Container} from "components/Container";
import {Title} from "components/title/Title";
import {CartWorkDesktop} from "components/work/workCartDesktop/CartWorkDesktop";
import {CartWorkMobile} from "components/work/workCartMobile/CartWorkMobile";


export const Works: React.FC = () => {
    const tags = ['react', 'redux', 'css']

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.MainDiv>
            <Container>
                <Title title={'Projects'} color={`${theme.colors.text}`}/>
                <S.WorkCards>
                    {width > breakpoint ? <CartWorkDesktop title={'Title'} img={''} tags={tags}/>
                        : <CartWorkMobile title={'Title'} tags={tags} img={''}/>}
                    {width > breakpoint ? <CartWorkDesktop title={'Title diact rgkgkg'} img={''} tags={tags}/>
                        : <CartWorkMobile title={'Title diact rgkgkg'} tags={tags} img={''}/>}
                    {width > breakpoint ? <CartWorkDesktop title={'Title diact rgkgkg'} img={''} tags={tags}/>
                        : <CartWorkMobile title={'Title diact rgkgkg'} tags={tags} img={''}/>}
                </S.WorkCards>
            </Container>
        </S.MainDiv>
    );
};



