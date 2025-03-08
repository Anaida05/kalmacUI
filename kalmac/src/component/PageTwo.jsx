import React from "react";
import "./Styles/PageTwo.css";
import flag from "./images/Icon.png";
import calender from "./images/Icon2.png";
import dollar from "./images/Icon3.png";
import notepad from "./images/Icon4.png";
import shield from "./images/Icon5.png";
import curve from "./images/Vector 5.png";
import audit from "./images/auditorlogo.png";
import Button from "./Button";
const PageTwo = () => {
  return (
    <div className="page-two-container">
      <section className="intro-section">
        <div className="text-content">
          <h2>Why Choose Private & In-House Training?</h2>
          <p>Tailored Learning That Works for Your Business</p>
          <p className="text-contentP">
            Training isn't just about ticking a box—it's about equipping your
            team with the right skills and knowledge to drive real business
            impact. But public training courses often come with challenges that
            can make them less effective for organizations like yours:
          </p>
          <ul className="lists">
            <li>
              <img src={flag} alt="" />
              Generic content that doesn't fully align with your business goals
            </li>

            <li>
              <img src={calender} alt="" />
              Inconvenient schedules that don't fit your team's availability
            </li>
            <li>
              <img src={dollar} alt="" />
              Additional travel costs & time away from work
            </li>
            <li>
              <img src={notepad} alt="" />
              Disruptions to daily business operations
            </li>
            <li>
              <img src={shield} alt="" />
              Lack of confidentiality when discussing company-specific
              challenges
            </li>
          </ul>
          <p className="text-contentP">
            Private, in-house training eliminates these barriers by bringing the
            learning experience directly to your organization—on your schedule,
            with your priorities in mind.
          </p>

            <Button/>
        </div>
      </section>

      <section className="training-section">
        <div className="heading">
          <h3>Our Top Training Programs </h3>
          <img src={curve} alt="" />
        </div>
        <div className="trainging-card-section">
        <div className="training-card">
          <div className="price">₹ 32,500</div>

          <img src={audit} alt="badge" className="iso-badge" />

          <h3>ISO 9001:2015 Lead Auditor Training Course</h3>
          <p className="category">Quality Management</p>

          <ul className="details">
            <li>
              <i className="fas fa-laptop"></i> Virtual
            </li>
            <li>
              <i className="fas fa-calendar-alt"></i> 3 Mar 25 to 9 Mar 25
            </li>
            <li>
              <i className="fas fa-clock"></i> 4 Days
            </li>
            <li>
              <i className="fas fa-language"></i> English
            </li>
          </ul>
          <button className="view-details">View details →</button>
        </div>
        <div className="training-card">
          <div className="price">₹ 32,500</div>

          <img src={audit} alt="badge" className="iso-badge" />

          <h3>ISO 9001:2015 Lead 
          Auditor Training Course</h3>
          <p className="category">Quality Management</p>

          <ul className="details">
            <li>
              <i className="fas fa-laptop"></i> Virtual
            </li>
            <li>
              <i className="fas fa-calendar-alt"></i> 3 Mar 25 to 9 Mar 25
            </li>
            <li>
              <i className="fas fa-clock"></i> 4 Days
            </li>
            <li>
              <i className="fas fa-language"></i> English
            </li>
          </ul>
          <button className="view-details">View details →</button>
        </div>
        <div className="training-card">
          <div className="price">₹ 32,500</div>

          <img src={audit} alt="badge" className="iso-badge" />

          <h3>ISO 9001:2015 Lead Auditor Training Course</h3>
          <p className="category">Quality Management</p>

          <ul className="details">
            <li>
              <i className="fas fa-laptop"></i> Virtual
            </li>
            <li>
              <i className="fas fa-calendar-alt"></i> 3 Mar 25 to 9 Mar 25
            </li>
            <li>
              <i className="fas fa-clock"></i> 4 Days
            </li>
            <li>
              <i className="fas fa-language"></i> English
            </li>
          </ul>
          <button className="view-details">View details →</button>
        </div>
        <div className="training-card">
          <div className="price">₹ 32,500</div>

          <img src={audit} alt="badge" className="iso-badge" />

          <h3>ISO 9001:2015 Lead Auditor Training Course</h3>
          <p className="category">Quality Management</p>

          <ul className="details">
            <li>
              <i className="fas fa-laptop"></i> Virtual
            </li>
            <li>
              <i className="fas fa-calendar-alt"></i> 3 Mar 25 to 9 Mar 25
            </li>
            <li>
              <i className="fas fa-clock"></i> 4 Days
            </li>
            <li>
              <i className="fas fa-language"></i> English
            </li>
          </ul>
          <button className="view-details">View details →</button>
        </div>
        </div>
        
      </section>
    </div>
  );
};

export default PageTwo;
