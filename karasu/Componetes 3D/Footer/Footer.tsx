import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { AiFillSignal } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaHeadSideVirus } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import "./styles.css"



const Footer = () => {
  return (
    <>
        <div className="container">
    <div className="container-left">
      <div className="container-titulo"><a href="https://karasucorp.com/">Clientes <i className="fa fa-signal"></i></a></div>
      <div className="paragrafo">Seja muito bem-vindo! Ao prosseguir, você será direcionado para o nosso site, onde encontrará informações detalhadas sobre nossos serviços, projetos e expertise.</div>
    </div>
    <div className="container-left">
      <div className="container-titulo"><a href="/Recrutadores">Recrutores <i className="fa fa-work"></i></a></div>
      <div className="paragrafo">Apresento orgulhosamente minhas certificações e meu portfólio, evidenciando minha dedicação à excelência no mundo tecnológico.</div>
    </div>
    <div className="container-right">
      <button className="container-icons"><a href="https://www.instagram.com/karasu_eng/"><i className="fa fa-instagram"></i></a></button>
      <button className="container-icons"><a href="https://api.whatsapp.com/send?phone=+55+5511919216813&text=Ol%C3%A1%2C+estou+vindo+porqu%C3%AA+o+corvo+disse...."><i className="fa fa-whatsapp"></i></a></button>
      <button className="container-icons"><a href="https://www.linkedin.com/in/kau%C3%A3-marques-8896b4249/"><i className="fa fa-linkedin"></i></a></button>
      <button className="container-icons"><a href="https://github.com/karasucyber/Aquillae777"><i className="fa fa-github"></i></a></button>
    </div>
  </div>
    </>
  );
}

export default Footer;
