import React from "react";

import {
  MainPageContainer,
  ImageContainer,
  Image,
  TextContainer,
  TextTitle,
  TextHeader,
  TextContent
} from "./main-container.styles";

import CustomButton from "../custom-button/custom-button.component";

const MainContainer = () => (
  <MainPageContainer>
    <ImageContainer>
      <Image src="https://i.ibb.co/nLLpsbg/splash.jpg" />
    </ImageContainer>
    <TextContainer>
      <TextHeader>about us</TextHeader>
      <TextTitle>We offer the best quality of service</TextTitle>
      <TextContent>
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
        suscipit quaerendum. At nam minimum ponderum. Est audiam animal
        molestiae te. Ex duo eripuit mentitum.
      </TextContent>
      <CustomButton type="button" bordered>
        Contact Us
      </CustomButton>
    </TextContainer>
  </MainPageContainer>
);

export default MainContainer;
