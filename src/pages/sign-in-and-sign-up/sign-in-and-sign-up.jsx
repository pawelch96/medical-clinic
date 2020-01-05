import React from "react";

import { Container, Col } from "react-bootstrap";

import { Styles } from "./sign-in-and-sign-up.styles";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <Styles>
    <Container fluid>
      <Col>
        <SignIn />
        <SignUp />
      </Col>
    </Container>
  </Styles>
);

export default SignInAndSignUpPage;
