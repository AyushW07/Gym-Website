import React from "react";
import styles from "./Footer.module.css";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>Phone: 9876543210</p>
          <p>Email: powerstrength@gym.org</p>
          <p>Address: 01 Gym Street, Bandra, Mumbai, India</p>
        </div>

        <div className={styles.section}>
          <h4>Follow us</h4>
          <div className={styles.social}>
            <a href="https://www.facebook.com" target="_blank">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <BsInstagram />
            </a>
            <a href="https://twitter.com" target="_blank">
              <BsTwitter />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <BsYoutube />
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
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
        </div>
      </div>
      <div className={styles.copy}>
        <p>Power Strength Gym. All rights reserved. &copy; 2023 </p>
      </div>
    </div>
  );
}

export default Footer;
