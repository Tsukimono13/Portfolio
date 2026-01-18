import React from "react";
import { S } from "components/title/Titel_Styles";

export type TitlePropsType = {
  title: string;
  color: string;
  position?: string;
};

export const Title: React.FC<TitlePropsType> = ({ title, color, position }) => {
  return (
    <S.StyledTitle color={color || "#F29CEF"} position={position}>
      {title}
    </S.StyledTitle>
  );
};
