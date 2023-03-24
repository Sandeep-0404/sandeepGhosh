import React from "react";

const IndiPro = (props) => {
  const redirect = () => {
    window.open(props.link, "_blank");
  };

  return (
    <div className="individual-projects">
      <div className="image-box">
        <img
          className="project-image"
          src={props.image}
          style={{
            width: props.width,
          }}
        />
      </div>
      <div className="project-description">
        <h2 className="project-name">{props.name}</h2>
        <p>{props.desc}</p>
        <button className="button button--flex" onClick={redirect}>
          LIVE LINK
        </button>
      </div>
    </div>
  );
};

export default IndiPro;
