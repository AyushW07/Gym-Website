import React from "react";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <div id="pricing" className={styles.pricingContainer}>
      <h1>Our Membership Plans</h1>
      <div className={styles.pricing}>
        <div className={styles.plan}>
          <h3>Basic</h3>
          <p>$29/month</p>
          <ul>
            <li>Access to gym facilities</li>
            <li>Group fitness classes</li>
            <li>Online workout library</li>
          </ul>
          <button className={styles.btn}>Sign Up Now</button>
        </div>

        <div className={styles.plan}>
          <h3>Premium</h3>
          <p>$49/month</p>
          <ul>
            <li>All basic plan features</li>
            <li>Personal training sessions (2 per month)</li>
            <li>Access to sauna and spa</li>
          </ul>
          <button className={styles.btn}>Sign Up Now</button>
        </div>

        <div className={styles.plan}>
          <h3>Ultra Premium</h3>
          <p>$99/month</p>
          <ul>
            <li>All premium plan features</li>
            <li>Ultimate personal training sessions</li>
            <li>Special discount on merchandise</li>
          </ul>
          <button className={styles.btn}>Sign Up Now</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
