import React, { useState } from "react";
import "./projects.css";
import IndiPro from "./IndiPro";
import shop from "../../projectPic/shop.svg";
import crypto from "../../projectPic/crypto.svg";
import keep from "../../projectPic/movix.svg";
import health from "../../projectPic/health.svg";

const Projects = () => {
  const [blackWidth, setWidth] = useState();

  return (
    <>
      <div className="project-container">
        <section className="project section" id="project">
          <h2 className="section__title">Projects</h2>
          <p className="contact-main_para">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>

          <div className="allProjects">
            <IndiPro
              image={keep}
              name="Movix"
              desc="Movix is a web App created in React that allows user to search for movies and TV shows.It allows user to find movies with certain filters such as genre, popularity, and year."
              width="700px"
              link="https://movix-gamma.vercel.app/"
            />
            <IndiPro
              image={crypto}
              name="Crypto Tracker."
              desc="CryptoTracker is a web App created using ReactJs to help the user have a glance over the real-time trends of Cryptocurrency and hot news on their fingertips.This App is equipped with a curated Realtime Price Screener, Stats Table, And top News Viewer from various sources into a simple, focused format."
              width="700px"
              link="https://crypto-tracker-henna.vercel.app/"
            />
            <IndiPro
              image={shop}
              name="ShoP."
              desc="Shop is a responsive frontend Application made using React and Sass."
              width="700px"
              link="https://sho-p.vercel.app/"
            />

            <IndiPro
              image={health}
              name="Healtify"
              desc="The main idea behind this app was to give every person a simplified way to take appointment with the doctor with a single button click and also helps the doctor to manage the appointment by simply approving or cancelling the appointment request.This app also help us in maintaining the previous medical records in a well defined manner.This was a team project and the backend was done by me"
              width="250px"
              link="https://github.com/Sandeep-0404/HeltifyApp-backend"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
