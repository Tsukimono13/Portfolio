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
  display: grid;
  grid-template-columns: repeat(auto-fit, 590px);
  justify-content: center;
  row-gap: 48px;
  column-gap: 20px;
  margin-top: 88px;

  /* Для последнего нечетного элемента - выравниваем слева */
  > *:last-child:nth-child(odd) {
    justify-self: start;
  }

  @media ${theme.media.tablet} {
    grid-template-columns: 305px;
    justify-items: center;
    row-gap: 40px;
    margin-top: 40px;

    /* В мобильной версии все элементы по центру */
    > *:last-child:nth-child(odd) {
      justify-self: center;
    }
  }

  @media ${theme.media.mobile} {
    row-gap: 0px;
    margin-top: 0px;
  }
`;

export const S = { MainDiv, FeaturedWorks, SmallWorks };
