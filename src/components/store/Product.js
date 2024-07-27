import React, { useState } from 'react';
import styled from 'styled-components';

const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 120px;
  height: 100%;
  background-color: #272727;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
  z-index: 1000;
`;

const MainContent = styled.div`
  margin-left: 120px; /* Adiciona uma margem esquerda para evitar sobreposição com a barra lateral fixa */
`;

const ProductsContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 150px 150px 120px;
  gap: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 2px solid #ddd;
`;

const ProductItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 150px 150px 120px;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ProductName = styled.div`
  margin-left: 10px;
`;

const ProductPrice = styled.div`
  text-align: center;
`;

const ButtonAddToCart = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const QuantityDisplay = styled.div`
  width: 40px;
  text-align: center;
  line-height: 30px;
`;


const TotalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 120px; /* mesma margem que MainContent */
  width: calc(100% - 120px); /* ajustar para que ocupe todo o espaço à direita da sidebar */
  background-color: #f4f4f4;
  padding: 20px;
  border-top: 2px solid #ddd;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const Products = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const products = [
    { id: 1, name: 'Produto 1', price: 50.00, imageUrl: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Produto 2', price: 75.00, imageUrl: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Produto 3', price: 100.00, imageUrl: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Produto 4', price: 125.00, imageUrl: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Produto 4', price: 125.00, imageUrl: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Produto 4', price: 125.00, imageUrl: 'https://via.placeholder.com/100' },
  ];

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (quantities[product.id] || 1) }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: quantities[product.id] || 1 }];
    });
  };

  const handleQuantityChange = (productId, change) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) + change, 1)
    }));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <SideBar>
        Menu Lateral
      </SideBar>
      <MainContent>
        <ProductsContainer>
          <Header>
            <div>Imagem</div>
            <div>Produto</div>
            <div>Preço</div>
            <div>Quantidade</div>
            <div>Adicionar</div>
          </Header>
          {products.map(product => (
            <ProductItem key={product.id}>
              <ProductImage src={product.imageUrl} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
              <QuantityContainer>
                <QuantityButton onClick={() => handleQuantityChange(product.id, -1)}>-</QuantityButton>
                <QuantityDisplay>{quantities[product.id] || 1}</QuantityDisplay>
                <QuantityButton onClick={() => handleQuantityChange(product.id, 1)}>+</QuantityButton>
              </QuantityContainer>
              <ButtonAddToCart onClick={() => addToCart(product)}>Adicionar</ButtonAddToCart>
            </ProductItem>
          ))}
        </ProductsContainer>
        <TotalContainer>
          <div>Total: R$ {getTotalPrice()}</div>
        </TotalContainer>
      </MainContent>
    </div>
  );
};

export default Products;
