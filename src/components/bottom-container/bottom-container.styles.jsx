import styled from "styled-components";

export const Styles = styled.div`
  .container-fluid {
    background-color: #ececec;
    padding: 25px;

    @media screen and (max-width: 800px) {
      padding: 8px;
      align-items: center;
    }
  }

  .row {
    position: relative;

    @media screen and (max-width: 800px) {
      margin: 0;
    }
  }

  .col-1 {
    @media screen and (max-width: 800px) {
      padding: 0;
    }
  }

  .col-2 {
    @media screen and (max-width: 800px) {
      padding: 0;
    }
  }

  .img-fluid {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 35vw;

    @media screen and (max-width: 800px) {
      width: 100vw;
    }
  }

  .left-column {
    position: relative;

    @media screen and (max-width: 800px) {
      padding: 0;
    }
  }

  .right-column {
    position: relative;
    padding: 25px;

    @media screen and (max-width: 800px) {
      padding: 0;
    }
  }

  .bottom-title {
    font-size: 1.7vw;
    font-family: "Muli", sans-serif;
    font-weight: bolder;
    color: #373f41;
    padding: 5vw 1vw 2vw 3vw;

    @media screen and (max-width: 800px) {
      font-size: 22px;
      font-weight: bold;
      padding: 20px;
    }
  }
`;
