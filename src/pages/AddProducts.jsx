import React, { useState } from 'react';
import { database, storage, ref, push } from '../firebase'; // Importar apenas o necessário
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('feminino');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !price) {
      setError('Name and price are required.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      let imageUrl = '';

      if (image) {
        const imageRef = storageRef(storage, `images/${Date.now()}_${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      // Adicionar detalhes do produto ao Realtime Database
      await push(ref(database, `category/${category}`), {
        name,
        price,
        imageUrl
      });

      // Limpar formulário
      setName('');
      setPrice('');
      setCategory('feminino');
      setImage(null);
    } catch (error) {
      setError(`Error: ${error.message}`);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
          <option value="infantil">Infantil</option>
        </select>
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Product'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddProduct;
