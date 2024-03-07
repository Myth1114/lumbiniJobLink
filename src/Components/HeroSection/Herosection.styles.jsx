import styled, { css } from "styled-components";
import { animateLeft, fadeInOut } from "../GlobalStyles/globalstyles";

export const defaultIcon = css`
  align-self: end;
  border-radius: 1rem;
  padding: 0.8rem;
  animation:${fadeInOut} 2.5s linear;
`;
export const defaultImgContainer = css`
  width: 15rem;
  border-radius: 1rem;
  
`;

export const HeroSection = styled.div`
  margin: 5rem 1rem 5rem 1rem;
  @media (min-width: 800px) {
    margin: 5rem 6rem 5rem 6rem;
  }
`;
export const HeroElements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:1rem;
  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;
export const LeftElement = styled.div`
  //   width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;
export const RightElement = styled.div`
  //   width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 650px) {
    margin-top: 2rem;
  }
`;
export const Moto = styled.h1`
  font-size: 3rem;
  animation:${animateLeft} 2.5s linear;

  @media (min-width:768px){
    font-size:4rem;
  }
`;
export const Description = styled.p`
  color: #717170;
  text-align:justify;
`;
export const ImgContainer = styled.div`
position:relative;
  background-color: #e9e2a3;
  ${defaultImgContainer}
  &:after{
    position:absolute;
    content:"✅ Companies across industries";
    right: -47%;
    top: 7%;
    width:auto;
    background-color:#ffffff;
    padding:.8rem;
    border-radius: .3rem;
    
  }
  
`;
export const ImgContainer2 = styled.div`
  background-color: #8ed1fc;
  ${defaultImgContainer}
`;
export const RightElementContainer = styled.div`
  display: flex;
  justify-content: space-around;
  
`;

export const Icon = styled.div`
  background-color: #fbb4b4;
  ${defaultIcon}
`;
export const Icon2 = styled.div`
  background-color: #f0bbf0;
  ${defaultIcon}
`;
