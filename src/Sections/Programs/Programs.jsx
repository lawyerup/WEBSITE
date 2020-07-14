import React, { Fragment } from "react";
import "./Programs.css";

import Program from "./Program/Program";
import Programs1 from "../../Images/backgrounds/programs1.png";
import Programs2 from "../../Images/backgrounds/programs2.png";
import Programs3 from "../../Images/backgrounds/programs3.png";
import lawyerUpLogo from "../../Images/logos/lawyerUpLogo-white.svg";
import scholarUpLogo from "../../Images/logos/scholarUpLogo-white.svg";
import levelUpLogo from "../../Images/logos/levelUpLogo-white.svg";

function Programs() {
  const data = [
    {
      id: "lawyerup",
      name: "LawyerUp Internship",
      description:
        "Every summer, for 8 weeks, LawyerUp hosts a virtual internship that brings distinguished attorneys, legal recruiters, and career coaches from 30+ law sectors to educate our interns on what the legal field entails. Our lawyers discuss their client type, fictitious cases, and daily procedures involved in their specific field while our coaches teach us resume, CV, LinkedIn, interview, and salary negotiation techniques to better our careers. Simply put, you’ll become a well-rounded individual with a better understanding of how to succeed, no matter which career you choose.",
      image: Programs1,
      logo: lawyerUpLogo,
      released: true,
    },
    {
      id: "scholarup",
      name: "ScholarUp Research",
      description:
        "Every summer, for 5 weeks, ScholarUp hosts a virtual research experience where candidates can debate various landmark cases and legal issues. With open inquiry and creativity at the heart of our program, we encourage our students to write an article, draw a creative piece, or organize a presentation based on the information they learn. Then, the best submission, known as a #FeaturedScholar, is published on our company website and social media pages.",
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
        "Every summer, for 8 weeks, LawyerUp hosts a virtual internship that brings distinguished attorneys, legal recruiters, and career coaches from 30+ law sectors to educate our interns on what the legal field entails. Our speakers discuss their type of client, fictitious cases, and daily procedures that come with being a lawyer in their specific field. Simply put, our legal internship does not just teach you the day-to-day operations of one sector. We create a well-rounded individual that knows which sector they hope to work in before they even get into law school.",
      image: Programs3,
      logo: levelUpLogo,
      released: true,
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
