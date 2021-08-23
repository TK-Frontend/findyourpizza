import React, { useState } from "react";
import styled from 'styled-components'
import logo from "../../assets/images/logo.png";
import blackboard from "../../assets/images/bgImages/blackboard-texture.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Nav>
        <Logo>
          <LogoText>
            <h2>Find Your</h2>
            <h1>Pizza</h1>
          </LogoText>
          <LogoImg>
            <img src={logo} alt="logo" />
          </LogoImg>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink>
            Ingredients
          </MenuLink>
          <MenuLink>
            Pizzas
          </MenuLink>
          <MenuLink>
            About
          </MenuLink>
        </Menu>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-image: url(${blackboard});
  background-size: cover;
  background-position: center center;
`;

const Nav = styled.nav`
  position: relative;
  width: 85.6rem;
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
 `;

const Logo = styled.div`
  display: flex;
  position: relative;
`;

const LogoText = styled.div`
  margin: auto 0;
  text-align: right;
  color: white;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Archistico Bold";
  }
    h2 {
    font-size: 1rem;
  }
`

const LogoImg = styled.div`
  img {
    position: relative;
    margin-top: 15%;
    height: 100px;
    width: 77px;
      }
`;

const Hamburger = styled.div`
  display: none;
  position: absolute;
  top: 25%;
  cursor: pointer;
  width: 1.6rem;

  span {
    height: 3px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
    width: 1.6rem;

  }
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    overflow: hidden;
    position: relative;
    top: 25%;
    right: 5%;
  }

  @media (max-width: 280px) {
    right: 0%;
  }
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 2px dashed white;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    width: 100vw;
    overflow: hidden;
    border-bottom: none;
    padding-left: 0;
    padding-bottom: 0;
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled.div`
  font-size: 1.2rem;
  text-decoration: none;
  margin-left: 3rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: darkgrey;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export default Navbar;
