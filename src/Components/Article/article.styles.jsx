import styled from 'styled-components'

export const Container=styled.div`
margin:1rem;
@media (min-width:900px){
    margin:6rem;
}
`
export const Main=styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
gap:1rem;
padding:5rem 0;
@media (min-width:900px) {
    display:flex;
    justify-content:center;
}
`
export const Heading=styled.h1`
font-size:3.5rem;
`
export const WrapperLeft=styled.div`
& > * {
    margin-bottom:1.5rem;
}
@media (min-width:900px) {
    flex:1;
`

export const WrapperRight=styled.div`
@media (min-width:900px) {
    flex:1;

`

export const Para= styled.p`
color:#717170;
`

export const Contents=styled.div`
display:flex;
gap:2rem;
margin-top:1rem;
`

export const ContentItems=styled.div`
display: flex;
flex-direction: column;
`

export const Number=styled.span`
font-size:3rem;
color:#35797b;
font-weight:bold;
`

export const Desc=styled.span`
color:#717170;
`

export const Accordian=styled.div`
width: 100%;
margin: 0 auto;
`


