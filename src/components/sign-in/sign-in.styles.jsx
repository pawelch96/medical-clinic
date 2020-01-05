import styled from "styled-components";

export const Styles = styled.div`
  .container-fluid {
    background-color: #dfe1e6;
    padding: 45px;

    @media screen and (max-width: 800px) {
      padding: 8px;
      align-items: center;
    }
  }

  #form-column {
    background-image: url(${require("../../assets/blurred_tubes.png")});
    background-size: cover;
    background-repeat: no-repeat;
  }

  .row {
    @media screen and (max-width: 800px) {
      margin: 0;
    }
  }

  .form-div {
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: 100%;
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

  form {
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
