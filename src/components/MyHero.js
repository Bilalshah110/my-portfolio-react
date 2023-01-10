import React from "react";
import { TypeAnimation } from "react-type-animation";

const MyHero = () => {
  return (
    <div className="pt-5" id="home">
      <div
        style={{
          backgroundImage: "url('images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "92vh",
        }}
      >
        <div
          className="hero-mask"
        >
          <div className=" d-flex justify-content-center align-items-center h-100">
            <div>
              <h6 className="hero-heading hero-name-heading mb-2">
                BILAL HASSAN
              </h6>
              <h6 className="hero-heading hero-main-heading ">
                &#123; MERN STACK{" "}
                <span className="letter-spacing">DEVELOPER </span>&#125;
              </h6>
              <TypeAnimation
                sequence={[
                  "HTML",
                  1500,
                  "CSS",
                  1500,
                  "ReactJS",
                  1500,
                  "NodeJS",
                  1500,
                  "Express",
                  1500,
                  "MongoDB",
                  1500,
                ]}
                className="hero-heading hero-sub-heading"
                repeat={Infinity}
              />
              <div className="mt-4">
                <a
                  href="resume/Bilal-Hassan-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <input
                    type="button"
                    className="btn hero-btn btn-outline-light btn-lg ms-2 my-2"
                    value="View Resume"
                  />
                </a>

                <a href="resume/Bilal-Hassan-resume.pdf" download>
                  <input
                    type="button"
                    className="btn hero-btn btn-light btn-lg ms-2"
                    value="Download Resume"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHero;
