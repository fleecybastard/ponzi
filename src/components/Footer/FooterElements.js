import { Link } from "react-router-dom"
import styled from "styled-components"
import gold from '../../images/gold.png'

export const FooterContainer = styled.div`

background: #180925;
color: #ffffff;
display: flex;
flex-direction: column;


&::after {
    content: '';
    width: 12rem;
    height: 10rem;
    margin-top: 1.1rem;
    right: -5%;
    background:  url(${gold});
    position: absolute;
    background-repeat:no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
}
&::before {
    content: '';
    width: 12rem;
    height: 10rem;
    margin-top: 1.1rem;
    left: -5%;
    background:  url(${gold});
    position: absolute;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
}
@media screen and (max-width: 935px)
{
    &::before {
        content: none;
    }
    &::after {
        content: none;
    }
}

`

export const FooterWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-left: 20%;
margin-right: 20%;
padding-bottom: 20px;

@media screen and (max-width: 900px)
{
    flex-direction: column;
    justify-content: center;
    gap: 40px;
}`

export const RulesWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
@media screen and (max-width: 900px)
{
    text-align: center;
}`

export const RulesHeader = styled.h2`
font-size: 21px;
font-weight: 700;
`

export const Rules = styled.p``

export const PrivacyPolicy = styled(Link)`
text-decoration: none;
color: #ffffff;
font-size: 21px;
font-weight: 700;
&:hover {
    color: #FFC600;
}
`

export const Rights = styled.p`
text-align: center;
font-size: 21px;
font-weight: 700;
`

export const LinksWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;`

export const Links = styled.div`
display: flex;
flex-direction: row;
gap: 20px;`

export const Email = styled.p`
font-size: 15px;
font-weight: 400;
@media screen and (max-width: 900px)
{
    display: none;
}
`

export const GoldImage = styled.img`
margin: 0 auto;
width: 200px;
height: auto;
display: none;
@media screen and (max-width: 900px)
{
    display: block;
}`