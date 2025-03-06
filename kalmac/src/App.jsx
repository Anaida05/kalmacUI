import React from "react";
import Navbar from "./component/Navbar";
import PageOne from "./component/PageOne"
import PageTwo from "./component/PageTwo";
import PageThree from "./component/PageThree";
const App = () => {
  return (
    <div>
      <Navbar />
      <PageOne/>
      <PageTwo/>
      <PageThree/>
    </div>
  );
};

export default App;
