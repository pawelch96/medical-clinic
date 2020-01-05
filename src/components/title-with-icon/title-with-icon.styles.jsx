import styled, { css } from "styled-components";
import { ReactComponent as HospitalIcon } from "../../assets/hospital.svg";
import { ReactComponent as PlaceIcon } from "../../assets/place.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";

export const Styles = styled.div`
  padding-bottom: 3%;
  padding-left: 2%;

  @media screen and (max-width: 800px) {
    padding: 6%;
  }

  span {
    font-size: 1.2vw;
    font-family: "Muli", sans-serif;
    font-weight: bold;
    margin: auto;
    padding: 1% 2%;
    color: #373f41;
    display: inline-block;
    vertical-align: middle;

    @media screen and (max-width: 800px) {
      font-size: 4.5vw;
    }
  }
`;

const IconStyles = css`
  width: 48px;
  height: auto;
  padding: 1%;

  @media screen and (max-width: 800px) {
    width: 36px;
  }
`;

export const HospitalIconContainer = styled(HospitalIcon)`
  ${IconStyles}
`;

export const PlaceIconContainer = styled(PlaceIcon)`
  ${IconStyles}
`;

export const EmailIconContainer = styled(EmailIcon)`
  ${IconStyles}
`;
