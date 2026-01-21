import styled from "styled-components";
import { theme } from "styles/Theme.styled";
type ContainerProps = {
  $padding?: string;
  $mobilePadding?: string;
};

export const Container = styled.div<ContainerProps>`
  max-width: 1230px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  padding: ${({ $padding }) => $padding || "0 15px"};

  @media ${theme.media.mobile} {
    padding: ${({ $mobilePadding, $padding }) => $mobilePadding || $padding || "0 10px"};
  }
`;
