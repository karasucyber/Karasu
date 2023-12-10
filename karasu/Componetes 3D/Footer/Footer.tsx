import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Container = styled.div({
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '95%',
  display: 'flex',
  padding: '5px',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  flexDirection: 'row',
  zIndex: '9999',
});

const ContainerLeft = styled.div({
  color: 'white',
  padding: '10px',
  width: '15%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  boxShadow: '2px 2px 5px rgba(60, 50, 2, 0.2), -2px -2px 5px rgba(0, 0, 0, 1)', 
  borderColor: 'transparent',
});

const ContainerRight = styled.div({
  color: 'white',
  display: "flex",
  justifyContent: 'center',
  flexDirection: 'column',
});

const Link = styled.a({
  fontsize: "15px",
  color: "white",
});

const ContainerIcons = styled.button({
  padding:"10px",
  width: "100%",
  fontSize: "24px",
  background: "transparent",
  color: "white",
  border:"none",
});

const ClickableIcon = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #CCCCCC; 
`;

const Footer = () => {
  return (
    <>
      <Container>
      <ContainerLeft>
        <ClickableIcon> Dev </ClickableIcon>
          <p> Você Dev que deseja se aprofuncar no mundo linux e rust </p>
        </ContainerLeft>
        <ContainerLeft>
        <ClickableIcon > Clientes </ClickableIcon>
          <p> Você deseja fazer um site ou um aplicativo click no icon a cima</p>
        </ContainerLeft>
        <ContainerLeft>
        <ClickableIcon> Recrutadores </ClickableIcon>
          <p> Para você Recrutadores que deseja ver meus projetos e minhas certificações</p>
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
        </ContainerRight>
      </Container>
    </>
  );
}

export default Footer;
