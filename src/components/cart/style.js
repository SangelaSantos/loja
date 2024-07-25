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