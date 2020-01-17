import React, { useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { Styles } from './contact-form.styles';

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    secondName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const { name, secondName, email, phoneNumber, message } = contactForm;
  const handleChange = event => {
    const { name, value } = event.target;

    setContactForm({ ...contactForm, [name]: value });
  };

  return (
    <Styles>
      <Row>
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
        <form className="contact-form">
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
        </form>
        <CustomButton id="submit-form-button">Submit</CustomButton>
      </Row>
    </Styles>
  );
};

export default ContactForm;
