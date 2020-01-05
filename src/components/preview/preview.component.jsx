import React from "react";

import { Col } from "react-bootstrap";

import {
  Styles,
  StyledLink,
  DoctorIconContainer,
  CareIconContainer
} from "./preview.styles";

const PreviewComponent = ({ children, ...otherProps }) => {
  return (
    <StyledLink to="/staff">
      <Styles>
        <Col>
          <div>
            {otherProps.isDoctor ? (
              <DoctorIconContainer />
            ) : (
              <CareIconContainer />
            )}
          </div>
          <div className="text">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum.
          </div>
        </Col>
      </Styles>
    </StyledLink>
  );
};

export default PreviewComponent;
