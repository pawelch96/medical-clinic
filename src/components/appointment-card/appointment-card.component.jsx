import React from 'react';

import { Styles } from './appointment-card.styles';

const AppointmentCard = ({ isActive, ...otherProps }) => (
  <Styles>
    {isActive ? (
      <div className="appointment-form active">Ther will be some forms</div>
    ) : (
      <div className="appointment-form" />
    )}
  </Styles>
);

export default AppointmentCard;
