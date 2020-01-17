import styled from 'styled-components';

export const Styles = styled.div`
  .appointment-form {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.4s ease;
    padding: 0;
    margin: 0;
    width: 25vw;
    background-color: #3c64b1;

    &.active {
      opacity: 0.3;
      height: 200px;
    }
  }
`;
