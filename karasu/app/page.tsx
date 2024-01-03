'use client'
import Cinema from '@/Componetes 3D/Samurai/Cinema';
import Footer from '@/Componetes 3D/Footer/Footer';
import styled from 'styled-components';

const Container = styled.div({
  width:"100%",
  height: "100%",
})

const Container1 = styled.body({
  padding: "0px",
  margin: "0px",
  top: "0px",

})
export default function Home() {
  return (
   
   <> 
    <Cinema/>
   <Footer/>
    
   </>
   
 
  )
}
