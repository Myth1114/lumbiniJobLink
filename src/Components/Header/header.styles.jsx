import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../GlobalStyles/globalstyles'

export const Nav = styled.nav`
  background: #ffffff;
  // height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  ${Container}
`

export const NavLogo = styled(Link)`
  color: #fff;
  // justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`

export const NavIcon = styled.div`
  //   margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 750px) {
    display: block;
    // position: absolute;
    // top: 0;
    // right: 0;
    // transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #ffffff;
  }
`

export const NavItem = styled.li`
  //   height: 60px;
  border-bottom: 2px solid transparent;
  // &:hover {
  //   border-bottom: 2px solid #fd5f00;
  // }
  @media screen and (max-width: 960px) {
    width: 100%;
    // &:hover {
    //   border: none;
    // }
  }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`

export const NavLinks = styled(Link)`
  color: #00000;
  font-size: 1rem;
  font-weight:700;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  white-space: nowrap;
  @media screen and (max-width: 960px) {
    text-align: center;
    // padding: 2rem;
    // width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // &:hover {
    //   color: #4b59f7;
    //   transition: all 0.3s ease;
    // }
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  // padding: 8px 16px;
  border: none;
  outline: none;
`
