import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      error.name = "Please enter your name.";
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      error.email = "Please enter a valid email address.";
    }

    if (password.length < 8) {
      error.password = "Password should be atleast 8 characters long.";
    }

    if (password !== confirmPassword) {
      error.confirmPassword = "Password do not match.";
    }

    if (Object.keys(error).length > 0) {
      setError(error);
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successfull!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {error.name && <p className={styles.error}>{error.name}</p>}

      <label htmlFor="name">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {error.email && <p className={styles.error}>{error.email}</p>}

      <label htmlFor="name">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error.password && <p className={styles.error}>{error.password}</p>}

      <label htmlFor="name">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      {error.confirmPassword && (
        <p className={styles.error}>{error.confirmPassword}</p>
      )}

      <button type="submit">Register</button>
      <h3>
        Already have an account? <Link to="/login">Login</Link>
      </h3>
    </form>
  );
}

export default Register;
