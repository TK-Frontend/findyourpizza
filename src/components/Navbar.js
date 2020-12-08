import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import backgroundPhoto from "../images/blackboard-texture.jpg";

const Navbar = () => {
  return (
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
  );
};

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  background-image: url(${backgroundPhoto});
  background-repeat: nfo-repeat;
  background-size: 100%;

  position: relative;
  padding: 1rem;
`;

const Logo = styled.a`
  display: flex;
  position: relative;
  left: 5%;
`;

const LogoText = styled.div`
  margin: auto 0;
  text-align: right;
  color: white;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Archistico";
  }

  h2 {
    font-size: 1rem;
  }
`;

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
  right: 10%;
  cursor: pointer;
  width: 25px;

  span {
    height: 3px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
    width: 25px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    overflow: hidden;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: relative;
  right: 5%;

  padding-left: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 2px dashed white;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0%;

    width: 100vw;
    overflow: hidden;
    border-bottom: none;
    padding-left: 0;
    padding-bottom: 0;
  }
`;

const MenuLink = styled.a`
  font-size: 1rem;
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
