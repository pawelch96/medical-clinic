import React from "react";

import { Link } from "react-router-dom";

import { Styles } from "./main-container.styles";

import { Container, Card, Image } from "react-bootstrap";

import CustomButton from "../custom-button/custom-button.component";

const MainContainer = () => (
  <Styles>
    <Container fluid>
      <Image src="https://i.ibb.co/Qbhwphx/splash-cropped.jpg" fluid />
      <Card>
        <Card.Header>about us</Card.Header>
        <Card.Body>
          <Card.Title>We offer the best quality of service</Card.Title>
          <Card.Text>
            We guarantee the highest quality of services and satisfaction after
            each visit
          </Card.Text>
          <Link to="/contact">
            <CustomButton type="button" bordered>
              Contact Us
            </CustomButton>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  </Styles>
);

export default MainContainer;
