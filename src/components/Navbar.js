import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import backgroundPhoto from '../images/backgroundPizza.png';

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <LogoText>
          <h2>Find Your</h2>
          <h1>Pizza</h1>
        </LogoText>
        <img src={logo} alt='logo' />
      </Logo>
      <Hamburger>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu>
        <MenuLink href=''>Menu</MenuLink>
        <MenuLink href=''>Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  background-image: url(${backgroundPhoto});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 464px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  flex-direction: row;
  border: 8px solid yellow;
  align-content: center;
  height: 200px;

  img {
    height: 150px;
    width: 150px;
    margin-top: 10px;
    margin-left: -30px;
  }
`;

const LogoText = styled.div`
  text-align: right;
  color: white;
  margin-top: 50px;
  margin-left: 50px;

  h1 {
    font-size: 36px;
    text-transform: uppercase;
    font-family: 'Archistico';
  }

  h2 {
    font-size: 16px;
    margin: 0px;
  }
`;

const Hamburger = styled.div``;

const Menu = styled.div`
  height: 40px;
  padding-top: 60px;
  border: 2px dashed white;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: white;
  padding-right: 50px;
  margin-top: 50px;
  border: 8px solid pink;
`;

export default Navbar;
