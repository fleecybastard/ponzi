import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
 height: 80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: absolute;
 top: 0;
 z-index: 1;
 width: 100%;
 @media screen and (max-width: 960px)
 {
     transition: 0.8s all ease;
 }
`

export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 80px;
 z-index: 1;
 width: 100%;
 padding: 0 24px;
 max-width: 1100px;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px)
{
    display: block;
    position: absolute;
    
    top: 0;
    left: 50%;
    transform: translate(-50%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #FFFD33;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin: auto;

@media screen and (max-width: 768px)
{
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinkS = styled(LinkS)`
color : #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1.1rem;
height: 100%;
font-weight: bold;
cursor: pointer;

&:hover
{
    color: #FFD800;
}
@media screen and (max-width: 890px)
{
    padding: 0 0.7rem;
}
`

export const NavLinkE = styled.a`
color : #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1.1rem;
height: 100%;
font-weight: bold;
cursor: pointer;

&:hover
{
    color: #FFD800;
}
@media screen and (max-width: 890px)
{
    padding: 0 0.7rem;
}
`
