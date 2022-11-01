import styled from 'styled-components'

export const GameplayContainer = styled.div`
background: #180925;
`

export const GameplayHeader = styled.h1`
font-size: 3.5rem;
color: #FFC600;
font-family: 'ArcadeClassic', sans-serif;
padding-top: 50px;
margin-bottom: 50px;
text-align: center;

@media screen and (max-width: 480px)
{
    font-size: 3rem;
}`

export const GameplayContent = styled.div`
width: 1280px;
max-width: 95%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
justify-content: space-around;
@media screen and (max-width: 1180px)
{
    justify-content: center;
    text-align: center;
}

`

export const GameplayBlock = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 890px)
{
    width: 100%;
    margin-bottom: 20px;
}

`

export const Image = styled.img`
height: auto;
width: 400px;
max-width: 100%;
margin-bottom: 20px;
@media screen and (max-width: 650px)
{
    margin-bottom: 35px;
}`

export const TextWrapper = styled.div`
width: 400px;
max-width: 95%;
text-align: left;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #ffffff;
clear: both;
gap: 20px;`

export const TextHeader = styled.h2`
color: #FFC600;
`

export const Text = styled.p`
`

export const Button = styled.a`
font-weight: bold;
width: 160px;
padding: 15px 20px;
background: #E0DE28;
text-decoration: none;
color: inherit;
border: 4px solid #fff;
text-align: center;
&:hover {
    cursor: pointer;
    background: #ffffff;
    color: #000000;
    border-color: #E0DE28;
}`
