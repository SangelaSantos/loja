import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../../firebase';
import { DivList, ButtonAdd } from './style';
import { addToCart } from '../../cartUtils';

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
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };
  return (
    <div style={{ marginLeft: "140px"}}>
      <h2>Product List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul style={{display: "flex", listStyleType: 'none', flexWrap: "wrap"}}>
          {products.map((product) => (
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
                  <strong>Item: </strong>{product.name}<br />
                  <strong>Valor: </strong> ${product.price}<br />
                  <ButtonAdd onClick={() => handleAddToCart(product)}>ADICIONAR</ButtonAdd>
                </div>
              </DivList>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomeInside;
