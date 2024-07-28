import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProductsContainer,
  MainContent,
  Header,
  ProductImage,
  ProductItem,
  ProductName,
  ProductPrice,
  QuantityButton,
  QuantityContainer,
  QuantityDisplay,
  ButtonAddToCart,
  TotalContainer,
  ButtonPagamento,
} from "./style";

const Cart = () => {
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

  const removerProduto = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
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
      <MainContent>
        {cart.length === 0 ? (
          <p
            style={{
              position: "absolute",
              top: "50%",
              right: "50%",
              transform: "translate(50%, -50%)",
            }}
          >
            Seu carrinho está vazio.
          </p>
        ) : (
          <div>
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
                      <QuantityButton
                        onClick={() => diminuirQuantidade(product.id)}
                      >
                        -
                      </QuantityButton>
                      <QuantityDisplay>{product.quantity}</QuantityDisplay>
                      <QuantityButton
                        onClick={() => aumentarQuantidade(product.id)}
                      >
                        +
                      </QuantityButton>
                    </QuantityContainer>
                    <ButtonAddToCart onClick={() => removerProduto(product.id)}>
                      REMOVER
                    </ButtonAddToCart>
                  </ProductItem>
                ))}
              </ul>
            </ProductsContainer>

            <TotalContainer>
              <div style={{ padding: "8px", fontWeight: "bold" }}>
                Total:{" "}
                <strong style={{ color: "red" }}>R$ {calculateTotal()}</strong>
              </div>
              <ButtonPagamento onClick={metodoPagamento}>
                FINALIZAR COMPRA
              </ButtonPagamento>
            </TotalContainer>
          </div>
        )}
      </MainContent>
    </div>
  );
};

export default Cart;