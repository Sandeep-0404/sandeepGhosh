import React from "react";

const Data = () => {
  return (
    <>
      <div className="home__data">
        <h1 className="home__title">Hey, I'm sandeep ghosh</h1>

        {/* <h3 className="home__subtitle">Web Developer</h3> */}
        <p className="home__description">
          <span className="desc">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </span>
          <br />
          <br />
          <a href="#contact" className="button button--flex">
            Projects
          </a>
        </p>
      </div>
    </>
  );
};

export default Data;
