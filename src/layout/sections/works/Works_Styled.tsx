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

  @media ${theme.media.tablet} {
    gap: 0;
  }
`;

const SmallWorks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 48px;
  column-gap: 20px;
  margin-top: 88px;
  flex-wrap: wrap;
`;

export const S = { MainDiv, FeaturedWorks, SmallWorks };
