import React from "react";
import { Heading } from "../Article/article.styles";
import {
  Main,
  Container,
  WrapperLeft,
  WrapperRight,
  Ul,
  Li,
  Para,
  List,
  Box,
  Square,
  Image,
} from "./articelSecond.styles";

const ArticleSecond = () => {
  return (
    <Main>
      <Container>
        <WrapperLeft>
          <Heading>Innovative Solutions for Your HR Needs</Heading>
          <Para>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            pariatur temporibus iste fugiat cum dignissimos ipsam necessitatibus
            molestias similique, maxime sequi atque magni nemo doloremque quis
            aperiam, id assumenda praesentium.
          </Para>
          <List>
            <Ul>
              <Li>Helping companies find and retain top talent</Li>
              <Li>Team of HR and recruitment experts</Li>
              <Li>Comprehensive and personalized approach</Li>
            </Ul>
          </List>
        </WrapperLeft>
        <WrapperRight>
          <Box>
            <Square></Square>
            <Image src="Images/image-1.png" alt="team" />
          </Box>
        </WrapperRight>
      </Container>
    </Main>
  );
};

export default ArticleSecond;
