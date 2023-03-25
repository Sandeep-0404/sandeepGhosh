import React from "react";

const Data = () => {
  return (
    <>
      <div className="home__data">
        <h1 className="home__title">Hey, I'm sandeep ghosh</h1>

        {/* <h3 className="home__subtitle">Web Developer</h3> */}
        <p className="home__description">
          <span className="desc">
            A Full Stack Web Developer building Web Applications that can make a
            difference
          </span>
          <br />
          <br />
          <a href="#project" className="button button--flex">
            Projects
          </a>
        </p>
      </div>
    </>
  );
};

export default Data;
