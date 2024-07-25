// src/components/Cart.jsx
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

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

  return (
    <div style={{ marginTop: "60px" }}>
      <h3>Shopping Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id} style={{ marginBottom: '1em' }}>
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '1em' }}
                  />
                )}
                <div>
                  <strong>Name:</strong> {product.name}<br />
                  <strong>Price:</strong> ${product.price}<br />
                  <strong>Category:</strong> {product.category}<br />
                  <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '20px' }}>
            <strong>Total Price:</strong> ${calculateTotal()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
