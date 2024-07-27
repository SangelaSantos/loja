import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContainer, SideBar, MainContent, Header, ProductImage, ProductItem, ProductName, ProductPrice, QuantityButton, QuantityContainer, QuantityDisplay, ButtonAddToCart, TotalContainer } from './Style';

const Products = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || []; // Obtém o carrinho salvo no localStorage e o converte de JSON para um array
    setCart(savedCart);
  }, []); // O array vazio [] garante que o useEffect seja executado apenas uma vez, quando o componente for montado

  const aumentarQuantidade = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const diminuirQuantidade = (id) => {
    const updatedCart = cart
      .map((product) => {
        if (product.id === id) {
          const newQuantity = product.quantity - 1;
          if (newQuantity > 0) {
            return { ...product, quantity: newQuantity };
          } else {
            return null; // Marca o produto para remoção
          }
        }
        return product;
      })
      .filter((product) => product !== null); // Remove produtos marcados

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart
      .reduce(
        (total, product) =>
          total + parseFloat(product.price) * product.quantity,
        0
      )
      .toFixed(2);
  };

  const metodoPagamento = () => {
    navigate("/qrcode");
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
          <ul>
          {cart.map((product) => (
            <ProductItem key={product.id}>
              <ProductImage src={product.imageUrl} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>R$ {product.price}</ProductPrice>
              <QuantityContainer>
                <QuantityButton onClick={() => diminuirQuantidade(product.id)}>-</QuantityButton>
                <QuantityDisplay>{product.quantity}</QuantityDisplay>
                <QuantityButton onClick={() => aumentarQuantidade(product.id)}>+</QuantityButton>
              </QuantityContainer>
              <ButtonAddToCart>REMOVER</ButtonAddToCart>
            </ProductItem>
          ))}
          </ul>
        </ProductsContainer>
        <TotalContainer>
          <div>Total: R$ {calculateTotal()}</div>
          <button onClick={metodoPagamento}>PAGAR</button>
        </TotalContainer>
      </MainContent>
    </div>
  );
};

export default Products;
