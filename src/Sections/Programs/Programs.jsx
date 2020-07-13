import React, { Fragment } from "react";
import "./Programs.css";

import Program from "./Program/Program";
import Programs1 from "./programs1.png";
import Programs2 from "./programs2.png";
import lawyerUpLogo from "../../Images/logos/lawyerUpLogo-white.svg";
import scholarUpLogo from "../../Images/logos/scholarUpLogo-white.svg";
import levelUpLogo from "../../Images/logos/levelUpLogo-white.svg";
import Programs3 from "./programs3.png";

function Programs() {
  const data = [
    {
      id: "lawyerup",
      name: "LawyerUp Internship",
      description:
        "Every summer, for 8 weeks, LawyerUp hosts a virtual internship that brings legal recruiters, career coaches, and attorneys from over 29 sectors to educate our interns on what the elgal field entails. Our speakers discuss their type of client, fictitious cases, and daily procedures that come with being a lawyer in their specific field. Simply put, our internship is a lot more.",
      image: Programs1,
      logo: lawyerUpLogo,
      released: true,
    },
    {
      id: "scholarup",
      name: "ScholarUp Research",
      description:
        "Every summer, for 5 weeks, ScholarUp hosts a virtual research experience that allows candidates to discuss, debate, and author briefs about different landmark cases and legal issues. We encourage our students to debate for and against every issue to better understand the topic as a whole. Our ScholarUp candidates discuss the topic and then write an article, draw a creative piece, or organize a presentation detailing their argument. The best submissions are then featured on our website and social media.",
      image: Programs2,
      logo: scholarUpLogo,
      released: true,
      button: {
        text: "Read some of our research",
        link: "https://medium.com/@lawyerupinternship",
      },
    },
    {
      id: "levelup",
      name: "LevelUp Your Network",
      description:
        "Although our internships LawyerUp and ScholarUp are solely offered during school breaks, we still find ways to provide the best of the best for all of our followers all-year round. So, welcome to LevelUp, the branch of our program that provides monthly career development events on networking, interviews, resumes, and everything in between for all students regardless of whether they are interested in law or not. LevelUp also provides inexpensive resume enhancement, LinkedIn profile development, and interview preparation to help you land your next job!",
      image: Programs3,
      logo: levelUpLogo,
      released: false,
    },
  ];

  const programs = data.map((p) => (
    <Fragment>
      <Program
        id={p.id}
        name={p.name}
        description={p.description}
        image={p.image}
        logo={p.logo}
        released={p.released}
        button={p.button}
      />
    </Fragment>
  ));

  return (
    <Fragment>
      <div id="programs">
        <h1>Our Programs</h1>
        <div className="list">{programs}</div>
      </div>
    </Fragment>
  );
}

export default Programs;
