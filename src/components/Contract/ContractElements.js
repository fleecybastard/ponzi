import styled from 'styled-components'


export const ContractContainer = styled.div`
background: #180925;
padding-bottom: 30px;`

export const ContractHeader = styled.h1`
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

export const ContractWrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`



export const ContractAddress = styled.div`

display: flex;
flex-direction: row;
background: #FFFD33;
padding: 10px 10px;
padding-right: 20px;
column-gap: 20px;
border: 3px solid #9D9C1B;
margin-bottom: 20px;
@media screen and (max-width: 680px)
{
    width: 80%;
    justify-content: flex-end;
    
}`

export const Text = styled.p`
font-size: 1.2rem;
font-weight: bold;
@media screen and (max-width: 680px)
{
    display: none;
}
`

export const CopyButton = styled.button`
background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    font-size: 1.2rem;`

export const ContractDetails = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
@media screen and (max-width: 900px)
{
    flex-direction: column;
}`



export const Cards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;

@media screen and (max-width: 900px)
{
    grid-template-columns: 1fr;
}
`

export const Column1 = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;`

export const Column2 = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;`

export const Card = styled.div`
padding: 40px 20px;
background: #fff;
text-align: center;
color: #000;
font-weight: bold;
border: 4px solid #9A9A9A;
&:hover
{
    transform: scale(1.1);
    transition: .4s;
    cursor: pointer;
    border-color: #fff;
    box-shadow: 0 0 10px #fff, 0 0 10px #fff,  0 0 10px #fff;
    background: ${props => props.color};
    
}

@media screen and (max-width: 900px)
{
    padding: 4rem 6rem;
}`

export const Image = styled.img`
width: 400px;
transform: translateX(-10%);
@media screen and (max-width: 900px)
{
    width: 80%;
    transform: none;
}`




