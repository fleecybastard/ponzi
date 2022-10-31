import styled from "styled-components"
import {Link} from 'react-router-dom'

export const PrivacyBackContainer = styled.div`
background: #180925;
width: 100%;
height: 100px;
position: relative;`

export const Button = styled(Link)`
color: #000000;
background: #E0DE28;
text-decoration: none;
padding: 20px 10px;
font-weight: 700;
border: 4px solid #fff;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
&:hover {
  background: #fff;
  border-color: #E0DE28;
}
`