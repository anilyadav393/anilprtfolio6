import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="home" smooth={true} duration={500}>
          Anil yadav
        </NavLogo>
        <MobileIcon onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink to="home" smooth={true} duration={500} onClick={toggle}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about" smooth={true} duration={500} onClick={toggle}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="skills" smooth={true} duration={500} onClick={toggle}>
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="projects" smooth={true} duration={500} onClick={toggle}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth={true} duration={500} onClick={toggle}>
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #333;
  color: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
`;

const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    transition: all 0.3s ease;
    background: #333;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
