import styled from "styled-components";

export const DivList = styled.div`
    width: 200px;
    height: 180px;
    background-color: white; 
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(39, 39, 39, 0.5), 0 -4px 8px rgba(39, 39, 39, 0.5), 4px 0 8px rgba(39, 39, 39, 0.5), -4px 0 8px rgba(39, 39, 39, 0.5);
    border: 1px solid #272727;
`;
export const ButtonAdd = styled.button`
    padding: 5px 30px;
    margin-top: 8px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: #272727;
    color: white;
    font-weight: bold;
    transition: transform 0.2s ease;
    &:hover{
        transform: scale(1.05);
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