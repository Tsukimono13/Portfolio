import React from 'react';
import {S} from "components/title/Titel_Styles"

type TitlePropsType = {
    title: string
    color: string
}

export const Title: React.FC<TitlePropsType> = ({title, color}) => {
    return (
        <S.TitleContainer>
            <S.StyledTitle color={color || '#F29CEF'}>{title}</S.StyledTitle>
        </S.TitleContainer>
    );
};



