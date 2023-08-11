import React, {useState} from 'react';
import {S} from "layout/sections/works/Works_Styled"
import {theme} from "styles/Theme.styled";
import {Container} from "components/Container";
import {Title} from "components/title/Title";
import {CartWorkDesktop} from "components/work/workCartDesktop/CartWorkDesktop";
import {CartWorkMobile} from "components/work/workCartMobile/CartWorkMobile";
import {works} from "layout/sections/works/Projects";
import {TabMenu} from "../../../components/tabButtons/TabMenu";


export type ButtonType = 'all' | 'web' | 'mobile';

export const Works: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<ButtonType>('all');

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 820;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const filteredWorks = selectedTab === 'all' ? works : works.filter(work => work.category === selectedTab);

    return (
        <S.MainDiv id={'works'}>
            <Container>
                <Title title={'Projects'} color={`${theme.colors.text}`}/>
                <TabMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                <S.WorkCards>
                    {filteredWorks.map((work, index) => (
                        width > breakpoint ? <CartWorkDesktop key={index} work={work} /> :
                            <CartWorkMobile key={index} work={work}/>
                    ))}
                </S.WorkCards>
            </Container>
        </S.MainDiv>
    );
};



