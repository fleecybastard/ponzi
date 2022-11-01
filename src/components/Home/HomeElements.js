import styled from 'styled-components'
import image from '../../images/home.png'

export const HomeContainer = styled.div`
background: #180925;
display: flex;
justify-content: center;
position: relative;
align-items: flex-start;
background-image: url(${image});
background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:center;
padding: 0 30px;
height: 100vh;
z-index: 0;
`

export const HomeContent = styled.div`

position: absolute;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding-top: 100px;
`

export const Links= styled.div`
position: absolute;
top: 75%;
left: 5%;
transform: translateY(-50%);
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
gap: 1rem;

@media screen and (max-width: 900px)
{
    display: none;
}

`

export const Ponzi = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

export const Logo = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;


`

export const Letter = styled.img`

width: 15%;
height: auto;
/* transform: translateY(-15%); */
@media screen and (max-width: 900px)
{
    width: 20%;
}
`

export const PlayButton = styled.a`
width: 160px;
padding: 15px 20px;
font-weight: bold;
background: #E0DE28;
border: 4px solid #fff;
text-align: center;
&:hover {
    cursor: pointer;
    background: #ffffff;
    border-color: #E0DE28;
}
`