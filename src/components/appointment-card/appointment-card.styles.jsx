import styled, { css } from 'styled-components';

const backgroundColor = css`
  background-color: #3c64b1;
`;

const font = css`
  font-family: 'Muli', sans-serif;
  font-size: 1.2vw;
  letter-spacing: 0.3px;
  color: #e9e9e9;
`;

export const Styles = styled.div`
  .appointment-form {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.4s ease;
    padding: 0;
    margin: 0;
    width: 25vw;
    ${backgroundColor}

    &.active {
      opacity: 1;
      height: 400px;
    }
  }

  .form-group {
    margin-left: auto;
    margin-right: auto;
    width: 100vw;

    &.col {
      margin-left: auto;
      margin-right: auto;
      width: 100vw;
    }
  }

  .form-label {
    ${font}
    padding-top: 4%;
    padding-bottom: 4%;
    float: left;
    font-weight: lighter;
  }

  .form-control {
    width: 23.5vw;
    ${font}
    margin-left: auto;
    margin-right: auto;
    border: solid 1px #e9e9e9;
    ${backgroundColor}
    color: white;
  }
`;
