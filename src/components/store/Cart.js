import React from 'react';
import styled from 'styled-components';

// Estilos para o carrinho
const CartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
`;

const CartHeader = styled.h2`
  margin-bottom: 20px;
`;

const CartItemsContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Permite rolar horizontalmente se necessário */
  gap: 20px; /* Espaço entre os itens */
`;

const CartItem = styled.div`
  flex: 0 0 auto;
  width: 300px; /* Define a largura dos itens do carrinho */
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CartItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CartTotal = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
`;

const Cart = ({ cartItems }) => {
  // Calcula o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContainer>
      <CartHeader>Carrinho de Compras</CartHeader>
      <CartItemsContainer>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <CartItemDetails>
              <div>{item.name}</div>
              <div>R$ {item.price.toFixed(2)}</div>
            </CartItemDetails>
            <CartItemDetails>
              <div>Quantidade: {item.quantity}</div>
              <div>Total: R$ {(item.price * item.quantity).toFixed(2)}</div>
            </CartItemDetails>
          </CartItem>
        ))}
      </CartItemsContainer>
      <CartTotal>Total do Carrinho: R$ {calculateTotal()}</CartTotal>
    </CartContainer>
  );
};

export default Cart;
