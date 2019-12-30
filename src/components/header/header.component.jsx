import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import { Styles } from './header.styles';

const Header = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">MEDICAL CLINIC</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/staff">Staff</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <CustomButton type="button" inverted>
          Sign In
        </CustomButton>
        <CustomButton type="button">Sign Up</CustomButton>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default Header;
