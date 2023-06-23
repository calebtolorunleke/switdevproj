import React from "react";
import PMATop from "./PMATop";
import PMABody from "./PMABody";

const PpMyAppointment = () => {
  return (
    <div
      // Designing the Background of the page
      class="container mt-2 px-5"
      style={{
        backgroundColor: "#EBF5F5",
        width: "67rem",
        height: "41rem",
        marginBottom: "3rem",
      }}
    >
      {/* Importing all the Components for the page */}
      <PMATop />
      <PMABody />
    </div>
  );
};

export default PpMyAppointment;
