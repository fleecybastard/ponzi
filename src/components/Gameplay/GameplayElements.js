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
width: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
`

export const GameplayBlock = styled.div`
width: 100%;

display: flex;
align-items: center;
flex-direction: column;


@media screen and (max-width: 900px)
{
    
    align-items: flex-start;
}


`

export const GameplayDiv1 = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
@media screen and (max-width: 900px)
{
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 50px;
}`

export const GameplayDiv2 = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
@media screen and (max-width: 900px)
{
    flex-direction: column;
    align-items: flex-start;
}`

export const Image1 = styled.div`
background: url(${props => props.image});
background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:center;
height: 400px;
width: 50%;
clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
z-index: 1;
@media screen and (max-width: 900px)
{
    width: 95%;
}
`

export const Image2 = styled.div`
background: url(${props => props.image});
background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:center;
height: 400px;
width: 50%;

margin-left: -140px;
clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);

@media screen and (max-width: 900px)
{
    margin-top: -10px;
    width: 95%;
    align-self: flex-end;
}

`


export const TextWrapper1 = styled.div`

background: #ffffff;
clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
width: 40%;
margin-left: -15%;

display: flex;

flex-direction: column;
justify-content: center;
align-items: flex-end;
color: #000000;

gap: 20px;
z-index: 0;


@media screen and (max-width: 900px)
{
    margin-left: 0;
    margin-top: -10px;
    width: 95%;
    align-self: flex-end;
}
`

export const TextWrapper2 = styled.div`

background: #ffffff;
width: 40%;
clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);

margin-right: -5%;

display: flex;

flex-direction: column;
justify-content: center;
align-items: flex-start;
color: #000000;

gap: 20px;
z-index: 0;
@media screen and (max-width: 900px)
{
    margin-left: 0;
    margin-top: -10px;
    width: 95%;
    align-self: flex-start;
}

`

export const TextInnerWrapper1 = styled.div`
padding-right: 5%;
padding-top: 5%;
padding-bottom: 5%;
text-align: right;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
gap: 20px;`

export const TextInnerWrapper2 = styled.div`

padding-left: 5%;
padding-top: 5%;
padding-bottom: 5%;
text-align: left;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 20px;`



export const TextHeader = styled.h2`

font-weight: bold;
font-size: 16px;
`

export const Text = styled.p`
font-size: 14px;
width: 60%;
`

export const Button = styled.a`
font-weight: bold;
width: 160px;
padding: 15px 20px;
background: #E0DE28;
border: 4px solid #9D9C1B;
text-align: center;
text-decoration: none;
color: inherit;
&:hover {
    cursor: pointer;
    background: #ffffff;
    color: #000000;
    border-color: #E0DE28;
}`
