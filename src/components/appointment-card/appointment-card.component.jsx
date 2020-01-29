import React, { useState } from "react";
// import { Dropdown } from "react-bootstrap";
import Arrow from "../../components/arrow/arrow.component";

import { Styles } from "./appointment-card.styles";

const AppointmentCard = () => {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("Make an appointment");

  const handleActive = () => {
    isActive ? setIsActive(false) : setIsActive(true);
    console.log(isActive);
  };

  const handleChange = event => {
    const { name } = event.target;

    setTitle(name);
  };

  return (
    <Styles>
      <div className="appointment-form active">
        <p className="click-text" onClick={handleActive}>
          {title} <Arrow isActive={isActive} />
        </p>
        {isActive ? (
          <ul>
            <li name="Stefan">Stefan</li>
            <li name="Tom" onClick={handleChange}>
              Tom
            </li>
            <li name="Ann">Ann</li>
          </ul>
        ) : (
          <div className="appointment-form" />
        )}
      </div>
    </Styles>
  );
};

// <Dropdown>
//   <Dropdown.Toggle className="dropdwn">Pow! Zoom!</Dropdown.Toggle>
//   <Dropdown.Menu>
//     <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//     <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//     <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
//     <Dropdown.Divider />
//     <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>

export default AppointmentCard;
