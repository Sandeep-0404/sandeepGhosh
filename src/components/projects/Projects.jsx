import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [blackWidth, setWidth] = useState();

  return (
    <>
      <div className="black_box"></div>
      <div className="main_box">
        <h1>Crypto App</h1>
      </div>
    </>
  );
};

export default Projects;
