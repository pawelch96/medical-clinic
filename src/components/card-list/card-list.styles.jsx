import styled from "styled-components";

export const Styles = styled.div`
  .card {
    width: 20vw;
    height: auto;
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    margin-bottom: 40px;

    @media screen and (max-width: 800px) {
      width: 80vw;
      margin-bottom: 16px;
    }
  }

  .card-img-top {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .card-title {
    font-size: 1.4vw;
    font-family: "Muli", sans-serif;
    font-weight: bolder;

    @media screen and (max-width: 800px) {
      font-size: 22px;
      font-weight: bold;
    }
  }

  .card-body {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .card-text {
    font-family: "Muli", sans-serif;
    font-size: 0.9vw;
    color: black;
    background-color: rgba(255, 255, 255, 0.9);

    @media screen and (max-width: 800px) {
      font-size: 12px;
    }
  }

  .card-footer {
    border-radius: 0;
    border: none;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .card-columns {
    column-count: 3;
    align-items: center;

    @media screen and (max-width: 800px) {
      column-count: 1;
    }
  }
`;
