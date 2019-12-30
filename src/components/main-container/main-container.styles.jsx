import styled from 'styled-components';

export const Styles = styled.div``;

export const MainPageContainer = styled.div`
  height: 672px;
  width: 100%;
  background-color: rgba(60, 100, 177, 0.06);
  display: flex;
`;

export const ImageContainer = styled.div`
  height: 88%;
  width: 64%;
  box-shadow: 10px 10px 5px lightgray;
  margin: 40px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const TextContainer = styled.div`
  height: 40%;
  width: 35%;
  display: block;
  background-color: rgba(255, 255, 255, 0.9);
  float: right;
  margin-right: 60px;
  margin-bottom: 60px;
  position: fixed;
  right: 120px;
  top: 280px;
`;

export const TextTitle = styled.h2`
  margin: 10px 18px;
  font-size: 44px;
  font-family: 'Muli', sans-serif;
  display: block;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
`;

export const TextHeader = styled.span`
  margin: 10px 18px;
  font-family: 'Muli', sans-serif;
  font-weight: 900;
  font-size: 14px;
  text-transform: uppercase;
  color: #3c64b1;
  display: block;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
`;

export const TextContent = styled.span`
  margin: 10px 18px;
  font-family: 'Muli', sans-serif;
  font-size: 16px;
  color: black;
  display: block;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
`;
