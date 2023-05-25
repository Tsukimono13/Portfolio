import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme.styled";
import {Container} from "components/Container";
import {Title} from "components/title/Title";
import {CartWorkDesktop} from "components/work/CartWorkDesktop";
import {CartWorkMobile} from "components/work/CartWorkMobile";


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
        <MainDiv>
            <Container>
                <Title title={'Projects'} color={`${theme.colors.text}`}/>
                <WorkCards>
                    {width > breakpoint ? <CartWorkDesktop title={'Title'} img={''} tags={tags}/>
                        : <CartWorkMobile title={'Title'} tags={tags} img={''}/>}
                    {width > breakpoint ? <CartWorkDesktop title={'Title diact rgkgkg'} img={''} tags={tags}/>
                        : <CartWorkMobile title={'Title diact rgkgkg'} tags={tags} img={''}/>}
                    {width > breakpoint ? <CartWorkDesktop title={'Title diact rgkgkg'} img={''} tags={tags}/>
                        : <CartWorkMobile title={'Title diact rgkgkg'} tags={tags} img={''}/>}
                </WorkCards>
            </Container>
        </MainDiv>
    );
};


const MainDiv = styled.div`
  min-height: 100vh;
  background: ${theme.colors.primary};
`
const WorkCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-direction: column;
 padding-bottom: 128px;
  
  @media ${theme.media.tablet}{
    gap: 0;
  }
`
