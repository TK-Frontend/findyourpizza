import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import backgroundPhoto from '../images/backgroundPizza.png';
import Ingredients from './Ingredients';

const Navbar = () => {
  return (
    <Container>
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
  height: 464px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  flex-direction: row;
  align-content: center;
  height: 200px;
  padding-left: 20px;
  padding-top: 40px;
  border: 5px solid yellow;

  img {
    height: 100px;
    width: 77px;
    margin-top: 40px;
    margin-left: 0px;
  }
`;

const LogoText = styled.div`
  text-align: right;
  color: white;
  padding-top: 50px;
  margin: 0;

  h1 {
    font-size: 36px;
    text-transform: uppercase;
    font-family: 'Archistico';
  }

  h2 {
    font-size: 16px;
  }
`;

const Hamburger = styled.div``;

const Menu = styled.div`
  height: 40px;
  padding-top: 100px;
  margin-right: 80px;
  padding-left: 50px;
  border-bottom: 2px dashed white;
`;

const MenuLink = styled.a`
  font-size: 28px;
  text-decoration: none;
  color: white;
  padding-left: 50px;
`;

export default Navbar;
