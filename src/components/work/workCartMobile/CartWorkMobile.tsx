import React from 'react';
import {S} from "components/work/workCartMobile/CartWorkMobile_Styles"
import arrow from "assets/icons/black_arrow.svg";

import image from 'assets/image/Project.png';

type WorkPropsType = {
    title: string
    tags: string[]
    img: string
}
export const CartWorkMobile: React.FC<WorkPropsType> = ({img, title, tags}) => {
    return (
        <S.Link href={''}>
            <S.CartWork>
                <S.ProjectImg src={image}/>
                <S.ContextBlock>
                    <S.Title>{title}<S.IconArrowStyled src={arrow}/></S.Title>
                    <S.TagsStyled>
                        {tags.map((tag, index) => <S.Tags key={index}>{tag}</S.Tags>)}
                    </S.TagsStyled>
                </S.ContextBlock>
            </S.CartWork>
        </S.Link>
    );
};
