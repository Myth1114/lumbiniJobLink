import styled, { keyframes } from "styled-components";

export const fadeInOut = keyframes`
from {
  scale:.6;
}
to {
  scale:1;
}
`;

export const animateLeft = keyframes`
 0%{
  transform:translateX(-250px);
  opacity:0;
 }
 100%{
  
  opacity:1
 }
`;
export const fadeIn=keyframes`
 from {opacity:0;, scale:.8}
 to {opacity:1, scale:1;}
`
export const Button = styled.button`
  position: relative;
  background-color: #35797b;
  color: #fff;
  font-size: 0.9em;
  // margin: 1em;
  padding: 0.9em 1.5em;
  border: none;
  border-radius: 0.8rem;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
export const Button2 = styled(Button)`
  background: #fd5f00;
  color: #fff;
  &:hover {
    background: #fff;
    color: #fd5f00;
    border: 1px solid #fd5f00;
    transition: all 0.3s ease-in-out;
  }
`;
export const Button3 = styled(Button)`
  background: #fd5f00;
  color: #fff;
  border-radius: 3rem;
  padding: 1.2rem 1.5rem;
  &:hover {
    background: transparent;
    color: #fd5f00;
    border: 1px solid #fd5f00;
    transition: all 0.3s ease-in-out;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const PrimaryHeading = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    text-align:center;
    margin:2rem 1rem;
    @media screen and (min-width: 900px) {
      font-size: 4rem;
      margin:2rem 20rem ;
    }
    @media screen and (min-width:1024px){
      margin:2rem 6rem;
    }
}

`;
export const CallButton = styled.a`
  position: relative;
  background-color: #35797b;
  color: #fff;
  font-size: 0.9em;
  // margin: 1em;
  padding: 0.9em 1.5em;
  border: none;
  border-radius: 0.8rem;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
