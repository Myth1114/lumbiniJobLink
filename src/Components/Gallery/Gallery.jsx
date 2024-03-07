import React from "react";
import Marquee from "react-fast-marquee";
import { Container, MarqueeElements, Image } from "./gallery.styles";
const Gallery = () => {
  return (
    <Container>
      <Marquee pauseOnHover={true}>
        <MarqueeElements>
          <Image src="Images/gallery-1.jpeg" alt="gallery" />
        </MarqueeElements>
        <MarqueeElements>
          <Image src="Images/gallery-2.jpeg" alt="gallery" />
        </MarqueeElements>
        <MarqueeElements>
          <Image src="Images/gallery-3.jpeg" alt="gallery" />
        </MarqueeElements>
        <MarqueeElements>
          <Image src="Images/gallery-4.jpeg" alt="gallery" />
        </MarqueeElements>
      </Marquee>
    </Container>
  );
};

export default Gallery;
