import styled from "styled-components";
import { theme } from "styles/Theme.styled";

const ContentContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 44px;
  width: 420px;
  flex-shrink: 0;
`;

const TagsStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 38px;
  font-weight: 700;
  line-height: 115%;
  color: ${theme.colors.text};
  margin-bottom: 12px;
`;

const Tags = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.text};
  border-radius: 40px;
  padding: 12px 24px 8px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: ${theme.colors.text};
  max-width: 420px;
  margin-top: 28px;
`;

const ImgContainer = styled.div`
  position: relative;
  display: inline-block;
  border: 8px solid #f29cef;
  border-radius: 32px;
  overflow: hidden;
  flex-shrink: 0;

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

const ImgProject = styled.img`
  width: 740px;
  height: 420px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  ${ImgContainer}:hover & {
    transform: scale(1.02);
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

const GalleryImage = styled.img`
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

export const S = {
  ContentContainer,
  DescriptionContainer,
  TagsStyled,
  ImgProject,
  Tags,
  Description,
  Title,
  ImgContainer,
  GalleryOverlay,
  GalleryImage,
};
