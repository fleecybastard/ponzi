import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLinkS, SideBarLinkE} from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLinkS to="about" smooth={true} duration={500} spy={true} offset={-80} onClick={toggle}>About us</SideBarLinkS>
                    <SideBarLinkS to="gameplay" smooth={true} duration={500} spy={true} offset={-80} onClick={toggle}>Gameplay mode</SideBarLinkS>
                    <SideBarLinkS to="tokenomics" smooth={true} duration={500} spy={true} offset={-80} onClick={toggle}>Tokenomics</SideBarLinkS>
                    <SideBarLinkE >UniSwap</SideBarLinkE>
                    <SideBarLinkE >Chart</SideBarLinkE>
                </SideBarMenu>
                
            </SideBarWrapper>
        </SidebarContainer>
        </>
  )
}

export default Sidebar