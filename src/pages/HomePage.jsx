import React from 'react';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const navigateToProducts = () => {
        navigate('/cart');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={navigateToProducts}>Ver Produtos</button>
    </div>
  );
}

export default HomePage;
