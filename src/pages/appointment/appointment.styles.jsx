import styled from "styled-components";

export const Styles = styled.div`
  .top-container {
    padding: 25px;
    background-color: #dfe1e6;
    position: relative;

    @media screen and (max-width: 800px) {
      padding: 8px;
    }
  }

  .img-fluid {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100vw;
    height: auto;
    content: url(${require("../../assets/drip_triple_cropped.jpg")});
  }

  h2 {
    font-size: 2vw;
    font-family: "Muli", sans-serif;
    font-weight: bolder;
    color: #e9e9e9;
    padding: 2%;
    position: absolute;
    left: 10vw;
    top: 10vw;

    @media screen and (max-width: 800px) {
      font-size: 22px;
      font-weight: bold;
      top: 4vw;
    }
  }

  .text {
    font-family: "Muli", sans-serif;
    font-size: 1.2vw;
    letter-spacing: 0.3px;
    width: 30vw;
    color: #e9e9e9;
    padding: 2%;
    position: absolute;
    left: 10vw;
    top: 15vw;

    @media screen and (max-width: 800px) {
      font-size: 12px;
      width: 80vw;
      top: 12vw;
    }
  }

  .appointment-wrapper {
    width: 40vw;
    height: 450px;
    background-color: #3c64b1;
    color: white;
    font-family: "Muli", sans-serif;
    font-weight: bolder;
    font-size: 1.2vw;
    padding: 1%;
    /* cursor: pointer; */
    display: block;
    text-align: center;
    transition: 0.15s ease;
    margin-left: auto;
    margin-right: auto;
  }

  .history-wrapper {
    width: 40vw;
    height: 450px;
    background-color: #dfe1e6;
    color: white;
    font-family: "Muli", sans-serif;
    font-weight: bolder;
    font-size: 1.2vw;
    padding: 1%;
    /* cursor: pointer; */
    display: block;
    text-align: center;
    transition: 0.15s ease;
    margin-left: auto;
    margin-right: auto;
  }

  .click-text {
    display: block;
    text-align: left;
    padding: 8px 16px;
    margin: 0;
    /* color: rgba(255, 255, 255, 0.6); */
    color: white;
    transition: 0.15s ease;

    &.black {
      color: black;
    }
    /* &:hover {
      color: white;
    } */
  }

  .bottom-container {
    background-color: #ececec;
    padding: 25px;

    @media screen and (max-width: 800px) {
      padding: 8px;
      align-items: center;
    }
  }

  .button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
  }

  .form-label {
    margin-top: 8px;
    color: white;
    text-align: left;
    font-family: "Muli", sans-serif;
    font-size: 1.2vw;
    letter-spacing: 0.3px;
    font-weight: lighter;
  }

  .pick-date {
    margin-top: 16px;
    color: white;
    text-align: center;
    font-family: "Muli", sans-serif;
    font-size: 1.2vw;
    letter-spacing: 0.3px;
    font-weight: lighter;
  }

  .list-group-item {
    background-color: #3c64b1;
    color: white;
    text-align: left;
    font-family: "Muli", sans-serif;
    font-size: 1.2vw;
    letter-spacing: 0.3px;
    font-weight: lighter;
  }

  .react-calendar {
    background-color: #979797;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: "Muli", sans-serif;
    margin-left: auto;
    margin-right: auto;
  }

  .react-calendar__tile--active {
    background: #3c64b1;
  }

  .react-date-picker__wrapper {
    color: black;
  }

  .react-time-picker__wrapper {
    color: black;
  }
`;
