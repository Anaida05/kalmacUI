import React from "react";
import "./Styles/PageThree.css";

const PageThree = () => {
  return (
    <div className="info-card-container">
      <div className="info-card">
        <h2>Customized programs tailored to client requirements!</h2>
        <p >Fully Tailored to Your Business Needs</p>
        <p className="infoP">No two businesses are the same</p>
        <p className="info-card-SecondP">
          So why settle for a one-size-fits-all training program? Kelmac Group's private training is designed specifically for you.
        </p>
        <p className="infoP">Customized to Your Industry & Company Processes</p>
        <p className="info-card-SecondP">
          We take the time to understand your organization, your industry, and your unique challenges. Our courses are then tailored to focus on the specific skills and knowledge your team needs.
        </p>
        <p className="infoP">Relevant, Real-World Training</p>
        <p className="info-card-SecondP">
          Instead of covering theoretical concepts that may not apply to your team, our training integrates real-world scenarios, case studies, and practical exercises related to your company's operations.
        </p>
        <p className="infoP">Targeted Learning for Different Teams</p>
        <p className="info-card-SecondP">
          Whether you need training for senior management, internal auditors, or frontline employees, we tweak the content to ensure each group gets the most value from the session.
        </p>
      </div>
    </div>
  );
};

export default PageThree;
