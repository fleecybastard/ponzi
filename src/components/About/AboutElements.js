import styled from 'styled-components'

export const AboutContainer = styled.div`
background: #180925;`

export const AboutHeader = styled.h1`
font-size: 3.5rem;
color: #FFC600;
font-family: 'ArcadeClassic', sans-serif;
padding-top: 50px;
margin-bottom: 50px;
text-align: center;

@media screen and (max-width: 480px)
{
    font-size: 3rem;
}
`

export const AboutWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 50px;
@media screen and (max-width: 1180px)
{
    
    height: auto;
    padding: 30px 0px;
    
    
}
`

export const AboutContent = styled.div`
width: 1280px;
max-width: 95%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
justify-content: space-evenly;

@media screen and (max-width: 1180px)
{
    justify-content: center;
    text-align: center;
}`

export const AboutBlock = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 890px)
{
    width: 100%;
    margin-bottom: 20px;
}`

export const Image = styled.img`
height: auto;
width: 300px;
max-width: 100%;
margin-bottom: 20px;
@media screen and (max-width: 650px)
{
    margin-bottom: 35px;
}`

export const TextWrapper = styled.div`
width: 300px;

text-align: left;
display: flex;
flex-direction: column;
justify-content: center;

`

export const TextHeader =styled.h2`
color: #FFC600;
`

export const Text = styled.p`
color: #fff;`