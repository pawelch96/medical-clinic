import React, { useState } from "react";

import { Container, Row, Col, Alert } from "react-bootstrap";

import { Styles } from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignUp = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  });

  const [show, setShow] = useState(false);

  const { name, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setShow(true);
      return;
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Styles>
      <Container fluid>
        <Alert
          variant="danger"
          show={show}
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Warning!</Alert.Heading>
          <p>Passwords don't match!</p>
        </Alert>
        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 8, order: 1 }}
            className="form-column"
          >
            <form className="sign-up-form" onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                label="Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm password"
                required
              />
              <CustomButton type="submit">Sign up</CustomButton>
            </form>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 4, order: 2 }}
            className="header-column"
          >
            <h2>Sign up with your email and password</h2>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default SignUp;
