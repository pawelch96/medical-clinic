import React, { useState } from "react";

import { Col, Row, Alert } from "react-bootstrap";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { Styles } from "./contact-form.styles";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    secondName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const [show, setShow] = useState(false);

  const { name, secondName, email, phoneNumber, message } = contactForm;
  const handleChange = event => {
    const { name, value } = event.target;

    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (
      name === "" ||
      secondName === "" ||
      email === "" ||
      phoneNumber === "" ||
      message === ""
    ) {
      setShow(true);
      return;
    } else alert("Thank you for your message!");
  };

  return (
    <Styles>
      <Row>
        <Alert
          variant="danger"
          show={show}
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Warning!</Alert.Heading>
          <p>All fields must be filled!</p>
        </Alert>
        <Col>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="First Name"
            required
          />
        </Col>
        <Col>
          <FormInput
            type="text"
            name="secondName"
            value={secondName}
            onChange={handleChange}
            label="Second Name"
            required
          />
        </Col>
      </Row>
      <Row>
        <form className="contact-form" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
          />
          <FormInput
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            label="Phone Number"
          />
          <FormInput
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
            label="Message"
          />

          <CustomButton type="submit" id="submit-form-button">
            Submit
          </CustomButton>
        </form>
      </Row>
    </Styles>
  );
};

export default ContactForm;
