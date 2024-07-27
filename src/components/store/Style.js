import styled from 'styled-components';

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 120px;
  height: 100%;
  background-color: #272727;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
  z-index: 1000;
`;

export const MainContent = styled.div`
  margin-left: 120px; /* Adiciona uma margem esquerda para evitar sobreposição com a barra lateral fixa */
`;

export const ProductsContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 150px 150px 120px;
  gap: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 2px solid #ddd;
`;

export const ProductItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 150px 150px 120px;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const ProductName = styled.div`
  margin-left: 10px;
`;

export const ProductPrice = styled.div`
  text-align: center;
`;

export const ButtonAddToCart = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const QuantityDisplay = styled.div`
  width: 40px;
  text-align: center;
  line-height: 30px;
`;


export const TotalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 120px; /* mesma margem que MainContent */
  width: calc(100% - 120px); /* ajustar para que ocupe todo o espaço à direita da sidebar */
  background-color: #f4f4f4;
  padding: 20px;
  border-top: 2px solid #ddd;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;