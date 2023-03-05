import { NavLink } from "react-router-dom";
import s from "styled-components";

export const MenuList = s.ul`
list-style: none;
display: flex;
align-items: center;
justify-content: space-between;
padding-right: 40px;
margin-top: 20px;

`;

export const MenuItem = s(NavLink)`
background-color: #194E48;
width: 220px;
height: 40px;
text-align: center;
padding-top: 10px;
border-radius: 10px;
text-decoration: none;
color: white;
font-weight: 500;
font-size: 20px; 

&.active {
background-color: #FBD686;
color: black;

}

`;
