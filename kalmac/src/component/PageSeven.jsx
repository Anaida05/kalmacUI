import React from "react";
import curve2 from "./images/Vector 2.png";
import "./Styles/PageSeven.css";
const PageSeven = () => {
  return (
    <div className="page-seven-container">
      <div className="page-seven-quote">
        <h2>Get a Quote</h2>
        <img className="curve" src={curve2} alt="curve" />
        <p>
          Please take the time to complete the following form and provide us
          with as much information as you are able to ensure we can deal with
          your request as promptly.
        </p>
      </div>
      <div className="page-seven-form">
        <form action="">
          <label htmlFor="">Full Name</label>
          <br />
          <input className="fName" type="text" name="" id="" placeholder="enter full name" />
          <br />
          <div className="option-parent-div">
            <div className="option-div-left">
              <label htmlFor="country">Country (Optional)</label>
              <br />
              <select name="country" id="">
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="America">America</option>
                <option value="Sri Lanka">Sri Lanka</option>
              </select>
              <br />

              <label htmlFor="country">Training you are looking for</label>
              <br />
              <select name="country" id="">
                <option value="India">Select Training</option>
                <option value="Japan">
                  ISO 9001:2015 Lead Auditor Training Course
                </option>
                <option value="America">
                  ISO 9001:2015 Lead Auditor Training Course
                </option>
                <option value="Sri Lanka">
                  ISO 9001:2015 Lead Auditor Training Course
                </option>
              </select>
            </div>
            <div className="option-div-right">
              <label htmlFor="" >Email ID</label> <br />
              <input className="option-email" type="text" name="" id="" placeholder="enter email id" />
              <br />
              <label htmlFor="">Course Nature</label>
              <br />
              <select name="" id="">
                <option value="">select course nature</option>
                <option value="">Offline</option>
                <option value="">Online</option>
              </select>
            </div>
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PageSeven;
