import React, { useState } from 'react';

import { Container, Col, Row, Image } from 'react-bootstrap';
import { Calendar } from 'react-calendar';
import AppointmentCard from '../../components/appointment-card/appointment-card.component';
import Arrow from '../../components/arrow/arrow.component';

import { Styles } from './appointment.styles.jsx';

const AppointmentPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    isActive ? setIsActive(false) : setIsActive(true);
    console.log(isActive);
  };

  return (
    <Styles>
      <Container fluid className="top-container">
        <Image fluid />
        <h2>Get the best medical service</h2>
        <div className="text">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum.
        </div>
      </Container>
      <Container fluid className="bottom-container">
        <Row>
          <Col md={6} xs={12}>
            <div className="appointment-wrapper">
              <p className="click-text" onClick={handleActive}>
                Make na appointment <Arrow isActive={isActive} />
              </p>
              <AppointmentCard isActive={isActive} />
            </div>
          </Col>
          <Col md={{ span: 3, offset: 3 }} xs={12}>
            <Calendar locale="en" />
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default AppointmentPage;
