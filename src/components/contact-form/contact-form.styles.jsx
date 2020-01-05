import styled from "styled-components";

export const Styles = styled.div`
  background-color: #f4f4f4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .row {
    padding: 0 3%;
  }

  .contact-form {
    margin: auto;
    width: 100%;
    padding: 0 15px;

    @media screen and (max-width: 800px) {
      padding: 8px;
      align-items: center;
      max-width: 95%;
    }
  }

  #submit-form-button {
    margin: 15px;
  }
`;
