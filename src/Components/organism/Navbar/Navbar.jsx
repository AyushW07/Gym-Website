import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assests/logo.png";
import { useNavigate } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`${menu ? styles.active : "no"}`}>
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
        <div className={styles.menubar}>
          <span className={styles.menu} onClick={handleMenu}>
            <MdMenu />
          </span>
          <span className={styles.close} onClick={handleMenu}>
            <MdClose />
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
