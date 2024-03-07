import styled from "styled-components";

export const Main = styled.div`
  margin: 7rem 1rem;
  @media (min-width: 900px) {
    margin: 12rem 6rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const WrapperLeft = styled.div`
  & > * {
    margin-bottom: 2rem;
  }
  @media (min-width: 900px) {
    flex: 1;
  }
`;

export const WrapperRight = styled.div`
  @media (min-width: 900px) {
    flex: 1;
  }
`;

export const Para = styled.p`
  color: #717170;
`;

export const List = styled.div``;

export const Box = styled.div`
  position: relative;
  height: 25rem;
  & :after {
    position: absolute;
    content: "✅ Applicant Review";
    right: 0;
    top: 20%;
    width: auto;
    background-color: #ffffff;
    padding: 0.8rem;
    border-radius: 0.3rem;
  }
`;

export const Square = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #8ed1fc;
  width: 24rem;
  height: 21rem;
  z-index: -1;
  border-radius: 1rem;
  @media (min-width: 900px) {
    width: 32rem;
  }
`;
export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 22rem;
  height: 25rem;
  object-fit: cover;
  margin-top: -2rem;
  @media (min-width: 900px) {
    width: 32rem;
  }
`;
export const Ul = styled.ul`
  list-style-type: "✅";
`;

export const Li = styled.li`
  font-size: 1.4rem;
  margin: 0.8rem 1.5rem;
  padding-left: 0.5rem;
`;
