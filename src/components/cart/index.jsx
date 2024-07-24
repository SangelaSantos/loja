import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const user = getAuth().currentUser;

      if (user) {
        const q = query(collection(db, 'products'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const userProducts = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setProducts(userProducts);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Seus Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
