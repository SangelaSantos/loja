import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigate = () => {
  const navigate = useNavigate();

  const voltarInicio = () => {
    navigate('/');
  };

  return (
    <div style={{ marginLeft: "140px" }}>
      <button onClick={voltarInicio}>SAIR</button>
    </div>
  );
}

export default Navigate;
