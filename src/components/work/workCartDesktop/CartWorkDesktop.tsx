import React from 'react';
import {S} from "components/work/workCartDesktop/CarkWorkDesktop_Styles"
import image from 'assets/image/Project.png';
import arrow from 'assets/icons/arrow.svg';

type WorkPropsType = {
    title: string
    tags: string[]
    img: string
}

export const CartWorkDesktop: React.FC<WorkPropsType> = ({img, title, tags}) => {
    return (
        <a href={''}>
            <S.UlStyled>
                <S.LiStyled>
                    <S.ImgProject src={image}/>
                    <S.ContentContainer>
                        <div>
                            <S.Title>{title}<S.IconArrowStyled src={arrow}/></S.Title>
                            <S.TagsStyled>
                                {tags.map((tag, index) => <S.Description key={index}>{tag}</S.Description>)}
                            </S.TagsStyled>
                        </div>
                    </S.ContentContainer>
                </S.LiStyled>
            </S.UlStyled>
        </a>
    );
};

