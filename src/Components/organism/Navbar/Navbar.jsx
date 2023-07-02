import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assests/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.homeLogo}>
          <a href="#">
            <img src={logo} alt="Gym Logo" />
          </a>
        </div>
        <ul className={styles.links}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#program">Program</a>
          </li>
          <li>
            <a href="#trainer">Trainer</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        <button
          className={styles.btn}
          onClick={() => {
            navigate("/register");
          }}
        >
          Join Us
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
