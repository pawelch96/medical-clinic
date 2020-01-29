import React, { useState } from "react";

import { Container, Col, Row, Image, Form, Alert } from "react-bootstrap";
import { Calendar } from "react-calendar";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import CustomButton from "../../components/custom-button/custom-button.component";

import { Styles } from "./appointment.styles.jsx";

const AppointmentPage = () => {
  const [doc, setDoc] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const onChange = date => {
    setDate(date);
    console.log(date);
  };

  const onTimeChange = time => {
    setTime(time);
  };

  const onClick = () => {
    const appTime = time;
    const appDate = `${date.getFullYear()}/${date.getMonth() +
      1}/${date.getDate()}`;
    alert(`You made an appointment on ${appDate} at ${appTime}`);
  };

  const onSelect = doctor => {
    setDoc(doctor);
  };

  return (
    <Styles>
      <Container fluid className="top-container">
        <Image fluid />
        <h2>Get the best medical service</h2>
        <div className="text">
          Make an appointment with the selected specialist
        </div>
      </Container>
      <Container fluid className="bottom-container">
        <Row>
          <Col md={6} xs={12}>
            <div className="appointment-wrapper">
              <p className="click-text">Make na appointment</p>

              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Select a doctor</Form.Label>
                <Form.Control as="select" multiple>
                  <option onChange={onSelect} value="Leanne Graham">
                    Leanne Graham
                  </option>
                  <option onChange={onSelect} value="Ervin Howell">
                    Ervin Howell
                  </option>
                  <option onChange={onSelect} value="Clementine Bauch">
                    Clementine Bauch
                  </option>
                  <option onChange={onSelect} value="Patricia Lebsack">
                    Patricia Lebsack
                  </option>
                  <option onChange={onSelect} value="Chelsey Dietrich">
                    Chelsey Dietrich
                  </option>
                  <option onChange={onSelect} value="Dennis Schulist">
                    Dennis Schulist
                  </option>
                  <option onChange={onSelect} value="Kurtis Weissna">
                    Kurtis Weissnat
                  </option>
                  <option onChange={onSelect} value="Nicholas Runolfsdottir V">
                    Nicholas Runolfsdottir V
                  </option>
                </Form.Control>
              </Form.Group>
              <h3 className="pick-date">Pick a date</h3>
              <div>
                <DatePicker
                  locale="en"
                  format="yy-MM-dd"
                  onChange={onChange}
                  value={date}
                />
              </div>
              <h3 className="pick-date">Pick an hour</h3>
              <div>
                <TimePicker onChange={onTimeChange} value={time} locale="en" />
              </div>
              <CustomButton className="button" type="button" onClick={onClick}>
                Submit
              </CustomButton>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="history-wrapper">
              <p className="click-text black">History of appointments</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

// <ListGroup variant="flush">
//                 <ListGroup.Item action onClick={} active>Cras justo odio</ListGroup.Item>
//                 <ListGroup.Item action onClick={}>Dapibus ac facilisis in</ListGroup.Item>
//                 <ListGroup.Item action onClick={}>Morbi leo risus</ListGroup.Item>
//                 <ListGroup.Item action onClick={}>Porta ac consectetur ac</ListGroup.Item>
//               </ListGroup>
// <Calendar locale="en" onChange={onChange} value={date} />

export default AppointmentPage;
