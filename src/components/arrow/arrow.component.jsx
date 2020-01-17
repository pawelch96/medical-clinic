import React from 'react';

import { Styles } from './arrow.styles';

const Arrow = ({ isActive, ...otherProps }) => (
  <Styles>
    {isActive ? (
      <span className="arrow active"></span>
    ) : (
      <span className="arrow"></span>
    )}
  </Styles>
);

export default Arrow;
