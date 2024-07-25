// src/components/AddToCartButton.jsx
import React from 'react';
import { database, ref, push } from '../../firebase'; // Ajuste o caminho conforme necessário
import { useAuth } from '../../pages/AuthContext'; // Ajuste o caminho conforme necessário

const AddToCartButton = ({ product }) => {
  const { currentUser } = useAuth();

  const handleAddToCart = () => {
    if (currentUser) {
      const cartRef = ref(database, `carts/${currentUser.uid}`);
      push(cartRef, product);
    } else {
      // Handle the case where the user is not authenticated
      alert("You need to log in to add items to your cart.");
    }
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCartButton;
