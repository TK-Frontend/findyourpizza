import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import backgroundPhoto from "../images/backgroundPizza.png";
import Ingredients from "./Ingredients";

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Logo>
          <LogoText>
            <h2>Find Your</h2>
            <h1>Pizza</h1>
          </LogoText>
          <img src={logo} alt="logo" />
        </Logo>

        <Hamburger>
          <span />
          <span />
          <span />
        </Hamburger>

        <Menu>
          <MenuLink href="">Home</MenuLink>
          <MenuLink href="">Menu</MenuLink>
          <MenuLink href="">About</MenuLink>
        </Menu>
      </Nav>
      <Ingredients />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundPhoto});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 50vh;
  width: 100vw;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;

  position: relative;
  left: 5%;
  top: 15%;

  border: 5px solid yellow;

  img {
    height: 100px;
    width: 77px;
  }
`;

const LogoText = styled.div`
  text-align: right;
  color: white;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Archistico";
  }

  h2 {
    font-size: 1rem;
    padding-top: 1.2rem;
  }
`;

const Hamburger = styled.div``;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: relative;
  right: 5%;
  top: 15%;

  padding-left: 50px;
  border-bottom: 2px dashed white;
  border: 5px solid black;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    height: 100px;
    width: 100vw;
  }
`;

const MenuLink = styled.a`
  font-size: 1.6rem;
  text-decoration: none;
  color: white;
  margin-left: 3rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: darkgrey;
  }
`;

export default Navbar;
