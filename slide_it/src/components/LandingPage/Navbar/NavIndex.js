import React, {useEffect, useState} from 'react';
import{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    // const [scrollNav, setScrollNav] = useState(true)
    // const changeNav = ()=> {
    //     if(window.scrollY >= 80) setScrollNav(false)
    //     else setScrollNav(false)
    // }
    // useEffect (() => {
    //     window.addEventListener('scroll', changeNav)
    // }, [])
    return (
       <>
        <Nav >
            <NavbarContainer>
                <NavLogo to='/'>
                    Slide It!
                </NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars/>
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to = "about"
                       smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}>About</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to = "discover">Discover</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to = "services">Services</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to = "signin">Sign In</NavLinks>
                   </NavItem>
               </NavMenu>

               <NavBtn>
                   <NavBtnLink to = '/signup'> Sign Up</NavBtnLink>
               </NavBtn>
            </NavbarContainer>
        </Nav>
       </>
    );
};

export default Navbar;
