import styled from "styled-components";

export const LoginButton = styled.button`
  padding: 8px 25px;
  font-size: 14px;
  font-weight: 800;
  border: 1px solid #272727;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  width: 300px;
  margin-top: 15px;
  color: white;
  background-color: #272727;
  margin-top: 35px;

  &:hover {
    color: #272727;
    background-color: #ffff;
    border: 1px solid #272727;
  }
`;
export const StyledInput = styled.input`
    width: 270px;
    border: 1px solid #272727;
    border-radius: 5px;
    padding: 6px;
    width: 280px;

    &:hover {
    border: 1px solid #272727;
  }
`;
