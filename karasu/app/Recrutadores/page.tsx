'use client'
import "./styles.css";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { AiOutlineCaretLeft } from "react-icons/ai";

import { EffectCards } from 'swiper/modules';
import Cinema2 from "@/Componetes 3D/Samurai/Cinema2";



export default function Recrutadores() {
    return (
        <>
            <div style={{ width: "100%", height:" 400px" }} >
                  <Cinema2/>
            </div>
            <div className="Container">
                <div className="ContainerCard">
                    <h1 className="Titulo"> WebSites </h1>
                    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="Captura de tela de 2023-11-06 21-05-05.png" alt="Imagem 1" />
                                <div className="button-container">
                                    <button  className="button-below"> 
                                    <a href="https://www.agencier.com.br/">Projeto</a></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="Captura de tela de 2023-11-06 21-05-05.png" alt="Imagem 1" />
                                <div className="button-container">
                                    <button  className="button-below"> 
                                    <a href="https://www.semlimitesed.tech/">Projeto</a></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="Captura de tela de 2023-11-06 21-05-05.png" alt="Imagem 1" />
                                <div className="button-container">
                                    <button  className="button-below"> 
                                    <a href="https://clientenaopagante.vercel.app/">Projeto</a></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="Captura de tela de 2023-11-06 21-05-05.png" alt="Imagem 1" />
                                <div className="button-container">
                                    <button  className="button-below"> 
                                    <a href="https://home-fight.vercel.app/">Projeto</a></button>
                                </div>
                            </div>
                        </SwiperSlide>  
                        <SwiperSlide>
                            <div className="slide-content">
                                <img src="Captura de tela de 2023-11-06 21-05-05.png" alt="Imagem 1" />
                                <div className="button-container">
                                    <button  className="button-below"> 
                                    <a href="https://my-house-777-2nbp.vercel.app/">Projeto</a></button>
                                </div>
                            </div>
                        </SwiperSlide>  
                    </Swiper>
                </div>

                <div className="ContainerCard">
                    <h1 className="Titulo"> Back-End </h1>
                    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                        <SwiperSlide>
                        <div className="slide-content">
                                <img src="Captura de tela de 2023-11-06 21-05-05.png" alt="Imagem 1" />
                                <div className="button-container">
                                    <button  className="button-below"> 
                                    <a href="https://in8teste1.vercel.app/">Projeto</a></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="slide-content">
                                <img src="Captura de tela de 2023-11-06 21-05-05.png" alt="Imagem 1" />
                                <div className="button-container">
                                    <button  className="button-below"> 
                                    <a href="https://bibliotecanucleo.vercel.app/">Projeto</a></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="slide-content">
                                <img src="Captura de tela de 2023-11-06 21-05-05.png" alt="Imagem 1" />
                                <div className="button-container">
                                    <button  className="button-below"> 
                                    <a href="https://bibliotecanucleo.vercel.app/">Projeto</a></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="slide-content">
                                <img src="Captura de tela de 2023-11-06 21-05-05.png" alt="Imagem 1" />
                                <div className="button-container">
                                    <button  className="button-below"> 
                                    <a href="https://github.com/karasucyber/Cadastro_J">Projeto</a></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="slide-content">
                                <img src="Captura de tela de 2023-11-06 21-05-05.png" alt="Imagem 1" />
                                <div className="button-container">
                                    <button  className="button-below"> 
                                    <a href="https://tarefa-2-estacio.vercel.app/procedimento%201/index2.html">Projeto</a></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="Seta">
                    <button style={{ height: "100px", width: "200px", backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
                        <a href="/" style={{ color: "white", textDecoration: "none" }}>
                            <AiOutlineCaretLeft style={{ height: "90%", width: "100%" }} />
                        </a>
                    </button>
                </div>

            </div>

        </>
    )
}