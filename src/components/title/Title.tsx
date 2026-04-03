import React from "react";
import { S } from "components/title/Titel_Styles";
import { theme } from "styles/Theme.styled";

export type TitlePropsType = {
  title: string;
  color: string;
  position?: string;
};

export const Title: React.FC<TitlePropsType> = ({ title, color, position }) => {
  return (
    <S.StyledTitle color={color || theme.colors.accent} position={position}>
      {title}
    </S.StyledTitle>
  );
};
