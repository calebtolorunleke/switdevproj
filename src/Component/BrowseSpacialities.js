import React from "react";
import BSHeader from "./BSHeader";
import BSBody from "./BSBody";
import BSFooter from "./BSFooter";

const BrowseSpacialities = () => {
  return (
    <div
      // Designing the Background of the page
      class="container"
      style={{
        backgroundColor: "#EBF5F5",
        width: "65rem",
        height: "50rem",
        position: "relative",
        marginTop: "1rem",
        marginBottom: "3rem",
      }}
    >
      {/* Importing all the Components for the page */}
      <BSHeader />
      <BSBody />
      <BSFooter />
    </div>
  );
};

export default BrowseSpacialities;
