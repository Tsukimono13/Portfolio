import React, {useEffect, useState} from 'react';
import goTop from 'assets/icons/goTotop.svg'
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";
import { theme } from 'styles/Theme.styled';

export const GoTop = () => {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <ButtonStyle onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon src={goTop}/>
                </ButtonStyle>
            )}
        </>
    );
};

const ButtonStyle = styled.div`
  position: fixed;
  bottom: 115px;
  right: 44px;
  cursor: pointer;
  
  @media ${theme.media.tablet}{
    right: 23px;
  }
`
const Icon = styled.img`
  @media ${theme.media.tablet}{
    height: 54px;
    width: 28px;
  }
`