import React from "react";
import styles from "./Program.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Program() {
  const items = [
    {
      image:
        "https://img.freepik.com/free-photo/indian-man-doing-excercisses-special-equipment-gym-with-personal-trainer_1157-51755.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      caption: "Beginner's Program",
    },
    {
      image:
        "https://img.freepik.com/free-photo/front-view-woman-training-gym_23-2150289967.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      caption: "Weight Loss Program",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      caption: "Strength and Muscle Building",
    },
    {
      image:
        "https://img.freepik.com/free-photo/working-abdomen-muscles-is-easy_329181-14162.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      caption: "Core and Abs Training",
    },
    {
      image:
        "https://img.freepik.com/free-photo/people-gym-talking-making-exercise-plans_23-2149175367.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      caption: "Sports-Specific Training",
    },
    {
      image:
        "https://img.freepik.com/free-photo/stronger-young-muscular-caucasian-athlete-practicing-lunges-gym-with-barbell-male-model-doing-strength-exercises-training-his-lower-body-wellness-healthy-lifestyle-bodybuilding-concept_155003-36806.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      caption: "CrossFit",
    },
    {
      image:
        "https://img.freepik.com/free-photo/muscular-build-woman-working-out-gym-flipping-truck-tire_342744-13.jpg?size=626&ext=jpg&ga=GA1.1.1157341070.1685540418&semt=ais",
      caption: "HIIT (High-Intensity Interval Training)",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-attractive-woman-stretching-dhanurasana-pose-grey-stud_1163-2912.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      caption: "Flexibility and Mobility",
    },
    {
      image:
        "https://img.freepik.com/free-photo/two-hardworking-men-training-with-weights_651396-1080.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      caption: "Post-Rehabilitation Training",
    },
    {
      image:
        "https://img.freepik.com/free-photo/health-beautiful-female-body-peace_1139-721.jpg?size=626&ext=jpg&ga=GA1.2.1157341070.1685540418&semt=ais",
      caption: "Mind-Body Connection",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="program" className={styles.program}>
      <h1>Training Program</h1>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        // responsive={responsive}
        className={styles.carousel}
      >
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={`Slide ${index}`} />
            <p>{item.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Program;
