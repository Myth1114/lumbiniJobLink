import React from "react";

import {
  Container,
  FooterWrapper,
  FooterMain,
  FooterGrid,
  Title,
  Social,
  SocialIcons,
  Image,
  Content,
  ContentItems,
} from "./footer.styles";
const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <FooterMain>
          <Title>Lumbini Job Link</Title>
          <Social>
            <SocialIcons>
              <Image src="Images/facebook.png" alt="Facebook" />
            </SocialIcons>
            <SocialIcons>
              <Image src="Images/twitter.png" alt="Facebook" />
            </SocialIcons>
            <SocialIcons>
              <Image src="Images/twitter.png" alt="Facebook" />
            </SocialIcons>
            <SocialIcons>
              <Image src="Images/linkedin.png" alt="Facebook" />
            </SocialIcons>
          </Social>
        </FooterMain>
        <FooterGrid>
          <Content>
            <ContentItems>
              <h2>Quick Links</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
              </ul>
            </ContentItems>
          </Content>
          <Content>
            <ContentItems>
              <h2>Quick Links</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
              </ul>
            </ContentItems>
          </Content>
          <Content>
            <ContentItems>
              <h2>Quick Links</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
              </ul>
            </ContentItems>
          </Content>
        </FooterGrid>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;
