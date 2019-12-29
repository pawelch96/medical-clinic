import React from "react";

import { ReactComponent as Menu } from "../../assets/menu.svg";

import CustomButton from "../custom-button/custom-button.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionItem,
  OptionsContainer,
  MenuItem
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">Medical Clinic</LogoContainer>
    <OptionsContainer>
      <OptionItem to="/staff"> STAFF </OptionItem>
      <OptionItem to="/contact"> CONTACT </OptionItem>
      <CustomButton type="button" inverted>
        Sign In
      </CustomButton>
      <CustomButton type="button">Sign Up</CustomButton>
      <MenuItem>
        <Menu className="menu" />
      </MenuItem>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
