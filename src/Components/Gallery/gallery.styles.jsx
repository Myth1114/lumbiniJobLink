import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 1rem;
  @media (min-width: 900px) {
    margin: 6rem 1rem;
  }
`;

export const MarqueeElements = styled.div``;

export const Image = styled.img`
  height: 12rem;
  width: 17rem;
  border-radius: 1rem;
  margin: 1rem;
  object-fit: cover;

  @media (min-width: 900px) {
    height: 25rem;
    width: 30rem;
  }
`;
