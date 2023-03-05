import s from "styled-components";

export const Style = s.div`
border: 1px solid blue;
border-radius: 10px;
padding: 10px;

`;

export const TaskTitle = s.p`
font-family: Roboto;
font-size: 40px;
font-weight: bold;
margin-left: 20px;
margin-top: 10px;
margin-bottom: 20px;

`;

export const Task = s.li`
color: #425C81;
font-family: Roboto;
font-size: 55px;
list-style: none;
font-weight: 700;
border: 1px solid #FBD686;
width: 200px;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 13px;
margin-left: 20px;

`;

export const TextBeforeInput = s.div`
font-family: Roboto;
font-size: 30px;
font-style: italic;
margin-left: 25px;
`;
export const TaskInput = s.input`
width: 70px;
height: 70px;
border-line-color: black;
font-size: 40px;
padding: 25px;
border-radius: 50%;
text-align: center;
margin-left: 30px;

&::placeholder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: rgb(140, 140, 140);
}
`;

export const CheckButton = s.button`
width: 170px;
height: 45px;
background-color: rgb(255, 102, 71);
color: white;
border-radius: 5px;
font-family: Roboto;
font-size: 25px;
font-weight: bold;
border: none;
margin-left: 35px;
`;

export const RefreshButton = s.button`
width: 170px;
height: 85px;
background-color: rgb(102, 87, 27);
color: white;
border-radius: 5px;
font-family: Roboto;
font-size: 25px;
font-weight: bold;
border: none;
margin-left: 75px;
`;

export const TaskStyle = s.div`
display: flex;
align-items: center;
justify-content: start;
`;
