import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      const exist = JSON.parse(existingUser);
      if (exist.email === email && exist.password === password) {
        alert("Login Successfull!");
        navigate("/");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
