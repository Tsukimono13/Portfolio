import React from "react";
import github from "assets/icons/socialIcon/github.svg";
import tg from "assets/icons/socialIcon/tg.svg";
import email from "assets/icons/socialIcon/email.svg";
import { S } from "layout/footer/Footer_Styled";
import { Container } from "components/Container";
import { Wrapper } from "components/FlexWrapper";

export const Footer: React.FC = () => {
  const icons = [
    { icon: github, link: "https://github.com/Tsukimono13" },
    { icon: tg, link: "https://t.me/Tsukimono13" },
    {
      icon: email,
      link: "mailto:neforsha@yandex.ru?subject=Привет!&body=Текст сообщения",
    },
  ];
  return (
    <S.MainDiv>
      <Container>
        <Wrapper justify={"center"} align={"center"} direction={"column"}>
          <S.IconContainer>
            {icons.map((i, index) => (
              <a key={index} href={i.link} target="_blank" rel="noopener noreferrer" aria-label={i.link.includes('github') ? 'GitHub' : i.link.includes('t.me') ? 'Telegram' : 'Email'}>
                <S.Icons src={i.icon} alt="" />
              </a>
            ))}
          </S.IconContainer>
          <S.MyNameServe>© Irina Litvinova, 2026</S.MyNameServe>
          <S.DesignName>
            Design:{" "}
            <S.LinkDesignName
              href={"https://www.behance.net/psybolord-3000"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Anton Kartenov
            </S.LinkDesignName>
          </S.DesignName>
        </Wrapper>
      </Container>
    </S.MainDiv>
  );
};
