import React from "react";
import styles from "./Trainer.module.css";
import { useNavigate } from "react-router-dom";

function Trainer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/team");
  };

  const data = [
    {
      image:
        "https://img.freepik.com/free-photo/sportive-man-black-shirt-closing-his-arm-muscles_114579-14242.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      name: "Luke Morgan",
      title: "Strength and Weight Trainer",
      desc: "With 8 years of experience in the fitness industry, Luke Morgan is a certified personal trainer specializing in Strength and Weight Training. They have a proven track record of helping clients achieve remarkable transformations through their personalized training programs and motivational coaching.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/attractive-sports-girl-personal-trainer-middle-modern-gym-with-workout-plan-her-hands_496169-2795.jpg?size=626&ext=jpg&ga=GA1.1.1157341070.1685540418&semt=ais",
      name: "Emily Johnson",
      title: "Nutrition and Wellness Coach",
      desc: " A certified nutritionist and personal trainer, Emily Johnson believes in the power of a balanced approach to fitness. They work closely with clients to develop customized workout routines and nutrition plans that support their goals, whether it's weight loss, muscle gain, or overall wellness.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/handsome-man-is-engaged-gym_1157-29459.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      name: "Alex Carter",
      title: "Functional Training Expert",
      desc: "As a former competitive athlete, Alex Carter brings their firsthand knowledge and expertise to their training sessions. With a focus on functional training and injury prevention, they excel at helping clients improve athletic performance and reach their full potential.",
    },
  ];

  return (
    <div id="trainer" className={styles.trainer}>
      <div className={styles.trainerContainer}>
        <h1>Meet Our Expert Team of Trainers</h1>
        <p>
          At Power Strength Gym, we pride ourselves on having a team of
          dedicated and experienced trainers who are committed to helping you
          achieve your fitness goals. Our trainers are not only highly qualified
          but also deeply passionate about fitness and helping others lead
          healthier lives.
        </p>
        <span>Get to know our team below :</span>
      </div>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.image} alt="Trainer" />
            <h2>{item.name}</h2>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div>
        <button className={styles.btn} onClick={handleClick}>
          See Whole Team
        </button>
      </div>
    </div>
  );
}

export default Trainer;
