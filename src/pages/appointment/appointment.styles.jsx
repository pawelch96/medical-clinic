import styled from 'styled-components';

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
    content: url(${require('../../assets/drip_triple_cropped.jpg')});
  }

  h2 {
    font-size: 2vw;
    font-family: 'Muli', sans-serif;
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
    font-family: 'Muli', sans-serif;
    font-size: 1.2vw;
    color: black;
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
    width: 30vw;
    background-color: #3c64b1;
    color: white;
    font-family: 'Muli', sans-serif;
    font-weight: bolder;
    font-size: 1.2vw;
    padding: 1%;
    cursor: pointer;
    display: block;
    text-align: center;
    transition: 0.15s ease;
  }

  .click-text {
    display: block;
    text-align: left;
    padding: 8px 16px;
    margin: 0;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.6);
    transition: 0.15s ease;

    &:hover {
      color: white;
    }
  }

  .bottom-container {
    background-color: #ececec;
    padding: 25px;

    @media screen and (max-width: 800px) {
      padding: 8px;
      align-items: center;
    }
  }

  .react-calendar {
    background-color: #979797;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Muli', sans-serif;
  }

  .react-calendar__tile--active {
    background: #3c64b1;
  }
`;
