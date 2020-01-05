import styled, { css } from "styled-components";
import { ReactComponent as DoctorIcon } from "../../assets/doctor.svg";
import { ReactComponent as CareIcon } from "../../assets/care.svg";
import { Link } from "react-router-dom";

export const Styles = styled.div`
  background-color: #f4f4f4;
  margin: 5% 3%;
  width: auto;
  height: auto;
  cursor: pointer;

  .col {
    padding: 3% 3% 3% 5%;

    @media screen and (max-width: 800px) {
      padding: 2%;
    }
  }

  .text {
    font-family: "Muli", sans-serif;
    font-size: 1.2vw;
    color: black;
    padding-left: 3%;
    letter-spacing: 0.3px;

    @media screen and (max-width: 800px) {
      font-size: 16px;
    }
  }
`;

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const IconStyles = css`
  width: 17%;
  height: auto;
  position: block;
  padding: 3%;
`;

export const DoctorIconContainer = styled(DoctorIcon)`
  ${IconStyles}
`;

export const CareIconContainer = styled(CareIcon)`
  ${IconStyles}
`;
