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
          {otherProps.isDoctor ? (
            <div className="text">
              We are constantly developing and improving to meet your
              requirements
            </div>
          ) : (
            <div className="text">
              Our staff will do everything to make you feel calm and safe
            </div>
          )}
        </Col>
      </Styles>
    </StyledLink>
  );
};

export default PreviewComponent;
