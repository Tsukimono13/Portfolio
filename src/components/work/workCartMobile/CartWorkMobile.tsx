import React from 'react';
import {S} from "components/work/workCartMobile/CartWorkMobile_Styles"
import {WorkType} from "layout/sections/works/Projects";
import {Video} from "../../../layout/sections/works/Video/Video";

type WorkPropsType = {
    work: WorkType
}

export const CartWorkMobile: React.FC<WorkPropsType> = ({work}) => {

    return (
        <S.Link href={work.link} target="_blank">
            <S.CartWork>
                {work.hasVideo ? <Video/> : <S.ProjectImg src={work.img}/>}
                <S.ContextBlock>
                    <S.Title>{work.title}</S.Title>
                    <S.TagsStyled>
                        {work.tags.map((tag, index) => <S.Tags key={index}>{tag}</S.Tags>)}
                    </S.TagsStyled>
                </S.ContextBlock>
            </S.CartWork>

        </S.Link>

    );
};
