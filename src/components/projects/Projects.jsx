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
              image={shop}
              name="ShoP."
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into "
              width="700px"
              link="https://sho-p.vercel.app/"
            />
            <IndiPro
              image={crypto}
              name="Crypto Tracker."
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
              width="700px"
              link="https://crypto-tracker-henna.vercel.app/"
            />
            <IndiPro
              image={keep}
              name="Movix"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
              width="700px"
              link="https://movix-gamma.vercel.app/"
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
