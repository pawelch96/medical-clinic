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
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
