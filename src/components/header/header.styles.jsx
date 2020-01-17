import styled from 'styled-components';

export const Styles = styled.div`
  .navbar {
    background-color: #ececec;
  }

  .navbar-brand {
    font-size: 24px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    color: #3c64b1;
    margin-left: 40px;

    @media screen and (max-width: 800px) {
      margin-left: 16px;
    }
  }

  .navbar-toggler {
    border: none;
  }

  a {
    margin: 0;
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    color: black;
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
      color: #3c64b1;
      text-decoration: none;
    }
  }

  .navbar-nav .nav-item .nav-link {
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    color: black;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 16px;
    margin-right: 10px;

    &:hover {
      color: #3c64b1;
      text-decoration: none;
    }
  }
`;
