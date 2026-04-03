import React, { useState } from "react";
import { S } from "layout/sections/works/Works_Styled";
import { theme } from "styles/Theme.styled";
import { Container } from "components/Container";
import { Title } from "components/title/Title";
import { works } from "layout/sections/works/Projects";
import { TabMenu } from "../../../components/tabButtons/TabMenu";
import { WorkCard } from "components/work/WorkCard";
import { useWindowWidth } from "hooks/useWindowWidth";

export type ButtonType = "all" | "web" | "mobile";

export const Works: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<ButtonType>("all");
  const width = useWindowWidth();
  const isDesktop = width > theme.breakpoints.smallDesktop;

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

        <S.FeaturedWorks>
          {largeWorks.map((work) => (
            <WorkCard key={work.title} work={work} isDesktop={isDesktop} />
          ))}
        </S.FeaturedWorks>

        <S.SmallWorks>
          {smallWorks.map((work) => (
            <WorkCard key={work.title} work={work} isDesktop={isDesktop} />
          ))}
        </S.SmallWorks>
      </Container>
    </S.MainDiv>
  );
};
