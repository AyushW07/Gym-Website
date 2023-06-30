import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div className={styles.about}>
        <div className={styles.video}>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/wnHW6o8WMas"
            title="YouTube video player"
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen={true}
          ></iframe>
        </div>
        <div className={styles.content}>
          <h1>About Us</h1>
          <p>
            Welcome to Power Strength Gym, where fitness meets passion! We are a
            premier fitness facility committed to providing our members with an
            exceptional fitness experience. Our mission is to inspire and
            empower individuals to lead healthier lives, reach their fitness
            goals, and discover their true potential.
          </p>
          <button>Learn More</button>
        </div>
      </div>

      <div className={styles.about}>
        <div>
          <h1>Why Choose Us ?</h1>
          <ul>
            <li>
              <strong>Personalized Training</strong>
              <p>
                Our team of experienced trainers is committed to your success.
                We offer personalized training programs tailored to your
                specific needs, whether you're a beginner looking to get started
                or an experienced athlete striving for peak performance. Our
                trainers will guide, motivate, and challenge you to surpass your
                own expectations.
              </p>
            </li>

            <li>
              <strong>Flexible Membership Options</strong>
              <p>
                We understand that everyone has unique needs and schedules.
                That's why we offer flexible membership options to accommodate
                your lifestyle. Whether you prefer a short-term commitment or a
                long-term membership, we have plans that suit your preferences.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.video}>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/C5WJ0BMYuUo"
            title="YouTube video player"
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
