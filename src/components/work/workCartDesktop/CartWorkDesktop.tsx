import React from 'react';
import {S} from "components/work/workCartDesktop/CarkWorkDesktop_Styles"
import {WorkType} from "layout/sections/works/Projects";
import {Video} from 'layout/sections/works/Video/Video'

type WorkPropsType = {
    work: WorkType
}

export const CartWorkDesktop: React.FC<WorkPropsType> = ({work}) => {
    return (
        <a href={work.link} target="_blank">
            <S.VideoContainer>
                <S.ImgProject src={work.img}/>
                {work.hasVideo && <Video/>}
            </S.VideoContainer>
            <S.Title>{work.title}</S.Title>
            <S.TagsStyled>
                {work.tags.map((tag, index) => <S.Description key={index}>{tag}</S.Description>)}
            </S.TagsStyled>
        </a>
    );
};
