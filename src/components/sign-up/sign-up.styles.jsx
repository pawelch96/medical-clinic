import styled from "styled-components";

export const Styles = styled.div`
  .container-fluid {
    background-color: #ececec;
    padding: 45px;

    @media screen and (max-width: 800px) {
      padding: 8px;
      align-items: center;
    }
  }

  .form-column {
    background-image: url(${require("../../assets/blurred_bottles.png")});
    background-size: cover;
    background-repeat: no-repeat;
  }

  .row {
    @media screen and (max-width: 800px) {
      margin: 0;
    }
  }

  h2 {
    margin: 10%;
    font-size: 1.9vw;
    font-family: "Muli", sans-serif;
    font-weight: bolder;

    @media screen and (max-width: 800px) {
      font-size: 22px;
      font-weight: bold;
    }
  }

  .sign-up-form {
    max-width: 60%;
    padding-bottom: 5%;
    margin: auto;

    @media screen and (max-width: 800px) {
      padding: 8px;
      align-items: center;
      max-width: 100%;
    }
  }
`;
