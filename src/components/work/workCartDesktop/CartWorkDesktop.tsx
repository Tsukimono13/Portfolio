import React from 'react';
import {S} from "components/work/workCartDesktop/CarkWorkDesktop_Styles"
import arrow from 'assets/icons/arrow.svg';
import {WorkType} from "layout/sections/works/Projects";

type WorkPropsType = {
    work: WorkType
}

export const CartWorkDesktop: React.FC<WorkPropsType> = ({work}) => {
    return (
        <a href={work.link} target="_blank">
            <S.UlStyled>
                <S.LiStyled>
                    <S.ImgProject src={work.img}/>
                    <S.ContentContainer>
                        <div>
                            <S.Title>{work.title}<S.IconArrowStyled src={arrow}/></S.Title>
                            <S.TagsStyled>
                                {work.tags.map((tag, index) => <S.Description key={index}>{tag}</S.Description>)}
                            </S.TagsStyled>
                        </div>
                    </S.ContentContainer>
                </S.LiStyled>
            </S.UlStyled>
        </a>
    );
};

