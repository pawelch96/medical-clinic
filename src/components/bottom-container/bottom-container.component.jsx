import React from 'react';

import { Container, Image, Row, Col } from 'react-bootstrap';

import { Styles } from './bottom-container.styles';

const BottomContainer = () => (
  <Styles>
    <Container fluid>
      <Row>
        <Col className="left-column" md={7}>
          <Row className="row-2">
            <h2 className="bottom-title">
              We combine experience with cutting-edge technology in medicine
            </h2>
          </Row>
          <Row className="row-1">
            <Col className="col-1" xs={12} md={6}>
              column first
            </Col>
            <Col className="col-2" xs={12} md={6}>
              column second
            </Col>
          </Row>
        </Col>
        <Col className="right-column" md={5}>
          <Image src="https://i.ibb.co/CVLwzS8/stethoscope-cropped.jpg" fluid />
        </Col>
      </Row>
    </Container>
  </Styles>
);

export default BottomContainer;
