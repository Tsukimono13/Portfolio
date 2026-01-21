import React from "react";
import ReactPlayer from "react-player";
import { S } from "./Video_Styled";
import { theme } from "styles/Theme.styled";

export const Video: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.VideoBox>
      <ReactPlayer
        className="react-player"
        url="https://vimeo.com/853386065?share=copy"
        height={isMobile ? "152px" : "292px"}
        width={isMobile ? "305px" : "196px"}
        loop={true}
        playing={true}
        muted={true}
      />
    </S.VideoBox>
  );
};
