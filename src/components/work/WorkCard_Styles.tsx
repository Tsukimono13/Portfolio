import styled from "styled-components";
import { theme } from "styles/Theme.styled";

// === Shared ===

const DesktopTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;

  @media ${theme.media.smallDesktop} {
    gap: 6px;
  }
`;

const DesktopTag = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.text};
  border-radius: 40px;
  padding: 12px 24px 8px;

  @media ${theme.media.smallDesktop} {
    font-size: 14px;
    padding: 10px 18px 6px;
  }
`;

// === Desktop Large (Featured) ===

const LargeContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media ${theme.media.desktop} {
    gap: 24px;
  }

  @media ${theme.media.smallDesktop} {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const LargeDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 44px;
  width: 420px;
  flex-shrink: 0;

  @media ${theme.media.desktop} {
    width: 320px;
  }

  @media ${theme.media.smallDesktop} {
    width: 100%;
    max-width: 590px;
    padding-bottom: 0;
  }
`;

const LargeTitle = styled.h3`
  font-size: 38px;
  font-weight: 700;
  line-height: 115%;
  color: ${theme.colors.text};
  margin-bottom: 12px;

  @media ${theme.media.desktop} {
    font-size: 32px;
  }

  @media ${theme.media.smallDesktop} {
    font-size: 28px;
  }
`;

const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: ${theme.colors.text};
  max-width: 420px;
  margin-top: 28px;

  @media ${theme.media.desktop} {
    font-size: 18px;
    max-width: 320px;
  }

  @media ${theme.media.smallDesktop} {
    font-size: 16px;
    max-width: 100%;
  }
`;

const LargeImgContainer = styled.div`
  position: relative;
  display: inline-block;
  border: 8px solid ${theme.colors.accent};
  border-radius: 32px;
  overflow: hidden;
  flex-shrink: 0;

  @media ${theme.media.desktop} {
    border-width: 6px;
    border-radius: 24px;
  }

  @media ${theme.media.smallDesktop} {
    flex-shrink: 1;
    width: 100%;
    max-width: 590px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(0px);
    transition: all 0.3s ease;
  }

  &:hover::after {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2.5px);
    filter: grayscale(100%);
  }
`;

const LargeImg = styled.img.attrs({ loading: "lazy" })`
  width: 740px;
  height: 420px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  ${LargeImgContainer}:hover & {
    transform: scale(1.02);
  }

  @media ${theme.media.smallDesktop} {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 406px;
  height: 236px;
  z-index: 10;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease-in-out;

  @media ${theme.media.desktop} {
    width: 300px;
    height: 175px;
  }

  @media ${theme.media.smallDesktop} {
    width: 70%;
    height: auto;
    aspect-ratio: 16 / 9;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const GalleryImage = styled.img.attrs({ loading: "lazy" })`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  animation: fadeInImage 0.4s ease-in-out;

  @keyframes fadeInImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// === Desktop Small (Grid) ===

const SmallContainer = styled.div``;

const SmallDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

const SmallTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 115%;
  color: ${theme.colors.text};
  margin-top: 24px;

  @media ${theme.media.smallDesktop} {
    font-size: 24px;
    margin-top: 16px;
  }
`;

const SmallImg = styled.img.attrs({ loading: "lazy" })`
  transition: all 0.2s linear;
  width: 590px;
  height: 336px;
  border: 8px solid ${theme.colors.accent};
  border-radius: 32px;
  object-fit: cover;

  @media ${theme.media.desktop} {
    width: 100%;
    max-width: 490px;
    height: auto;
    aspect-ratio: 16 / 9;
  }

  @media ${theme.media.smallDesktop} {
    max-width: 100%;
    border-width: 6px;
    border-radius: 24px;
  }
`;

const SmallVideoContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// === Mobile ===

const MobileLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media ${theme.media.mobile} {
    max-width: 305px;
  }
`;

const MobileTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  color: ${theme.colors.text};
  margin-bottom: 8px;
  width: 100%;

  @media ${theme.media.mobile} {
    font-size: 20px;
    line-height: 23px;
  }
`;

const MobileTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  flex-wrap: wrap;
  padding-bottom: 40px;
  width: 100%;
  max-width: 500px;

  @media ${theme.media.mobile} {
    gap: 4px;
    max-width: 305px;
  }
`;

const MobileTag = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.text};
  border-radius: 40px;
  padding: 8px 18px 6px;

  @media ${theme.media.mobile} {
    font-size: 12px;
    line-height: 12px;
    padding: 7px 16px 5px;
  }
`;

const MobileImg = styled.img.attrs({ loading: "lazy" })`
  width: 100%;
  max-width: 500px;
  height: auto;
  aspect-ratio: 16 / 9;
  border: 6px solid ${theme.colors.accent};
  margin-bottom: 16px;
  border-radius: 16px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    max-width: 305px;
    border-width: 4px;
    border-radius: 12px;
  }
`;

export const S = {
  // Shared
  DesktopTags,
  DesktopTag,
  // Large
  LargeContainer,
  LargeDescription,
  LargeTitle,
  DescriptionText,
  LargeImgContainer,
  LargeImg,
  GalleryOverlay,
  GalleryImage,
  // Small
  SmallContainer,
  SmallDescription,
  SmallTitle,
  SmallImg,
  SmallVideoContainer,
  // Mobile
  MobileLink,
  MobileTitle,
  MobileTags,
  MobileTag,
  MobileImg,
};
