import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DivFooter, DivList, FooterButton, ButtonQuantity } from './style';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const aumentarQuantidade = (id) => {
    const updatedCart = cart.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const diminuirQuantidade = (id) => {
    const updatedCart = cart.map(product => {
      if (product.id === id) {
        const newQuantity = product.quantity - 1;
        if (newQuantity > 0) {
          return { ...product, quantity: newQuantity };
        } else {
          return null; // Marca o produto para remoção
        }
      }
      return product;
    }).filter(product => product !== null); // Remove produtos marcados

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (parseFloat(product.price) * product.quantity), 0).toFixed(2);
  };

  const metodoPagamento = () => {
    navigate('/qrcode');
  };

  return (
    <div style={{ marginLeft: "140px" }}>
      <h3>CARRINHO</h3>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul style={{ display: 'flex', listStyleType: 'none', flexWrap: "wrap" }}>
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
                    <div style={{display: "flex", marginTop: "10px"}}>
                      <div style={{fontWeight: "bold"}}>{product.name}</div>
                      <div style={{marginLeft: "10px", color: "red", fontWeight: "bold"}}>R$ {product.price}</div>
                    </div>
                    <ButtonQuantity onClick={() => diminuirQuantidade(product.id)}>-</ButtonQuantity>
                    {product.quantity}
                    <ButtonQuantity onClick={() => aumentarQuantidade(product.id)}>+</ButtonQuantity>
                  </div>
                </DivList>
              </li>
            ))}
          </ul>
          <DivFooter>
            <strong>TOTAL: </strong> R$ {calculateTotal()}<br />
            <FooterButton onClick={metodoPagamento}>Pagar</FooterButton>
          </DivFooter>
        </div>
      )}
    </div>
  );
};

export default Cart;