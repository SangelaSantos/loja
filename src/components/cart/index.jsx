import React, { useEffect, useState } from 'react';
import { database, ref, onValue, update } from '../../firebase';
import { useNavigate } from 'react-router-dom';
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
import { getAuth } from "firebase/auth";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      setCart([]);
      return;
    }

    const fetchCart = () => {
      const cartRef = ref(database, `cart/${user.uid}`);
      onValue(cartRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const cartList = Object.values(data);
          setCart(cartList);
        } else {
          setCart([]);
        }
      });
    };

    fetchCart();
  }, [user]);

  const aumentarQuantidade = (id) => {
    const updatedCart = cart.map(product => {
      if (product.id === id) {
        const newQuantity = product.quantity + 1;
        update(ref(database, `cart/${user.uid}/${id}`), { ...product, quantity: newQuantity });
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const diminuirQuantidade = (id) => {
    const updatedCart = cart.map(product => {
      if (product.id === id) {
        const newQuantity = product.quantity - 1;
        if (newQuantity > 0) {
          update(ref(database, `cart/${user.uid}/${id}`), { ...product, quantity: newQuantity });
          return { ...product, quantity: newQuantity };
        } else {
          return null; // Marca o produto para remoção
        }
      }
      return product;
    }).filter(product => product !== null); // Remove produtos marcados

    setCart(updatedCart);
  };

  const removerProduto = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (parseFloat(product.price) * product.quantity), 0).toFixed(2);
  };

  const metodoPagamento = () => {
    navigate('/qrcode');
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
                <div></div>
                <div>Produto</div>
                <div>Preço</div>
                <div>Quantidade</div>
                <div></div>
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
