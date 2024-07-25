// src/components/Cart.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonAdd, DivFooter, DivList, FooterButton } from './style';
const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(product => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2);
  };

  const handlePayment = () => {
    navigate('/qrcode')
  };

  return (
    <div style={{ marginLeft: "140px" }}>
      <h3>Shopping Cart</h3>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul style={{display: 'flex', listStyleType: 'none', flexWrap: "wrap"}}>
            {cart.map((product) => (
              <li key={product.id} style={{ marginBottom: '1em', margin: "0 20px 20px 20px" }}>
                <DivList>
                  {product.imageUrl && (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '1em' }}
                    />
                  )}
                  <div>
                    <strong>Item: </strong>{product.name}<br />
                    <strong>Valor: </strong> ${product.price}<br />
                    <ButtonAdd onClick={() => handleRemoveFromCart(product.id)}>Remove</ButtonAdd>
                  </div>
                </DivList>
              </li>
            ))}
          </ul>
          <DivFooter>
            <strong>Total Price:</strong> R$ {calculateTotal()}<br />
            <FooterButton onClick={handlePayment}>Pagar</FooterButton>
          </DivFooter>
          
        </div>
      )}
    </div>
  );
};

export default Cart;