import React from "react";
import Navbar from "./component/Navbar";
import PageOne from "./component/PageOne"
import PageTwo from "./component/PageTwo";
import PageThree from "./component/PageThree";
// import PageFour from "./component/PageFour";
import PageFive from "./component/PageFive";
import PageSix from "./component/PageSix";
import PageSeven from "./component/PageSeven";
const App = () => {
  return (
    <div>
      <Navbar />
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      {/* <PageFour/> */}
      <PageFive/>
      <PageSix/>
      <PageSeven/>
    </div>
  );
};

export default App;
