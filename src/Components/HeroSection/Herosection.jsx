import React from "react";
import {CallButton } from "../GlobalStyles/globalstyles";
import {
  HeroSection,
  HeroElements,
  LeftElement,
  RightElement,
  Moto,
  Description,
  ImgContainer,
  RightElementContainer,
  Icon,
  Icon2,
  ImgContainer2
} from "./Herosection.styles";
const Herosection = () => {
  return (
    <HeroSection>
      <HeroElements>
        <LeftElement>
          <Moto>Hire with Confidence, Find Your Dream Team</Moto>
          <Description>
            Take your hiring process to the next level with our cutting-edge
            solutions. Let us help you find the right candidates, streamline
            your HR operations, and achieve your business objectives.
          </Description>
          <CallButton href="tel:6177787312">Call Us</CallButton>
        </LeftElement>
        <RightElement>
          <RightElementContainer>
            <ImgContainer>
              <img src="./Images/image-1.png" alt="img-1"></img>
            </ImgContainer>
            <Icon>
              <img
                src="./Images/Business.png"
                alt="business"
                height="60px"
              ></img>
            </Icon>
          </RightElementContainer>
          <RightElementContainer>
            <Icon2>
              <img
                src="./Images/resume.png"
                alt="business"
                height="60px"
              ></img>
            </Icon2>
            <ImgContainer2>
              <img src="./Images/image-2.png" alt="img-1"></img>
            </ImgContainer2>
          </RightElementContainer>
        </RightElement>
      </HeroElements>
    </HeroSection>
  );
};

export default Herosection;
