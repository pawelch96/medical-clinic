import React from 'react';

import { Form, Col } from 'react-bootstrap';
import { Styles } from './appointment-card.styles';

import { doctors } from '../../doctors_sample_json';

const AppointmentCard = ({ isActive, ...otherProps }) => (
  <Styles>
    {isActive ? (
      <div className="appointment-form active">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="form-label">Choose a doctor</Form.Label>
          <Form.Control as="select" className="form-control">
            <option className="form-option">Choose...</option>
            {doctors.map(({ id, name }) => (
              <option key={id} className="form-option">
                {name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </div>
    ) : (
      <div className="appointment-form" />
    )}
  </Styles>
);

export default AppointmentCard;
