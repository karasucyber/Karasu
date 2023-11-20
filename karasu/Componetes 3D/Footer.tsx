import React from "react";
import styled from "styled-components";

const Container = styled.div({
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    padding: '5px',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    lineHeight: '1.5em',
    zIndex: '9999', //Um valor alto para garantir que esteja na parte superior
});

const ContainerLeft = styled.div({
  color: 'white',
  padding: '10px',
});


const ContainerRight = styled.div({
  color: 'white',
  display: "flex",
  justifyContent: 'center',
  flexDirection: 'column', 

});

const Link = styled.a({
    fontsize: "12px",
    color: "white",
    padding: '10px'
})

const Footer = () => {
  return (
    <>
      <Container>
        <ContainerLeft>
            <Link> Projetos</Link>            
        </ContainerLeft>
     
        <ContainerRight>
            <Link> Instagram</Link>
            <Link> Instagram</Link>
            <Link> Instagram</Link>


         </ContainerRight>
      </Container>
    </>
  );
}

export default Footer;
