import React from "react";

const IndiPro = (props) => {
  return (
    <div className="individual-projects">
      <section
        className="project-image"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></section>
      <div className="project-description">
        <h2 className="project-name">{props.name}</h2>
        <p>{props.desc}</p>
        <button className="button button--flex">Case study</button>
      </div>
    </div>
  );
};

export default IndiPro;
