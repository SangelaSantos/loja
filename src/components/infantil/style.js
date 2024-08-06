import styled from "styled-components";

export const DivList = styled.div`
    width: 200px;
    height: 210px;
    background-color: #F4F4F4; 
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(39, 39, 39, 0.3), 0 -4px 8px rgba(39, 39, 39, 0.3), 4px 0 8px rgba(39, 39, 39, 0.3), -4px 0 8px rgba(39, 39, 39, 0.3);
`;
export const ButtonAdd = styled.button`
    padding: 5px 80px;
    margin-top: 8px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: white;
    color: black;
    font-weight: bold;
    border: 1px solid #272727;
    &:hover{
        background-color: black;
        color: white;
    }

`;
export const ButtonQuantity = styled.button`
    padding: 5px 10px;
    margin-top: 8px;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 5px;
    background-color: #FFFFFF;
    color: #272727;
    font-weight: bold;
    border: 1px solid #272727;
    &:hover{
        background-color: #272727;
        color: #FFFFFF;
        font-weight: bold;
    }
`;