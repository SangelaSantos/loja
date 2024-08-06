import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginButton, StyledInput } from "./Style";
import NavLogin from "../components/HeaderLogin";
import RegisterImg from "../img/1.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const metodoCadastro = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuário registrado:", userCredential.user);
        navigate('/home');
      })
      .catch((error) => {
        setError('Erro ao se cadastrar');
        console.error("Erro ao registrar usuário:", error);
      });
  };

  return (
    <>
      <NavLogin />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ justifyContent: "space-between" }}>
        <h2 style={{width: "400px"}}>Cadastre-se para ter acesso completo a sua conta!</h2>         
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={metodoCadastro}>
            <div>
              <p style={{ marginBottom: "2px" }}>
                E-MAIL <span style={{ color: "red" }}>*</span>
              </p>
              <StyledInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <p style={{ marginBottom: "2px" }}>
                SENHA <span style={{ color: "red" }}>*</span>
              </p>
              <StyledInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <LoginButton type="submit">CADASTRAR</LoginButton>
          </form>
        </div>
        <div>
          <img
            src={RegisterImg}
            alt="register"
            style={{
              width: "400px",
              height: "400px",
              position: "fixed",
              bottom: 0,
              right: 0
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Register;
