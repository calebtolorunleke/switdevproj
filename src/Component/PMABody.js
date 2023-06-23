import React from "react";
import { BsJournalBookmark } from "react-icons/bs";

import "../Styles/PMABody.css";

const PMABody = () => {
  return (
    <div class="bodydiv">
      {/* Journal Icon */}
      <BsJournalBookmark
        style={{
          width: "6rem",
          height: "6rem",
          marginTop: "3rem",
          marginLeft: "18rem",
          color: "#88C6C6",
          backgroundColor: "whitesmoke",
          borderRadius: "2.7rem",
          padding: "1rem 0.1rem 1rem 0.1rem",
        }}
      />
      {/* Captions on the background image */}
      <h2 class="fs-3 mt-5" style={{ marginLeft: "6rem" }}>
        You Do Not Have Any Appointments
      </h2>
      <p style={{ marginLeft: "10rem", fontSize: "0.8rem" }}>
        Here You Will See All Completed And Cancelled Appointments
      </p>
    </div>
  );
};

export default PMABody;
