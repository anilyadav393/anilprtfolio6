import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'; // Ensure react-scroll is installed

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </NavItem>
        <NavItem>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

// Styled components
const Nav = styled.nav`
  position: fixed; /* Fixes the navbar to the top */
  top: 0;
  width: 100%; /* Full width */
  background: #333; /* Background color */
  color: #fff;
  padding: 1rem 2rem; /* Padding */
  z-index: 1000; /* Ensures it is above other content */
  border-bottom: 2px solid #444; /* Optional border for styling */
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around; /* Distributes items evenly */
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s;
    
    &:hover {
      color: #ddd; /* Color on hover */
    }
  }
`;

export default Navbar;
