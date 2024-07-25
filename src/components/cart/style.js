import styled from "styled-components";

export const DivFooter = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-start;
    width: 100vh;
    background-color: white;
    height: 50px;
`;

export const FooterButton = styled.button`
    width: 100px;
    height: 40px;
    font-size: 14px;
    font-weight: 800;
    background-color: #272727;
    border: 1px solid #272727;
    border-radius: 10px; 
    cursor: pointer;
    transition: .2s;
    color: white;
    margin-left: 30px;

    &:hover {
        color: #272727;
        background-color: #FFFFFF;
}
`;
export const DivList = styled.div`
    width: 180px;
    height: 180px;
    background-color: white; 
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(39, 39, 39, 0.5), 0 -4px 8px rgba(39, 39, 39, 0.5), 4px 0 8px rgba(39, 39, 39, 0.5), -4px 0 8px rgba(39, 39, 39, 0.5);
`;
export const ButtonAdd = styled.button`
    padding: 5px 50px;
    margin-top: 5px;
    border-radius: 5px;
    background-color: #272727;
    color: white;
    font-weight: bold;
    &:hover{
        border: 1px solid #272727;
        background-color: white;
        color: #272727;
        font-weight: bold;
    }
`;