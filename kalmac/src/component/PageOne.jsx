import React from "react";
import "./Styles/PageOne.css";
import curve from "../component/images/Vector 5.png";
import group from "./images/Group.png";
const PageOne = () => {
  return (
    <section className="parentDiv">
      <div className="upperDiv">
        <div className="content">
          <h1>
            Excellence Redefined: Kelmac's Training Solutions -
            <span className="curve">
              <h1>Tailored</h1>
              <img src={curve} alt="" />
            </span>
          </h1>
          <p>
            ISO training designed around your business needs—delivered when you
            need it.
          </p>
          <div className="buttons">
            <button className="quote-btn">Get a Quote</button>
            <button className="whatsapp-btn">WhatsApp Us</button>
          </div>
        </div>

        <div className="form-container">
          <form className="form">
            <label htmlFor="">Full Name</label>
            <br />
            <input type="text" placeholder="Full Name" required />
            <label htmlFor="">Email Id</label>
            <br />
            <input type="email" placeholder="Email ID" required />
            <br />
            <label htmlFor="">Training you are looking for</label>
            <br />
            <select required>
              <option value="">Select training</option>
              <option value="">FullStack</option>
              <option value="">Node</option>
            </select>
            <label htmlFor="">Course Nature</label>
            <br />
            <select required>
              <option value="">Select course nature</option>
              <option value="">Online</option>
              <option value="">Offline</option>
            </select>
            <label htmlFor="">Country (Optional)</label>
            <br />
            <select>
              <option value="">select country</option>
              <option value="">India</option>
              <option value="">America</option>
              <option value="">Japan</option>
              <option value="">South Korea</option>
            </select>
            <label htmlFor="">Message(Optional)</label>
            <br />

            <textarea placeholder="write your message"></textarea>
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="content">
        <h1>
          Excellence Redefined: Kelmac's Training Solutions -{" "}
          <span>Tailored</span>
        </h1>
        <p>
          We address the frustration of generic training by offering customized
          ISO solutions that focus only on your critical compliance and
          performance needs. Our flexible scheduling ensures training happens on
          your timeline, minimizing disruption while delivering immediate,
          actionable value. With expert-led sessions, we empower your team to
          achieve lasting improvements and certification success faster.
        </p>
      </div>
      <div className="group">
        <img src={group} alt="" />
      </div>
    </section>
  );
};

export default PageOne;
