import { theme } from "styles/Theme.styled";
import styled from "styled-components";

const MainDiv = styled.div`
  min-height: 100vh;
  background: ${theme.colors.primary};
`;
const FeaturedWorks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;
  flex-direction: column;

  @media ${theme.media.smallDesktop} {
    gap: 40px;
  }

  @media ${theme.media.tablet} {
    gap: 24px;
  }
`;

const SmallWorks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 590px);
  justify-content: center;
  row-gap: 48px;
  column-gap: 20px;
  margin-top: 88px;

  > *:last-child:nth-child(odd) {
    justify-self: center;
  }

  @media ${theme.media.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 490px));
    margin-top: 64px;
  }

  @media ${theme.media.tablet} {
    grid-template-columns: minmax(280px, 500px);
    justify-items: center;
    row-gap: 24px;
    margin-top: 40px;

    > *:last-child:nth-child(odd) {
      justify-self: center;
    }
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 305px;
    row-gap: 16px;
    margin-top: 24px;
  }
`;

export const S = { MainDiv, FeaturedWorks, SmallWorks };
