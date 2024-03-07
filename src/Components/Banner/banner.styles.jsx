import styled from "styled-components";
import { fadeIn } from "../GlobalStyles/globalstyles";

export const Para = styled.p`
  margin: 0 1rem;
  color: #717170;
  text-align: center;
  animation: ${fadeIn} linear;
  animation-timeline: view();
  @media (min-width: 900px) {
    margin: 0 20rem;
  }
  @media (min-width: 1024px) {
    margin: 0 6rem;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: stretch;
  gap: 1rem;
  margin: 1rem;
  div:nth-child(1) {
    background: #f4ffd6;
  }
  div:nth-child(2) {
    background: #f5e1f1;
  }
  @media (min-width: 900px) {
    margin: 6rem;
  }
`;
export const SectionElements = styled.div`
  background-color: #d6f5fa;
  padding: 1rem;
  border-radius: 1rem;
  > * {
    margin-top: 1rem;
  }

  @media (min-width: 900px) {
    padding: 3rem;
  }
`;
export const SectionTitle = styled.h1`
  font-size: 1.8rem;
  white-space: nowrap;
  @media (min-width: 768px) {
    font-size: 2rem;
    white-space: wrap;
  }
`;
export const SectionText = styled.p`
  text-align: justify;
  color: #717170;
`;
export const SectionIcon = styled.div`
  text-align: right;
`;
export const Image = styled.img`
  height: 6rem;
  width: 6rem;
`;
