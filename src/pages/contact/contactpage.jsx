import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import ContactForm from "../../components/contact-form/contact-form.component";
import TitleWithIcon from "../../components/title-with-icon/title-with-icon.component";

import { Styles } from "./contact.styles";

const ContactPage = () => (
  <Styles>
    <Container fluid>
      <Row className="title-row">
        <Col className="title-col">
          <h2>We would love to hear from you</h2>
          <h4>Whenever you have a question our team is ready to answer it</h4>
        </Col>
      </Row>
      <Row className="contact-row">
        <Col
          className="contact-col"
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
        >
          <TitleWithIcon hospital />
          <div className="contact-info">
            <p>Wybrzeże Stanisława Wyspiańskiego 27, </p>
            <p>50-370 Wrocław</p>
            <p>+ 12 12 12 12 12</p>
            <p>+ 48 123 321 123</p>
            <p>Availability 24/7</p>
          </div>
          <div className="border" />
          <TitleWithIcon place />
        </Col>
        <Col
          className="contact-col"
          xs={{ span: 12, order: 1 }}
          md={{ span: 6, order: 2 }}
        >
          <TitleWithIcon email />
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </Styles>
);

export default ContactPage;
