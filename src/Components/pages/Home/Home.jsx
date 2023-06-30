import React from "react";
import styles from "./Home.module.css";
import home from "../../../assests/home.jpg";

function Home() {
  return (
    <div id="home" className={styles.home}>
      <img src={home} alt="Image" />
      <div className={styles.content}>
        <h1>
          "<span>Nothing</span> Will Work
        </h1>
        <h1>Unless</h1>
        <h1>
          <span>You Do</span>"
        </h1>
      </div>
    </div>
  );
}

export default Home;
