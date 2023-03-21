import React, { useState } from "react";
import "./projects.css";
import IndiPro from "./IndiPro";
import shop from "../../projectPic/shop.svg";
import crypto from "../../projectPic/crypto.svg";
import keep from "../../projectPic/keep.svg";
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
              name="shoP."
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into "
            />
            <IndiPro
              image={crypto}
              name="Crypto Tracker."
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
            />
            <IndiPro
              image={keep}
              name="Sandy Keep"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
            />
            <IndiPro
              image={health}
              name="Healtify"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
