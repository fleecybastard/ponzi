import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';


export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #180925;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-400%')};
`


export const CloseIcon = styled(FaTimes)`
color: #FFFD33;`

export const Icon = styled.div`
position: absolute;
top: 0;
left: 50%;
transform: translate(-50%, 60%);
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;`

export const SideBarWrapper = styled.div`

`

export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 78px);
text-align: center;

@media screen and (max-width: 480px)
{
    grid-template-rows: repeat(5, 65px);
}`

export const SideBarLinkS = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {
    color: #FFD800;;
    transition: 0.2 ease-in-out;
}
`

export const SideBarLinkE = styled.a`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {
    color: #FFD800;;
    transition: 0.2 ease-in-out;
}
`
