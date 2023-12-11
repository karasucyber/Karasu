import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 95%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  z-index: 9999;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ContainerLeft = styled.div({
  color: 'white',
  padding: '10px',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  boxShadow: '2px 2px 5px rgba(60, 50, 2, 0.2), -2px -2px 5px rgba(0, 0, 0, 1)', 
  borderColor: 'transparent',
  fontSize: '20px',
  
});

const ContainerRight = styled.div({
  color: 'white',
  display: "flex",
  justifyContent: 'center',
  flexDirection: 'column',
  width: "100%"
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


const ClickableIcon1 = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #CCCCCC; 
`;

const Paragrafo = styled.div({
  fontSize: "15px",
  padding: "10px"
})

const ContainerTitulo = styled.div({
  padding: '10px'
})


const Footer = () => {
  return (
    <>
      <Container>
      <ContainerLeft>
        <ContainerTitulo><ClickableIcon1>Dev</ClickableIcon1></ContainerTitulo>
          <Paragrafo>Você Dev que deseja se aprofuncar no mundo linux e rust </Paragrafo>
        </ContainerLeft>
        <ContainerLeft>
        <ContainerTitulo><ClickableIcon1>Clientes</ClickableIcon1></ContainerTitulo>
          <Paragrafo> Você deseja fazer um site ou um aplicativo click no icon a cima</Paragrafo>
        </ContainerLeft>
        <ContainerLeft>
        <ContainerTitulo><ClickableIcon1>Recrutores</ClickableIcon1></ContainerTitulo>
        <Paragrafo> Para você Recrutadores que deseja ver meus projetos e minhas certificações</Paragrafo>
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
