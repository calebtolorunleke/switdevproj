import React from "react";
import GPHeader from "./GPHeader";
import GPDivOne from "./GPDivOne";
import GPDivTwo from "./GPDivTwo";
import GPDivThree from "./GPDivThree";
import GPFooter from "./GPFooter";

const GeneralPractitioner = () => {
  return (
    <div
      // Designing the Background of the page
      class="container"
      style={{
        backgroundColor: "whitesmoke",
        width: "65rem",
        height: "95rem",
        position: "relative",
        marginTop: "1rem",
        marginBottom: "3rem",
      }}
    >
      {/* Importing all the Components for the page */}
      <GPHeader />
      <GPDivOne />
      <GPDivTwo />
      <GPDivThree />
      <GPFooter />
    </div>
  );
};

export default GeneralPractitioner;
