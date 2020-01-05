import styled from "styled-components";

export const Styles = styled.div`
  .title-row {
    padding: 5%;
    background-color: #dfe1e6;
  }

  .card-list-row {
    background-color: #ececec;
    padding: 5%;
  }

  h2 {
    font-size: 1.9vw;
    font-family: "Muli", sans-serif;
    font-weight: bolder;

    @media screen and (max-width: 800px) {
      font-size: 22px;
      font-weight: bold;
    }
  }
`;
