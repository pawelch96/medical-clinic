import styled from 'styled-components';

export const Styles = styled.span`
  .arrow {
    width: 24px;
    height: 24px;
    display: inline-block;
    position: relative;
    bottom: -10px;
    left: -10px;
    transition: 0.4s ease;
    margin-top: 2px;
    text-align: left;
    transform: rotate(45deg);
    float: right;

    &:before,
    &:after {
      position: absolute;
      content: '';
      display: inline-block;
      width: 12px;
      height: 3px;
      background-color: #fff;
      transition: 0.4s ease;
    }
    &:after {
      position: absolute;
      transform: rotate(90deg);
      top: -5px;
      left: 5px;
    }

    &.active {
      transform: rotate(45deg) translate(-5px, -5px);
      &:before {
        transform: translate(10px, 0);
      }
      &:after {
        transform: rotate(90deg) translate(10px, 0);
      }
    }
  }
`;
