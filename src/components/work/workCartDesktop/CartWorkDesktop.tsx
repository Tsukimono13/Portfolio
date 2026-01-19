import React from "react";
import { S } from "components/work/workCartDesktop/CarkWorkDesktop_Styles";
import { WorkType } from "layout/sections/works/Projects";
import { Video } from "layout/sections/works/Video/Video";

type WorkPropsType = {
  work: WorkType;
};

export const CartWorkDesktop: React.FC<WorkPropsType> = ({ work }) => {
  return (
    <a href={work.link} target="_blank">
      <S.ContentContainer>
        <S.VideoContainer>
          <S.ImgProject src={work.img} />
          {work.hasVideo && <Video />}
        </S.VideoContainer>
        <S.DescriptionContainer>
          <div>
            <S.Title>{work.title}</S.Title>
            <S.TagsStyled>
              {work.tags.map((tag, index) => (
                <S.Tags key={index}>{tag}</S.Tags>
              ))}
            </S.TagsStyled>
            <S.Description>{work.description}</S.Description>
          </div>
          <a href={work.link} target="_blank">
            {work.link}
          </a>
        </S.DescriptionContainer>
      </S.ContentContainer>
    </a>
  );
};
