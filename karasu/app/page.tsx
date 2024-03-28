'use client'
import { useEffect, useState } from "react";
import styled from 'styled-components';
import Cinema from '@/Componetes 3D/Samurai/Cinema';
import Footer from '@/Componetes 3D/Footer/Footer';

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black; 
  display: flex;
  justify-content: center;
  align-items: center;  
  z-index: 9999; 
  `;

export default function Home() {
  const [loading,setLoading] = useState(true);
  useEffect(() => {const timeout = setTimeout(() => {setLoading(false);},4000); return () => clearTimeout(timeout);}, []);
  return (
    <>
      {loading ? (
        <Loader>
          <p>Carregando....</p>
        </Loader>
      ) : (<><Cinema /><Footer /></>)}</>);}
