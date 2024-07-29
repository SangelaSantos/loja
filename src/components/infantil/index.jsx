import React, { useEffect, useState } from "react";
import { database, ref, onValue, set, update } from "../../firebase";
import { ButtonAdd, ButtonQuantity, DivList } from "./style";
import { MdAddShoppingCart } from "react-icons/md";
import { getAuth } from "firebase/auth";

const InfantilList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [quantities, setQuantities] = useState({});
  const auth = getAuth();
  const user = auth.currentUser;

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
                if (category === "infantil") {
                  productsList.push({ id, ...data[category][id], category });
                }
              }
            }
            setProducts(productsList);
          } else {
            setProducts([]);
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

  const handleAddToCart = (product) => {
    if (!user) {
      alert("Você precisa estar logado para adicionar itens ao carrinho.");
      return;
    }

    const quantity = quantities[product.id] || 1;
    const cartRef = ref(database, `cart/${user.uid}/${product.id}`);

    onValue(
      cartRef,
      (snapshot) => {
        const existingProduct = snapshot.val();
        if (existingProduct) {
          const newQuantity = existingProduct.quantity + quantity;
          update(cartRef, { ...product, quantity: newQuantity });
        } else {
          set(cartRef, { ...product, quantity });
        }
      },
      { onlyOnce: true }
    );

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
    <div style={{ marginLeft: "170px" }}>
      <h3>Seção Masculina</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {products.length === 0 ? (
        <p>Não há produtos masculinos disponíveis.</p>
      ) : (
        <ul
          style={{ display: "flex", flexWrap: "wrap", listStyleType: "none" }}
        >
          {products.map((product) => (
            <li
              key={product.id}
              style={{ marginBottom: "1em", margin: "0 20px 20px 20px" }}
            >
              <DivList>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {product.imageUrl && (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginRight: "1em",
                        marginBottom: "10px"
                      }}
                    />
                  )}
                </div>
                <div>
                  {product.name}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5px"}}>
                    <ButtonQuantity
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      -
                    </ButtonQuantity>
                    {quantities[product.id] || 1}
                    <ButtonQuantity
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      +
                    </ButtonQuantity>
                    <div
                      style={{
                        marginLeft: "5px",
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "22px"
                      }}
                    >
                      R$ {product.price}
                    </div>
                  </div>
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

export default InfantilList;
