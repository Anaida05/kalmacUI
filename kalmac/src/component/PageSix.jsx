import React from "react";
import "./Styles/PageSix.css";
import img1 from "./images/Six1.png";
import img2 from "./images/Six2.png";
import img3 from "./images/Six3.png";
import img4 from "./images/Six4.png";
import img5 from "./images/Six5.png";

const PageSix = () => {
  return (
      <div className="page-six-container">
        <div className="column">
          <div className="point">
            <div className="page-six-header">
              <h2 className="page-six-container-title">
                Why Kelmac Group is the Right Training Partner for Your
                Business?
              </h2>
            </div>
            <div className="img-para">
              <img src={img1} alt="Certified Courses" className="icon" />
              <h3>Certified & Accredited Courses</h3>
            </div>
            <p>
              Our training is internationally recognised, ensuring compliance
              with ISO standards and other industry regulations.
            </p>
          </div>
          <div className="point">
            <div className="img-para">
              <img src={img2} alt="Tailored Content" className="icon" />
              <h3>Tailored Content That Delivers Results</h3>
            </div>
            <p>
              We customise every course to address your company's unique needs,
              ensuring relevant and immediately applicable training.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="point">
            <div className="img-para">
              <img src={img3} alt="Experience" className="icon" />
              <h3>30+ Years of Expertise</h3>
            </div>
            <p>
              We have trained thousands of professionals worldwide, helping
              businesses improve compliance, quality, and efficiency.
            </p>
          </div>
          <div className="point">
            <div className="img-para">
              <img src={img4} className="icon" />
              <h3>Expert Instructors with Real-World Experience</h3>
            </div>
            <p>
              Our trainers aren't just educators—they're industry professionals
              who understand your challenges and provide practical, actionable
              insights.
            </p>
          </div>
          <div className="point">
            <div className="img-para">
              <img src={img5} alt="Proven Track" className="icon" />
              <h3>Proven Track Record of Success</h3>
            </div>
            <p>
              Companies that train with Kelmac Group see increased employee
              performance, compliance improvement, and better operational
              efficiency.
            </p>
          </div>
        </div>
      </div>
  );
};

export default PageSix;
