import React from "react";
import { PrimaryHeading } from "../GlobalStyles/globalstyles";
import {
  Para,
  Container,
  SectionElements,
  SectionTitle,
  SectionText,
  SectionIcon,
  Image,
} from "./banner.styles";
const Banner = () => {
  return (
    <>
      <PrimaryHeading>Streamline Recruitment with Expert Support</PrimaryHeading>
      <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam modi quod alias deleniti praesentium pariatur libero quam consequatur, fuga nesciunt cum rerum dolor eveniet earum harum nemo iste molestiae temporibus?</Para>
      <Container>
        <SectionElements>
          <SectionTitle>Talent Resourcing</SectionTitle>
          <SectionText>
            Talent Sourcing Innovative techniques to find the best candidates
            for your open positions.
          </SectionText>
          <SectionIcon>
            <Image src="./Images/group.png" alt="bus"></Image>
          </SectionIcon>
        </SectionElements>
        <SectionElements>
          <SectionTitle>Employer Branding</SectionTitle>
          <SectionText>
            Develop a strong and distinctive employer brand that will attract
            talent.
          </SectionText>
          <SectionIcon>
            <Image src="./Images/branding.png" alt="bus"></Image>
          </SectionIcon>
        </SectionElements>
        <SectionElements>
          <SectionTitle>Consulting</SectionTitle>
          <SectionText>
            Provide advice and support on all aspects of HR
          </SectionText>
          <SectionIcon>
            <Image src="./Images/consulting.png" alt="bus"></Image>
          </SectionIcon>
        </SectionElements>
      </Container>
    </>
  );
};

export default Banner;
