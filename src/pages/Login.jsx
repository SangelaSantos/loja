// src/Login.js
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Logo from "../img/login-screen.png";
import { LoginButton, StyledInput } from "./Style";
import NavLogin from "../components/HeaderLogin";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuário logado:", userCredential.user);
        navigate('/home');
      })
      .catch((error) => {
        setError(error.message);
        console.error("Erro ao logar usuário:", error);
      });
  };

  return (
    <>
      <NavLogin />
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              maxWidth: 600,
              marginTop: "50px",
              marginLeft: "100px",
            }}
          >
            <h1 style={{ fontSize: "22px" }}>CONECTE-SE AGORA MESMO!</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
              <div>
                <p style={{ marginBottom: "2px" }}>E-MAIL</p>
                <StyledInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <p style={{ marginBottom: "2px" }}>SENHA</p>
                <StyledInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <LoginButton type="submit">Login</LoginButton>
              <div>
                <p
                  style={{
                    marginTop: "10px",
                    width: "300px",
                    fontSize: "14px",
                  }}
                >
                  Você ainda não tem uma conta?{" "}
                  <Link to={"/register"}>
                    <strong style={{ color: "#000000" }}>Cadastre-se</strong>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt="login"
            style={{
              width: "600px",
              height: "350px",
              marginTop: "60px",
              marginLeft: "250px"
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
