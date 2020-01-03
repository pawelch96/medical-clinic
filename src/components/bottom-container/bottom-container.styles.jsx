import styled from 'styled-components';

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

  .con-1 {
    background-color: lightskyblue;
  }

  .row-2 {
    background-color: red;
  }

  .row-1 {
    background-color: yellow;
  }

  .col-1 {
    background-color: green;
  }

  .col-2 {
    background-color: brown;
  }

  .img-fluid {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 35vw;

    /* position: absolute;
    top: 2vw;
    right: 9vw; */

    @media screen and (max-width: 800px) {
      width: 100vw;
    }
  }

  .left-column {
    position: relative;
    background-color: lightcyan;

    @media screen and (max-width: 800px) {
      padding: 0;
    }
  }

  .right-column {
    background-color: lightsalmon;
    position: relative;
    padding: 25px;
  }

  .bottom-title {
    font-size: 1.7vw;
    font-family: 'Muli', sans-serif;
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

export const BottomPageContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const ImageContainer = styled.div`
  height: 62%;
  width: 38%;
  box-shadow: 10px 10px 5px lightgray;
  margin: 60px 40px;
  float: right;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
