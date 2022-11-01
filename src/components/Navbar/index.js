import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinkS, NavLinkE} from './NavbarElements'
import {LINKS} from '../config'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                    <NavLinkS to="about" smooth={true} duration={500} spy={true} offset={0}>About us</NavLinkS>
                </NavItem>
                <NavItem>
                  <NavLinkS to="gameplay" smooth={true} duration={500} spy={true} offset={0}>Gameplay mode</NavLinkS>
                </NavItem>
                <NavItem>
                  <NavLinkS to="tokenomics" smooth={true} duration={500} spy={true} offset={0}>Tokenomics</NavLinkS>
                </NavItem>
                <NavItem>
                  <NavLinkE href={LINKS.UNISWAP}>UniSwap</NavLinkE>
                </NavItem>
                <NavItem>
                  <NavLinkE href={LINKS.CHART}>Chart</NavLinkE>
                </NavItem>
              </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar