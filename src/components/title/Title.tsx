import React from 'react';
import {S} from "components/title/Titel_Styles"

export type TitlePropsType = {
    title: string
    color: string
    marginBot?: string
}

export const Title: React.FC<TitlePropsType> = ({title, color, marginBot}) => {
    return (
        <S.TitleContainer>
            <S.StyledTitle color={color || '#F29CEF'} marginBot={marginBot || '48px'}>{title}</S.StyledTitle>
        </S.TitleContainer>
    );
};



