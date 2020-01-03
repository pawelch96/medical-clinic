import styled from 'styled-components';

export const Styles = styled.div`
  .container-fluid {
    background-color: #dfe1e6;
    position: relative;
    padding: 25px;
    @media screen and (max-width: 800px) {
      padding: 8px;
      align-items: center;
    }
  }

  .img-fluid {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 75vw;
    height: auto;

    @media screen and (max-width: 800px) {
      width: 100vw;
    }
  }

  .card {
    height: auto;
    max-height: 40vh;
    width: 35vw;
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    position: absolute;
    bottom: 4vw;
    right: 9vw;
    padding: 10px;

    @media screen and (max-width: 800px) {
      width: auto;
      max-height: 70vh;
      position: static;
    }
  }

  .card-header {
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    font-family: 'Muli', sans-serif;
    font-weight: 900;
    font-size: 0.7vw;
    text-transform: uppercase;
    color: #3c64b1;

    @media screen and (max-width: 800px) {
      font-size: 14px;
      font-weight: 800;
      padding-bottom: 8px;
      padding-left: 10px;
    }
  }

  .card-title {
    font-size: 1.9vw;
    font-family: 'Muli', sans-serif;
    font-weight: bolder;

    @media screen and (max-width: 800px) {
      font-size: 22px;
      font-weight: bold;
    }
  }

  .card-body {
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  .card-text {
    font-family: 'Muli', sans-serif;
    font-size: 0.9vw;
    color: black;

    @media screen and (max-width: 800px) {
      font-size: 12px;
    }
  }
`;
