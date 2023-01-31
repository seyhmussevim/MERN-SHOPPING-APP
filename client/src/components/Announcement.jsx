import React from 'react'
import styled from 'styled-components'
import Marquee from "react-fast-marquee";



const Container = styled.div`

height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`



const Announcement = () => {
  return (
   
    <Container>
      <Marquee gradientColor>Super Deal! Free Shipping on Orders Over $50</Marquee>
    </Container>
  )
}

export default Announcement
