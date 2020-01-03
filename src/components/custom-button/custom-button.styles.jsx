import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #3c64b1;
  color: white;
  border: none;

  &:hover {
    background-color: #2a467b;
  }

  @media screen and (max-width: 800px) {
    padding: 0 10px 10px;
    margin-bottom: 10px;
    margin-left: 16px;
  }
`;

const invertedButtonStyles = css`
  background-color: transparent;
  color: #3c64b1;
  border: none;

  &:hover {
    color: #2a467b;
  }

  @media screen and (max-width: 800px) {
    padding: 0 10px 10px;
    margin-bottom: 10px;
    margin-left: 16px;
  }
`;

const borderedButtonStyles = css`
  background-color: transparent;
  color: #3c64b1;
  border: 1px solid #3c64b1;

  &:hover {
    color: #2a467b;
    border: 1px solid #2a467b;
  }
`;

const getButtonStyles = props => {
  if (props.bordered) {
    return borderedButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 84px;
  width: auto;
  height: 42px;
  letter-spacing: 0.5px;
  line-height: 42px;
  padding: 0px 30px 30px;
  font-size: 16px;
  font-family: 'Muli', sans-serif;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-right: 10px;

  ${getButtonStyles}
`;
