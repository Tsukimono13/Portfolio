import React from "react";
import { S } from "./Video_Styled";

export const Video: React.FC = () => {
  return (
    <S.VideoBox>
      <S.VideoIframe
        src="https://player.vimeo.com/video/853386065?autoplay=1&loop=1&muted=1&background=1"
        allow="autoplay"
        title="News App demo"
      />
    </S.VideoBox>
  );
};
