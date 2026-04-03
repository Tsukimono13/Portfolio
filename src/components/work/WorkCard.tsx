import React, { useState, useEffect } from "react";
import { WorkType } from "layout/sections/works/Projects";
import { Video } from "layout/sections/works/Video/Video";
import { S } from "./WorkCard_Styles";

type WorkCardProps = {
  work: WorkType;
  isDesktop: boolean;
};

export const WorkCard: React.FC<WorkCardProps> = ({ work, isDesktop }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isLarge = work.variant === "large";
  const showGallery = isLarge && isDesktop;

  useEffect(() => {
    if (!showGallery || !isHovered || !work.images || work.images.length === 0) {
      return;
    }

    const images = work.images;
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % images.length,
      );
    }, 500);

    return () => clearInterval(interval);
  }, [showGallery, isHovered, work.images]);

  // Mobile layout (both large and small)
  if (!isDesktop) {
    return (
      <S.MobileLink href={work.link} target="_blank" rel="noopener noreferrer">
        {work.hasVideo ? <Video /> : <S.MobileImg src={work.img} />}
        <S.MobileTitle>{work.title}</S.MobileTitle>
        <S.MobileTags>
          {work.tags.map((tag, index) => (
            <S.MobileTag key={index}>{tag}</S.MobileTag>
          ))}
        </S.MobileTags>
      </S.MobileLink>
    );
  }

  // Desktop large (featured) layout
  if (isLarge) {
    return (
      <a href={work.link} target="_blank" rel="noopener noreferrer">
        <S.LargeContainer>
          <S.LargeImgContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setCurrentImageIndex(0);
            }}
          >
            <S.LargeImg src={work.img} />
            {isHovered && work.images && work.images.length > 0 && (
              <S.GalleryOverlay>
                <S.GalleryImage
                  src={work.images[currentImageIndex]}
                  alt={`${work.title} gallery ${currentImageIndex + 1}`}
                />
              </S.GalleryOverlay>
            )}
          </S.LargeImgContainer>
          <S.LargeDescription>
            <div>
              <S.LargeTitle>{work.title}</S.LargeTitle>
              <S.DesktopTags>
                {work.tags.map((tag, index) => (
                  <S.DesktopTag key={index}>{tag}</S.DesktopTag>
                ))}
              </S.DesktopTags>
              <S.DescriptionText>{work.description}</S.DescriptionText>
            </div>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              {work.link}
            </a>
          </S.LargeDescription>
        </S.LargeContainer>
      </a>
    );
  }

  // Desktop small (grid) layout
  return (
    <a href={work.link} target="_blank" rel="noopener noreferrer">
      <S.SmallContainer>
        <S.SmallVideoContainer>
          <S.SmallImg src={work.img} />
          {work.hasVideo && <Video />}
        </S.SmallVideoContainer>
        <S.SmallDescription>
          <S.SmallTitle>{work.title}</S.SmallTitle>
          <S.DesktopTags>
            {work.tags.map((tag, index) => (
              <S.DesktopTag key={index}>{tag}</S.DesktopTag>
            ))}
          </S.DesktopTags>
        </S.SmallDescription>
      </S.SmallContainer>
    </a>
  );
};
