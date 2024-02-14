import React from "react";
import Marquee from "react-fast-marquee";
import {
  Container,
  ContainerMain,
  MarqueeElements,
  Image,
} from "./marqueeSection.styles";
const MarqueeSection = () => {
  return (
    <Container>
      <ContainerMain>
        <h4>Trusted by hundreds of progressive companies</h4>
        <Marquee gradient={true} pauseOnHover={true}>
          <MarqueeElements>
            <Image>
              <img src="./Images/apple.png" alt="wfw" height="100px" />
            </Image>
          </MarqueeElements>
          <MarqueeElements>
            <Image>
              <img src="./Images/samsung.png" alt="wfw" height="100px" />
            </Image>
          </MarqueeElements>
          <MarqueeElements>
            <Image>
              <img src="./Images/dell.png" alt="wfw" height="100px" />
            </Image>
          </MarqueeElements>
          <MarqueeElements>
            <Image>
              <img src="./Images/hp.png" alt="wfw" height="100px" />
            </Image>
          </MarqueeElements>
          <MarqueeElements>
            <Image>
              <img src="./Images/microsoft.png" alt="wfw" height="100px" />
            </Image>
          </MarqueeElements>
          <MarqueeElements>
            <Image>
              <img src="./Images/LG.png" alt="wfw" height="100px" />
            </Image>
          </MarqueeElements>
        </Marquee>
      </ContainerMain>
    </Container>
  );
};

export default MarqueeSection;
