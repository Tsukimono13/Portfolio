import { theme } from "styles/Theme.styled";
import styled from "styled-components";
import { TitlePropsType } from "./Title";

const StyledTitle = styled.h2<Omit<TitlePropsType, "title">>`
  font-size: 72px;
  font-weight: 800;
  line-height: 120%;
  color: ${(props) => props.color || "red"};
  text-align: ${(props) => props.position || "center"};

  @media ${theme.media.mobile} {
    font-size: 60px;
    line-height: 69px;
    margin-top: 56px;
  }
`;

export const S = { StyledTitle };
