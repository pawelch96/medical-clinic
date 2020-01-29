import styled from 'styled-components';

export const Styles = styled.div`
  .title-row {
    padding: 5%;
    background-color: #dfe1e6;
  }

  .title-col {
    margin: auto;
    text-align: center;
  }

  .contact-row {
    background-color: #ececec;
    padding: 2%;
  }

  .contact-col {
    padding: 1% 3%;
  }

  .border {
    width: 64%;
    height: 0;
    border: 1px solid #000000;
    margin-bottom: 3%;

    @media screen and (max-width: 800px) {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .contact-info {
    padding: 2% 4%;
  }

  h2 {
    font-size: 1.9vw;
    font-family: 'Muli', sans-serif;
    font-weight: bolder;
    margin: auto;
    padding-bottom: 1vw;

    @media screen and (max-width: 800px) {
      font-size: 22px;
      font-weight: bold;
    }
  }

  h4 {
    font-size: 1.2vw;
    font-family: 'Muli', sans-serif;
    font-weight: bold;
    margin: auto;
    color: #373f41;

    @media screen and (max-width: 800px) {
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
