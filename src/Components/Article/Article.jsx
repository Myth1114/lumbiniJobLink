import React from "react";
import {
  Container,
  Main,
  Heading,
  WrapperLeft,
  WrapperRight,
  Para,
  Contents,
  ContentItems,
  Number,
  Desc,
  Accordian,
} from "./article.styles";
const Article = () => {
  return (
    <Container>
      <Main>
        <WrapperLeft>
          <Heading>
            Revolutionizing Your Recruitment Process for Better Results
          </Heading>
          <Para>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, totam sunt. Odit assumenda eum laboriosam voluptas
            cupiditate illum dignissimos id! Fugiat enim minus sit? Vel soluta
            sint atque hic omnis!
          </Para>
          <Contents>
            <ContentItems>
              <Number> 720 +</Number>
              <Desc>Trusted by company</Desc>
            </ContentItems>
            <ContentItems>
              <Number>250 +</Number>
              <Desc>Recruitment done</Desc>
            </ContentItems>
          </Contents>
        </WrapperLeft>
        <WrapperRight>
          <Accordian>
            <details open>
              <summary> Talent acquisition</summary>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, beatae quibusdam deserunt aperiam itaque vel, eius cupiditate, perferendis magni architecto asperiores provident nihil excepturi quas facilis? Fugiat placeat at maiores!
                </p>
              </div>
            </details>
            <details>
              <summary>People and culture</summary>
              <div class="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque iure libero sit possimus hic, numquam cupiditate quasi corrupti a provident molestiae culpa ratione totam assumenda cum qui sunt eum?</p>
              </div>
            </details>
            <details>
              <summary>Efficient recruitment</summary>
              <div class="content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis consectetur et doloremque nemo consequatur aspernatur quo! Sed totam amet voluptas ratione voluptatum sapiente officiis incidunt earum commodi. Nam, doloribus autem!</p>
              </div>
            </details>
          </Accordian>
        </WrapperRight>
      </Main>
    </Container>
  );
};

export default Article;
