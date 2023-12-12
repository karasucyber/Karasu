import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { AiFillSignal } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaHeadSideVirus } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
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

const ContainerLeft = styled.div`
  color: white;
  padding: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.80); 
  box-shadow: 5px 5px 6px rgba(255, 255, 255, 1);
  font-size: 20px;
  margin-right: 30px; // Adicione esta linha para espaçamento à direita

  @media (max-width: 768px) {
      width: 100%;
      margin: 10px;

  }
`;

const ContainerRight = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    color: white;
  display: flex;
  justify-content: center;
  flex-direction: row; 
  width: 100%;
  }
`;

const ContainerIcons = styled.button`
  padding: 10px;
  width: 100%;
  font-size: 24px;
  background: transparent;
  color: white;
  border: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row; 
    padding: 10px;
  }
`;

const ClickableIcon = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #cccccc;
  }
`;

const ClickableIcon1 = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #cccccc;
  }
`;

const Paragrafo = styled.div`
  font-size: 15px;
  padding: 10px;
`;

const ContainerTitulo = styled.div`
  padding: 10px;
`;



const Footer = () => {
  return (
    <>
      <Container>

      <ContainerLeft>
      
        <ContainerTitulo><ClickableIcon1>Dev <FaHeadSideVirus />
        </ClickableIcon1></ContainerTitulo>
          <Paragrafo>Você Dev que deseja se aprofuncar no mundo linux e rust </Paragrafo>
        </ContainerLeft>

        <ContainerLeft>
        <ContainerTitulo><ClickableIcon1>Clientes  <AiFillSignal />
        </ClickableIcon1></ContainerTitulo>
          <Paragrafo> Você deseja fazer um site ou um aplicativo click no icon a cima</Paragrafo>
        </ContainerLeft>

        <ContainerLeft>
        <ContainerTitulo><ClickableIcon1>Recrutores  <MdWork />
        </ClickableIcon1></ContainerTitulo>
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
