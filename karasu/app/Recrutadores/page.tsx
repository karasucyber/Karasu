'use client'
import "./styles.css";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { AiOutlineCaretLeft } from "react-icons/ai";

import { EffectCards } from 'swiper/modules';



export default function Recrutadores() {
    return (
        <>
            <div className="Container">
                <h1 className="Titulo"> Portifolio </h1>

                <div className="ContainerCard">
                    <h1 className="Titulo"> WebSites </h1>
                    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>

                <div className="ContainerCard">
                    <h1 className="Titulo"> Back-End </h1>
                    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
                <div className="Seta">
                    <AiOutlineCaretLeft style={{ height: "100px", width: "200px", color: "white" }} />
                </div>
            </div>
        </>
    )
}