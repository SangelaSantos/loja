export const addToCart = (product) => {
  
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Obter o carrinho atual do localStorage (ou inicializar como uma lista vazia se não houver carrinho armazenado)
  
  cart.push(product); // Adiciona o novo produto ao carrinho
  
  localStorage.setItem('cart', JSON.stringify(cart)); // Armazena o carrinho atualizado no localStorage
};
