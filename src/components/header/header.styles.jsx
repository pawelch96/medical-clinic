import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 88px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #e2e5e6;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  margin-left: 80px;
  margin-top: 28px;
  font-weight: bold;
  cursor: pointer;
  font-size: 24px;
  font-family: "Lato", sans-serif;
  color: #3c64b1;
  text-transform: uppercase;

  @media screen and (max-width: 800px) {
    font-size: 18px;
    width: 60%;
    height: 100%;
    display: flex;
    margin: 0px 10px 0px 10px;
    align-items: center;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  float: right;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const OptionItem = styled(Link)`
  font-weight: 600;
  padding-right: 60px;
  cursor: pointer;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  color: black;

  .last-child {
    padding-right: 10px;
  }
`;

export const MenuItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 60px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 40%;
  }
`;
