import styled from 'styled-components'

export const TokenomicsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-top: 50px;
align-items: center;
background: #180925;`

export const TokenomicsHeader = styled.h1`
font-size: 3.5rem;
color: #FFC600;
font-family: 'ArcadeClassic', sans-serif;
margin-bottom: 50px;
text-align: center;

@media screen and (max-width: 480px)
{
    font-size: 3rem;
}`

export const TokenomicsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const TokenomicsBlock = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 60px;


margin-bottom: 50px;
@media screen and (max-width: 1000px)
{
    grid-gap: 10px;
}

@media screen and (max-width: 890px)
{
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

export const Card = styled.div`
text-align: center;
font-weight: bold;
width: 250px;
padding: 60px 0;
color: #000;
background: ${props => props.color};
border: 4px solid ${props => props.color_dark};
&:hover
{
    transform: scale(1.1);
    transition: .4s;
    cursor: pointer;
    
    box-shadow: 0 0 10px ${props => props.color}, 0 0 10px ${props => props.color},  0 0 10px ${props => props.color};
    background: ${props => props.color};
    
}
`

export const TokenomicsTextWrapper = styled.div`
text-align: center;
color: #fff;
width: 60%;
`

export const TextHeader = styled.p`
font-size: 1.2rem;
margin-bottom: 15px;
`

export const Text = styled.p`
font-size: 0.8rem;
margin-bottom: 20px;
`