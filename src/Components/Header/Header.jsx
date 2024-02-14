import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
// import { IconContext } from 'react-icons/lib'

import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo
} from "../Header/header.styles";
import {CallButton } from "../GlobalStyles/globalstyles";
// import { Button2 } from '../../GlobalStyles/globalstyles'
function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Nav>
        <NavbarContainer>
          
          <NavLogo to='/' onClick={closeMobileMenu}>
              <img src='/Images/logo.png' alt="Logo" height='30px'></img>
            </NavLogo>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/aboutus" onClick={closeMobileMenu}>
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Courses" onClick={closeMobileMenu}>
                Courses
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/teachers" onClick={closeMobileMenu}>
                Teachers
              </NavLinks>
            </NavItem>
           
            {button ? (
              <NavItem>
                <NavLinks to="/contact" onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>
            ) : null}
             <NavItem>
              <NavLinks>
                <CallButton href="tel:6177787312">Call Us</CallButton>
              </NavLinks>
            </NavItem>
            {/* <NavItemBtn>
              {button ? (
                <NavBtnLink to='/sign-up'>
                  <Button2 primary>SIGN UP</Button2>
                </NavBtnLink>
              ) : (
                <NavBtnLink to='/sign-up'>
                  <Button2 onClick={closeMobileMenu} fontBig primary>
                    SIGN UP
                  </Button2>
                </NavBtnLink>
              )}
            </NavItemBtn> */}
          </NavMenu>
          <MobileIcon onClick={handleClick}>
            {click ? (
              <ClearIcon style={{ color: "#00000" }} />
            ) : (
              <MenuIcon style={{ color: "#00000" }} />
            )}
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Header;
