import s from "styled-components";

export const ErrorPageStyle = s.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ErrorPage = s.p`
font-family: Roboto;
font-size: 80px;
font-weight: bold;
color: #B51D46;
margin-bottom: 20px;

`;

export const ErrorDescription = s.div`
font-family: Roboto;
font-size: 30px;
font-weight: bold;
font-style: italic;
color: #C1C9CC;
margin-bottom: 60px;
`;
