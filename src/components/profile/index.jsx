import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ButtonSair = styled.button`
    background-color: #272727;
    padding: 10px 50px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    transition: box-shadow 0.5s ease-in-out;
    &:hover{
      background-color: white;
      color: #272727;
      border: 1px solid #272727;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    }
`;
const Navigate = () => {
  const navigate = useNavigate();

  const voltarInicio = () => {
    navigate('/');
  };

  return (
    <div style={{
      position: "absolute",
      top: "50%",
      right: "50%",
      transform: "translate(50%, -50%)", fontSize: "30px"
    }}>
      <ButtonSair onClick={voltarInicio}>SAIR</ButtonSair>
    </div>
  );
}

export default Navigate;
