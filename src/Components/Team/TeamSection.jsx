import React from "react";
import { CallButton } from "../GlobalStyles/globalstyles";
import {
    TeamContainer,
  Container,
  LayoutGrid,
  Column,
  Card,
  Image,
  RightContent,
  Contents,
  Title,
  Para
} from "./teamSection.styles";
const TeamSection = () => {
  return (
    <TeamContainer>
      <Container>
        <LayoutGrid>
          <Column>
            <Card>
              <div className="Circle"></div>
              <Image src="Images/dummy1.png" alt="Team Member" />
            </Card>
          </Column>
          <Column>
            <Card>
            <div className="Circle"></div>
              <Image src="Images/dummy2.png" alt="Team Member" />
            </Card>
            <Card>
            <div className="Circle"></div>
              <Image src="Images/dummy3.png" alt="Team Member" />
            </Card>
          </Column>
          <Column>
            <Card>
            <div className="Circle"></div>
              <Image src="Images/dummy3.png" alt="Team Member" />
            </Card>
          </Column>
        </LayoutGrid>
        <RightContent>
          <Contents>
            <Title>Our Team of Experts is Ready to Assist You</Title>
            <Para>
              At emploi, we understand that HR and recruitment can be
              challenging. That is why we have assembled a team of experts to
              assist you whenever you need it.
            </Para>
            <CallButton>Contact Us</CallButton>
          </Contents>
        </RightContent>
      </Container>
    </TeamContainer>
  );
};

export default TeamSection;
