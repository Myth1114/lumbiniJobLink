import styled from "styled-components";

export const TeamContainer = styled.div`
    background-color:#fff4ce;
    @media (min-width: 800px){
        padding:2rem 0;
    }
`


export const Container = styled.div`

  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
    @media (min-width: 800px){
        grid-template-columns: 1fr 1fr;
        margin:6rem;
  }
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 800px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Column = styled.div`
  display: grid;
  align-items: center;

  .Circle{
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  border-radius: 50%;
  width: 130px;
  height: 130px;
//   z-index: -1;
  }
  &:nth-child(1) .Circle {
    background-color: #00d084;
  }
  &:nth-child(2) .Circle {
    background-color: #9b51e0;
  }
  &:nth-child(3) .Circle {
    background-color: #8ed1fc;
  }
  &:nth-child(4) .Circle {
    background-color: #f78da7;
  }
   
  @media (min-width: 800px) {
    gap: 1rem;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;



export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: -5px;
`;

export const RightContent = styled.div`
margin:1rem;
`;

export const Contents = styled.div`

display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  & > * {
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  @media (min-width:800px){
    font-size:3.5rem;
  }
`;

export const Para = styled.p`
  color: #717170;
  text-align: center;
  @media (min-width:800px){
    margin: 1rem 5rem;
  }
`;
