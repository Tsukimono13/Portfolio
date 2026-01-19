import React, { useState } from "react";
import { S } from "layout/sections/works/Works_Styled";
import { theme } from "styles/Theme.styled";
import { Container } from "components/Container";
import { Title } from "components/title/Title";
import { CartWorkDesktop } from "components/work/workCartDesktop/CartWorkDesktop";
import { CartWorkMobile } from "components/work/workCartMobile/CartWorkMobile";
import { works } from "layout/sections/works/Projects";
import { TabMenu } from "../../../components/tabButtons/TabMenu";
import { CartWorkSmallDesktop } from "components/work/workSmallDesktop/CartWorkSmallDesktop";

export type ButtonType = "all" | "web" | "mobile";

export const Works: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<ButtonType>("all");

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 820;
  const isDesktop = width > breakpoint;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const filteredWorks =
    selectedTab === "all"
      ? works
      : works.filter((work) => work.category === selectedTab);

  const largeWorks = filteredWorks.filter((w) => w.variant === "large");
  const smallWorks = filteredWorks.filter((w) => w.variant === "small");

  return (
    <S.MainDiv id="works">
      <Container $padding="100px 0">
        <Title title="Projects" color={theme.colors.text} />
        <TabMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        {/* BIG / FEATURED */}
        <S.FeaturedWorks>
          {largeWorks.map((work) =>
            isDesktop ? (
              <CartWorkDesktop key={work.title} work={work} />
            ) : (
              <CartWorkMobile key={work.title} work={work} />
            )
          )}
        </S.FeaturedWorks>

        {/* SMALL / GRID */}
        <S.SmallWorks>
          {smallWorks.map((work) =>
            isDesktop ? (
              <CartWorkSmallDesktop key={work.title} work={work} />
            ) : (
              <CartWorkMobile key={work.title} work={work} />
            )
          )}
        </S.SmallWorks>
      </Container>
    </S.MainDiv>
  );
};
