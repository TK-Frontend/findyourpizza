import React from 'react'
import styled from 'styled-components'
import blackboard from "../assets/images/bgImages/blackboard-texture.png";
import { Element } from 'react-scroll';
import { FaGithub, FaFacebook, FaLinkedinIn, FaCode } from 'react-icons/fa'

const Footer = () => {
  return (
    <Element name="footer">
      <Container>
        <Section>
          <h5> Copyright © 2021 TKFrontend. All rights reserved.</h5>
          <Links>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/tomasz-kozina-0101992/" >
              <FaLinkedinIn />
            </a>
            <a target="_blank" rel='noreferrer' href="https://www.facebook.com/tomek.kozina">
              <FaFacebook />
            </a>
            <a target="_blank" rel='noreferrer' href="https://github.com/TK-Frontend?tab=repositories">
              <FaGithub />
            </a>
            <a target="_blank" rel='noreferrer' href="https://github.com/TK-Frontend/findyourpizza">
              <FaCode />
            </a>
          </Links>
        </Section>
        <h6>All resources on this website have been used for non-commercial purposes</h6>
      </Container>
    </Element>
  )
}

const Container = styled.footer`
  width: 100%;
  padding: 3rem 2rem;
  background-image: url(${blackboard});
  background-size: cover;
  background-position: center center;    
  h6 {
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    color: #ffffff;
    @media (max-width: 410px) {
 font-size: 0.5rem
  }
  };
  `;

const Section = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 0.1rem;
h5 {
  color: #ffffff;
  text-align: center;
  font-family: 'Times New Roman', Times, serif
};

@media (max-width: 496px) {
 flex-direction: column;
  }
`
const Links = styled.div`
padding-top: 0.3rem;
  overflow: hidden;
  a {
  padding-left: 1rem;
  color: #ffffff;
  &:hover {
  transition: all 0.25s ease-in-out;
    color: darkgrey;
  }
}
`

export default Footer
