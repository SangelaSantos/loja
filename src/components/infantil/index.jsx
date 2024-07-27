import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../../firebase';
import { addToCart } from '../../cartUtils';
import { ButtonAdd, ButtonQuantity, DivList } from './style';
import { MdAddShoppingCart } from "react-icons/md";

const InfantilList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = () => {
      const categoryRef = ref(database, 'category');
      onValue(categoryRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const productsList = [];
          for (let category in data) {
            for (let id in data[category]) {
              if (category === 'infantil') {
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
    const quantity = quantities[product.id] || 1;
    addToCart({ ...product, quantity });
    alert(`${quantity} ${product.name} foi adicionado ao carrinho!`);
  };

  const handleIncreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };

  const handleDecreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1, 1),
    }));
  };

  return (
    <div style={{ marginLeft: "170px"}}>
      <h3>Seção Infantil</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.length === 0 ? (
        <p>Não há produtos infantis disponíveis.</p>
      ) : (
        <ul style={{display: "flex", flexWrap: "wrap",listStyleType: 'none'}}>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: '1em', margin: "0 20px 20px 20px" }}>
              <DivList>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {product.imageUrl && (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '1em'}}
                    />
                  )}
                </div>
                <div>
                  <div style={{display: "flex"}}>
                  <div style={{fontWeight: "bold"}}>{product.name}</div>
                  <div style={{marginLeft: "10px", color: "red", fontWeight: "bold"}}>R$ {product.price}</div>
                  </div>
                      <ButtonQuantity onClick={() => handleDecreaseQuantity(product.id)}>-</ButtonQuantity>
                      {quantities[product.id] || 1}
                      <ButtonQuantity onClick={() => handleIncreaseQuantity(product.id)}>+</ButtonQuantity>
                  <ButtonAdd onClick={() => handleAddToCart(product)}><MdAddShoppingCart style={{fontSize: "20px"}}/></ButtonAdd>
                </div>
              </DivList>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfantilList;
