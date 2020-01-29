import React from "react";

import {
  Styles,
  HospitalIconContainer,
  PlaceIconContainer,
  EmailIconContainer
} from "./title-with-icon.styles";

const TitleWithIcon = ({ children, ...otherProps }) => (
  <Styles>
    {otherProps.hospital ? (
      <div>
        <HospitalIconContainer />
        <span> How to get to us</span>
      </div>
    ) : otherProps.place ? (
      <div>
        <PlaceIconContainer />
        <span>
          Click{" "}
          <a
            href="https://www.google.pl/maps/place/A-1,+wybrze%C5%BCe+Stanis%C5%82awa+Wyspia%C5%84skiego+27,+50-370+Wroc%C5%82aw/@51.1078972,17.0595108,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x470fe82a73eb172f:0x1c6df8655655e3c2!2sA-1,+wybrze%C5%BCe+Stanis%C5%82awa+Wyspia%C5%84skiego+27,+50-370+Wroc%C5%82aw!3b1!8m2!3d51.1078939!4d17.0616995!3m4!1s0x470fe82a73eb172f:0x1c6df8655655e3c2!8m2!3d51.1078939!4d17.0616995"
            target="_blank"
            rel="noopener noreferrer"
          >
            this link
          </a>{" "}
          to find us on map!
        </span>
      </div>
    ) : (
      <div>
        <EmailIconContainer />
        <span>Get in touch with us</span>
      </div>
    )}
  </Styles>
);

export default TitleWithIcon;
