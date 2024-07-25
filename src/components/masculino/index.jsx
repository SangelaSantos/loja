// src/components/MascList.jsx
import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../../firebase';
import { addToCart } from '../../cartUtils';

const MascList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = () => {
      const categoryRef = ref(database, 'category');
      onValue(categoryRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const productsList = [];
          for (let category in data) {
            for (let id in data[category]) {
              if (category === 'masculino') {
                productsList.push({ id, ...data[category][id], category });
              }
            }
          }
          setProducts(productsList);
        } else {
          setProducts([]);
        }
      }, (error) => {
        setError('Error fetching products.');
        console.error('Error:', error);
      });
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <h3>Masculino</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.length === 0 ? (
        <p>No male products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
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
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MascList;
