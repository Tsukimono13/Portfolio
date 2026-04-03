import { useEffect, useState } from "react";
import goTop from "assets/icons/goTotop.svg";
import { S } from "./GoTop_Styles";
import { animateScroll as scroll } from "react-scroll";

const SCROLL_THRESHOLD = 200;

export const GoTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showBtn && (
        <S.ButtonStyle
          onClick={() => scroll.scrollToTop()}
          aria-label="Scroll to top"
        >
          <S.Icon src={goTop} alt="" />
        </S.ButtonStyle>
      )}
    </>
  );
};
