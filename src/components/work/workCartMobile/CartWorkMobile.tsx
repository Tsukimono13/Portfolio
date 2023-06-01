import React from 'react';
import {S} from "components/work/workCartMobile/CartWorkMobile_Styles"
import arrow from "assets/icons/black_arrow.svg";
import {WorkType} from "layout/sections/works/Projects";

type WorkPropsType = {
    work: WorkType
}

export const CartWorkMobile: React.FC<WorkPropsType> = ({work}) => {

    return (
        <S.Link href={work.link} target="_blank">
            <S.CartWork>
                <S.ProjectImg src={work.img}/>
                <S.ContextBlock>
                    <S.Title>{work.title}<S.IconArrowStyled src={arrow}/></S.Title>
                    <S.TagsStyled>
                        {work.tags.map((tag, index) => <S.Tags key={index}>{tag}</S.Tags>)}
                    </S.TagsStyled>
                </S.ContextBlock>
            </S.CartWork>
        </S.Link>
    );
};
