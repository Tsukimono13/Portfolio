import styled from "styled-components";
import { theme } from "styles/Theme.styled";

const ContentContainer = styled.div``;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

const TagsStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 590px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 115%;
  color: ${theme.colors.text};
  margin-top: 24px;
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

const ImgProject = styled.img`
  transition: all 0.2s linear;
  width: 590px;
  height: 336px;
  border: 8px solid #f29cef;
  border-radius: 32px;
  object-fit: cover;
`;

const VideoContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const S = {
  ContentContainer,
  DescriptionContainer,
  TagsStyled,
  ImgProject,
  Tags,
  Title,
  VideoContainer,
};
