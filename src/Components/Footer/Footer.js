import React from 'react'
import styled from 'styled-components'
import blackboard from "../../assets/images/bgImages/blackboard-texture.png";

const Footer = () => {
  return (
    <Container>
      <h6> Copyright © 2021 - All resources on this website have been used for non-commercial purposes</h6>
    </Container>
  )
}

const Container = styled.footer`
  width: 100%;
  padding: 2.6rem;
  background-image: url(${blackboard});
  background-size: cover;
  background-position: center center;  
  background-color: red;

  h6 {
    color: #fff;
    text-align: center;
  }
`;

export default Footer
