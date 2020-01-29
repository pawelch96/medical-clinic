import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { setCurrentUser } from "../../redux/user/user.actions";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import { Styles } from "./header.styles";

const Header = ({ currentUser, setCurrentUser, history }) => {
  const signOut = () => {
    setCurrentUser(false);
    history.push("/");
  };

  return (
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
          {currentUser ? (
            <Nav.Item>
              <Nav.Link>
                <Link to="/staff">appointments</Link>
              </Nav.Link>
            </Nav.Item>
          ) : (
            <Link to="/signin">
              <CustomButton type="button" inverted>
                Sign In
              </CustomButton>
            </Link>
          )}
          {currentUser ? (
            <Link to="/signin">
              <CustomButton type="button" onClick={signOut}>
                Sign Out
              </CustomButton>
            </Link>
          ) : (
            <Link to="/signin">
              <CustomButton type="button">Sign Up</CustomButton>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
