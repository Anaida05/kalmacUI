import React from "react";
import "./Styles/PageFive.css";
import img1 from "./images/Key1.png";
import img2 from "./images/Key2.png";
import img3 from "./images/Key3.png";
import img4 from "./images/Key4.png";
import img5 from "./images/Key5.png";
import Button from "./Button";

const reasons = [
  {
    img: img1,
    title: "Greater Knowledge Transfer & Practical Application",
    description:
      "Employees learn best when they can connect training to their daily tasks. Our in-house programs align course content with your company's systems, policies, and workflows.",
  },
  {
    img: img2,
    title: "Stronger Teamwork & Company-Wide Alignment",
    description:
      "When employees train together, they develop a shared understanding of business goals, processes, and compliance requirements, enhancing overall performance.",
  },
  {
    img: img3,
    title: "Higher Retention & ROI on Training Investment",
    description:
      "Teams trained in-house retain knowledge better than those in external courses. This fosters active participation, knowledge-sharing, and higher ROI.",
  },
  {
    img: img4,
    title: "Industry-Specific & Custom-Designed Courses",
    description:
      "Your business is unique—your training should be too. We tailor courses to your industry’s regulations, ISO standards, and operational needs, ensuring that training adds real value to your organization.",
  },
  {
    img: img5,
    title: "Convenience & Maximum Flexibility",
    description:
      "Whether your team prefers onsite, online, or hybrid training, we work around your schedule to provide a seamless learning experience. You decide when and how training happens—we make it easy..",
  },
];

const PageFive = () => {
  return (
    <div className="page-five-container">
      <div className="reasons-grid">
        <div className="reasons-list-div">
          <p className="num">5</p>
          <ul className="list">
            <li>Key</li>
            <li>Reasons</li>
            <li>to Choose</li>
            <li>Private Training</li>
          </ul>
        </div>  
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <img src={reason.img} alt={reason.title} className="reason-image" />
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>
      <Button/>
    </div>
  );
};

export default PageFive;
