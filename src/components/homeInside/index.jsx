import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../../firebase';

const HomeInside = () => {
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
              productsList.push({ id, ...data[category][id] });
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

  return (
    <div style={{ marginLeft: "140px"}}>
      <h2>Product List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.length === 0 ? (
        <p>No products available.</p>
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
                <strong>Category:</strong> {product.category}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomeInside;
