import React from 'react';

import { Styles } from './main-container.styles';

import { Container, Card, Image } from 'react-bootstrap';

import CustomButton from '../custom-button/custom-button.component';

const MainContainer = () => (
  <Styles>
    <Container fluid>
      <Image src="https://i.ibb.co/Qbhwphx/splash-cropped.jpg" fluid />
      <Card>
        <Card.Header>about us</Card.Header>
        <Card.Body>
          <Card.Title>We offer the best quality of service</Card.Title>
          <Card.Text>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </Card.Text>
          <CustomButton type="button" bordered>
            Contact Us
          </CustomButton>
        </Card.Body>
      </Card>
    </Container>
  </Styles>
);

export default MainContainer;
