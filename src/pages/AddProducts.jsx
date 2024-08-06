import React, { useState } from "react";
import { database, storage, ref, push } from "../firebase";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const AddProduto = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("feminino");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addImagem = (e) => {
    if (e.target.files[0]) {
      // Verifica se há pelo menos um arquivo selecionado
      setImage(e.target.files[0]);
    }
  };

  const enviarDados = async (e) => {
    e.preventDefault();

    if (!name || !price) {
      setError("Nome e preço são obrigatórios.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let imageUrl = "";

      if (image) {
        // Cria uma referência para o local onde a imagem será armazenada, usando o tempo atual e o nome da imagem para garantir um nome único
        const imageRef = storageRef(
          storage,
          `images/${Date.now()}_${image.name}`
        );
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef); // Obtém a URL de download da imagem carregada
      }

      await push(ref(database, `category/${category}`), {
        name,
        price,
        imageUrl,
      });

      // Limpa o formulário
      setName("");
      setPrice("");
      setCategory("feminino");
      setImage(null);
    } catch (error) {
      setError(`Error: ${error.message}`);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={enviarDados}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          border: "1px solid #272727",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h1>ADICIONE PRODUTOS</h1>
        <div style={{ marginBottom: "10px" }}>
          <label>Nome: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Valor: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Categoria: </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="infantil">Infantil</option>
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Imagem: </label>
          <input type="file" accept="image/*" onChange={addImagem} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            type="submit"
            disabled={loading}
            style={{ padding: "10px 30px", borderRadius: "10px" }}
          >
            {loading ? "Adicionando..." : "Adicionar"}
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </form>
  );
};

export default AddProduto;
