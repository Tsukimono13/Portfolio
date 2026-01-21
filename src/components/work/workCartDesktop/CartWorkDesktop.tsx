import React, { useState, useEffect } from "react";
import { S } from "components/work/workCartDesktop/CarkWorkDesktop_Styles";
import { WorkType } from "layout/sections/works/Projects";

type WorkPropsType = {
  work: WorkType;
};

export const CartWorkDesktop: React.FC<WorkPropsType> = ({ work }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered || !work.images || work.images.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % work.images!.length,
      );
    }, 500); 

    return () => clearInterval(interval);
  }, [isHovered, work.images]);

  return (
    <a href={work.link} target="_blank">
      <S.ContentContainer>
        <S.ImgContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setCurrentImageIndex(0);
          }}
        >
          <S.ImgProject src={work.img} />
          {isHovered && work.images && work.images.length > 0 && (
            <S.GalleryOverlay>
              <S.GalleryImage
                src={work.images[currentImageIndex]}
                alt={`${work.title} gallery ${currentImageIndex + 1}`}
              />
            </S.GalleryOverlay>
          )}
        </S.ImgContainer>
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
