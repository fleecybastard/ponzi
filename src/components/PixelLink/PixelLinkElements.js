import styled from 'styled-components'


export const Link = styled.a`
width: 45px;
height: 45px;
border-radius: 50%;
background-color: ${props => props.color};
display: flex;
justify-content: center;
align-items: center;
&:hover {
    transform: scale(1.1);
    transition: .4s;
}
`

export const Image = styled.img`
margin: auto;
height: 35px;
width: 35px;
border-radius: 50%;`