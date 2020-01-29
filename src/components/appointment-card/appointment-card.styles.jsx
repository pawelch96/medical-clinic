import styled from "styled-components";

export const Styles = styled.div`
  .appointment-form {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.4s ease;
    padding: 0;
    margin: 0;
    width: 25vw;
    background-color: #3c64b1;

    &.active {
      opacity: 1;
      height: 400px;
      padding: 16px;
    }
  }

  .dropdown-toggle {
    &.btn {
      &.btn-primary {
        background-color: #3c64b1;
        padding: 16px;
        width: 95wv;
        border: none;
      }
    }
  }

  .dropdwn {
    background-color: #3c64b1;
    padding: 16px;
    width: 95wv;
    border: none;
  }

  .dropdown-menu {
    &.show {
      background-color: #3c64b1;
      width: 90vw;
    }
  }
`;
