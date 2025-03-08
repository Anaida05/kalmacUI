import React, { useState } from "react";
import curve from "./images/Vector 5.png";
import img1 from "./images/Benefit1.png";
import img2 from "./images/Benefit2.png";
import img3 from "./images/Benefit3.png";
import img4 from "./images/Benefit4.png";
import img5 from "./images/Benefit5.png";
import "./Styles/PageFour.css";
const PageFour = () => {
  const [isActive, setIsActive] = useState(0);

  const cards = [
    {
      img: img1,
      title: "Cost-Effective Training Solution",
      colour: "  #F65585 ",
      description:
        "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achieve a faster return on investment with tailored, business-focused learning.",
    },
    {
      img: img2,
      title: "Minimal Business Disruption",
      colour: " #8C7AFB",
      description:
        "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achieve a faster return on investment with tailored, business-focused learning.",
    },
    {
      img: img3,
      title: "Tailored for Your Industry & Team",
      colour: " #45C6E8",
      description:
        "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achieve a faster return on investment with tailored, business-focused learning.",
    },
    {
      img: img4,
      title: "Confidential & Secure Learning",
      colour: " #FF9D2A",
      description:
        "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achieve a faster return on investment with tailored, business-focused learning.",
    },
    {
      img: img5,
      title: "Flexible Delivery Options",
      colour: " #36BE93",
      description:
        "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achieve a faster return on investment with tailored, business-focused learning.",
    },
  ];

  const handleCard = (index) => {
    setIsActive(index);
    // console.log(index)
  };
  return (
    <div className="page-four-container">
      <div className="page-four-heading">
        <h2>The Benefits of Private In-House Training</h2>
        <img src={curve} alt="curve" />
      </div>
      <div className="page-four-content">
        <div className="page-four-card">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`cards-contaier ${isActive === index ? "active-card" : null}`}
              style={{ background: card.colour }}
              onClick={() => handleCard(index)}
            >
              <img
                className="cards-cntainer-img"
                src={card.img}
                alt={card.title}
              />

              <p className="card-title">{card.title}</p>
            </div>
          ))}
          
        </div>
        <div className="card-description" style={{background : cards[isActive].colour}}>
          {/* {isActive} */}
          <p>{cards[isActive].description}</p>
        </div>
       
      </div>

      {/* {console.log(img1,img2,img3,img4,img5)} */}
    </div>
  );
};

export default PageFour;
