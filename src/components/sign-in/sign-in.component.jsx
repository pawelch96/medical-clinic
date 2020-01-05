import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Styles } from "./sign-in.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Styles>
      <Container fluid>
        <Row>
          <Col md={4} className="header-column">
            <h2>Sign in with your email and password</h2>
          </Col>
          <Col md={8} id="form-column">
            <form onSubmit={handleSubmit}>
              <FormInput
                name="email"
                type="email"
                handleChange={handleChange}
                value={email}
                label="Email"
                required
              />
              <FormInput
                name="password"
                type="password"
                handleChange={handleChange}
                value={password}
                label="Password"
                required
              />
              <CustomButton>Sign In</CustomButton>
            </form>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default SignIn;
