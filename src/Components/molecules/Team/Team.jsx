import React from "react";
import styles from "./Team.module.css";
import { useNavigate } from "react-router-dom";

function Team() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/#trainer");
  };

  const data = [
    {
      image:
        "https://img.freepik.com/free-photo/bodybuilder-training-arm-with-resistance-band_7502-4758.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      name: "Max Wilson",
      title: "Group Fitness Specialist",
      desc: "Max is an energetic and motivating group fitness instructor who specializes in high-intensity workouts. With his dynamic classes and creative exercise routines, he creates an exciting and inclusive environment for participants of all fitness levels.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-sports-man-training-gym_1303-20716.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      name: "Jake Anderson",
      title: "Strength and Conditioning Coach",
      desc: "Jake is a highly experienced strength and conditioning coach who works with athletes and fitness enthusiasts to enhance their performance and achieve their athletic goals. His training programs focus on building strength, power, and agility.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-girl-is-engaged-gym_1157-20617.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      name: "Sophia Reed",
      title: "Certified Personal Trainer",
      desc: "Sarah is a dedicated personal trainer with a passion for helping clients achieve their fitness goals. With her expertise in strength training and nutrition, she creates personalized programs that maximize results and empower clients to lead healthier lifestyles.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/smiling-sports-woman-standing-with-arms-folded-looking-camera-isolated-white-wall_231208-1691.jpg?size=626&ext=jpg&ga=GA1.1.1157341070.1685540418&semt=ais",
      name: "Natalie Evans",
      title: "Flexibility and Stretching Specialist",
      desc: "Natalie is a specialist in flexibility and stretching exercises. With her deep understanding of stretching techniques, she helps clients improve their flexibility, prevent injuries, and enhance their overall range of motion.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/sports-man-spend-time-morning-gym_1157-28936.jpg?size=626&ext=jpg&ga=GA1.1.1157341070.1685540418&semt=ais",
      name: "Noah Davis",
      title: "Senior Fitness Trainer",
      desc: "Noah is dedicated to promoting healthy aging and improving the well-being of older adults. As a senior fitness trainer, he designs customized exercise programs that enhance mobility, balance, and overall vitality for seniors.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-young-muscular-woman-gym-smiles-look-camera-woman-wearing-black-sportwear-concept-girl-power-concept-women-s-sports-workout-women-s-fitness-trainer_1157-49124.jpg?size=626&ext=jpg&ga=GA1.1.1157341070.1685540418&semt=ais",
      name: "Olivia Martinez",
      title: "Yoga Instructor",
      desc: "As a certified yoga instructor, Olivia Martinez offers a holistic approach to fitness and well-being. Their classes emphasize mind-body connection, flexibility, and stress reduction, providing a rejuvenating and calming experience for participants of all levels.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-healthy-man-athlete-posing-confident-with-ropes-gym_155003-32053.jpg?size=626&ext=jpg&ga=GA1.1.1157341070.1685540418&semt=ais",
      name: "Caleb Brooks",
      title: "Boxing and Kickboxing Coach",
      desc: "Caleb is a skilled boxing and kickboxing coach who brings his expertise in martial arts to his training sessions. He helps clients develop discipline, coordination, and cardiovascular fitness through high-intensity combat sports workouts.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-sports-man-training-gym_1303-20714.jpg?size=626&ext=jpg&ga=GA1.1.1157341070.1685540418&semt=ais",
      name: "Brandon Cooper",
      title: "Sports Performance Trainer",
      desc: "Brandon is a sports performance trainer with a passion for helping athletes reach their full potential. With his specialized training programs and focus on athletic conditioning, he helps clients improve their speed, agility, strength, and overall athletic performance.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-happy-athlete-jogging-running-track-health-club_637285-8368.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      name: "Brian Roberts",
      title: "Outdoor Fitness Expert",
      desc: "Brian is an outdoor fitness enthusiast who leads challenging and invigorating workouts in nature. With his knowledge of outdoor training methods and equipment, he helps clients connect with the outdoors while achieving their fitness goals.",
    },
  ];

  return (
    <div>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.image} alt="Team" />
            <h2>{item.name}</h2>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <button onClick={handleClick}>Go Back</button>
      </div>
    </div>
  );
}

export default Team;
