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
  background-color: rgba(255, 255, 255, 0.8); /* cor do fundo com opacidade */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* garante que o loader esteja na parte superior */
`;

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um tempo de carregamento para efeitos de demonstração
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // tempo de 2 segundos, ajuste conforme necessário

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader>
          <p>Carregando...</p>
        </Loader>
      ) : (
        <>
          <Cinema />
          <Footer />
        </>
      )}
    </>
  );
}
