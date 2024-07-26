import React, { useEffect, useState } from "react";
import { database, ref, onValue } from "../../firebase";
import { addToCart } from "../../cartUtils";
import { ButtonAdd, ButtonQuantity, DivList } from "./style";
import { MdAddShoppingCart } from "react-icons/md";

const HomeInside = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState("");
  const [quantities, setQuantities] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = () => {
      const categoryRef = ref(database, "category");
      onValue(
        categoryRef,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const productsList = [];
            for (let category in data) {
              for (let id in data[category]) {
                productsList.push({ id, ...data[category][id] });
              }
            }
            setProducts(productsList);
            setFilteredProducts(productsList); // Initialize filtered products
          } else {
            setProducts([]);
            setFilteredProducts([]);
          }
        },
        (error) => {
          setError("Error fetching products.");
          console.error("Error:", error);
        }
      );
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ marginLeft: "140px" }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Pesquisa 🔍"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ padding: '8px', marginRight: '8px',marginTop: "5px", borderRadius:"10px" }}
        />

      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {filteredProducts.length === 0 ? (
        <p>Não há produtos disponíveis.</p>
      ) : (
        <ul style={{ display: "flex", flexWrap: "wrap", listStyleType: "none" }}>
          {filteredProducts.map((product) => (
            <li key={product.id} style={{ marginBottom: "1em", margin: "0 20px 20px 20px" }}>
              <DivList>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {product.imageUrl && (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "1em" }}
                    />
                  )}
                </div>
                <div>
                  <div style={{ display: "flex", marginTop: "10px" }}>
                    <div style={{ fontWeight: "bold" }}>{product.name}</div>
                    <div style={{ marginLeft: "10px", color: "red", fontWeight: "bold" }}>
                      R$ {product.price}
                    </div>
                  </div>
                  <ButtonQuantity onClick={() => handleDecreaseQuantity(product.id)}>-</ButtonQuantity>
                  {quantities[product.id] || 1}
                  <ButtonQuantity onClick={() => handleIncreaseQuantity(product.id)}>+</ButtonQuantity>
                  <ButtonAdd onClick={() => handleAddToCart(product)}>
                    <MdAddShoppingCart style={{ fontSize: "20px" }} />
                  </ButtonAdd>
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
