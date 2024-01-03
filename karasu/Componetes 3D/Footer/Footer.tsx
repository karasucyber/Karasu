'use client'
import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { AiFillSignal } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaHeadSideVirus } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Container = styled.div({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  display: "flex",
  padding: "20px",
  justifyContent: "space-between",
  alignItems: "flex-end",
  flexDirection: "row",
  zIndex: 1,

  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "90%",
    height: "60%",
  },
});

const ContainerLeft = styled.div({
  color: "white",
  padding: "10px",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.80)",
  boxShadow: "5px 5px 6px rgba(255, 255, 255, 1)",
  fontSize: "20px",
  marginRight: "30px",

  "@media (max-width: 768px)": {
    width: "100%",
    margin: "10px",
  },
});

const ContainerRight = styled.div({
  color: "white",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",

  "@media (max-width: 768px)": {
    color: "white",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
});

const ContainerIcons = styled.button({
  padding: "10px",
  width: "100%",
  fontSize: "24px",
  background: "transparent",
  color: "white",
  border: "none",

  "@media (max-width: 768px)": {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
  },
});

const ClickableIcon = styled.a({
  color: "white",
  textDecoration: "none",

  "&:hover": {
    color: "#cccccc",
  },
});

const Paragrafo = styled.div({
  fontSize: "15px",
  padding: "10px",
});

const ContainerTitulo = styled.div({
  padding: "10px",
});

/*<ContainerLeft>
  <ContainerTitulo><ClickableIcon1>Dev <FaHeadSideVirus />
  </ClickableIcon1></ContainerTitulo>
  <Paragrafo>Você Dev que deseja se aprofuncar no mundo linux e rust </Paragrafo>
  </ContainerLeft>
*/

const Footer = () => {
  return (
    <>
      <Container>
        <ContainerLeft>
        <ContainerTitulo><ClickableIcon href="https://karasucorp.com/">Clientes <AiFillSignal />
        </ClickableIcon></ContainerTitulo>
          <Paragrafo> Seja muito bem-vindo! Ao prosseguir, você será direcionado para o nosso site, onde encontrará informações detalhadas sobre nossos serviços, projetos e expertise.</Paragrafo>
        </ContainerLeft>
        <ContainerLeft>
        <ContainerTitulo><ClickableIcon href="/Recrutadores">Recrutores <MdWork />
        </ClickableIcon></ContainerTitulo>
        <Paragrafo>Apresento orgulhosamente minhas certificações e meu portfólio, evidenciando minha dedicação à excelência no mundo tecnológico. </Paragrafo>
        </ContainerLeft>
        <ContainerRight>
          <ContainerIcons>
            <ClickableIcon href="https://www.instagram.com/karasucyber/">
              <CiInstagram />
            </ClickableIcon>
          </ContainerIcons>
          <ContainerIcons>
            <ClickableIcon href="https://api.whatsapp.com/send?phone=+55+5511919216813&text=Ol%C3%A1%2C+estou+vindo+porqu%C3%AA+o+corvo+disse....">
              <FaWhatsapp />
            </ClickableIcon>
          </ContainerIcons>
          <ContainerIcons>
            <ClickableIcon href="https://www.linkedin.com/in/kau%C3%A3-marques-8896b4249/">
              <CiLinkedin />
            </ClickableIcon>
          </ContainerIcons>
          <ContainerIcons>
            <ClickableIcon href="https://github.com/karasucyber/Aquillae777">
            <AiFillGithub />
            </ClickableIcon>
          </ContainerIcons>
        </ContainerRight>
      </Container>
    </>
  );
}

export default Footer;
