import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";

export default class GPDivThree extends Component {
  render() {
    return (
      // Background styling for the Third Div
      <div
        style={{
          backgroundColor: "#ABD7D6",
          width: "58rem",
          height: "18rem",
          marginTop: "1rem",
          marginLeft: "3rem",
          borderRadius: "7px",
        }}
      >
        <div class="col-sm-6">
          {/* First Col */}
          {/* Div Image */}
          <img
            src="./Images/Ellipse 16 (3).png"
            alt="div3img"
            style={{ width: "15rem", height: "15rem", marginTop: "1rem" }}
          />
        </div>
        {/*  Second Column*/}
        <div style={{ marginLeft: "20rem", marginTop: "-14rem" }}>
          {/* Column Caption */}
          <h4>Dr. Sarah Chidi </h4>
          <h6 class="text-light">General Physician</h6>

          <ul style={{ color: "#55AEAD", marginLeft: "-2rem" }}>
            {/* Star icons */}
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
            <ls>
              <AiFillStar />
            </ls>
          </ul>

          <p
            style={{ fontSize: "10px", marginLeft: "6rem", marginTop: "-2rem" }}
          >
            (Overall Rating From 5 Visitors)
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            General practitioner speciallized in paediatric general <br />
            practice and Adult General Practice
          </p>
          <p style={{ fontSize: "0.7rem" }}>Lagos Island: Marina</p>
          <h6 style={{ fontSize: "0.8rem" }}>Joined Recently</h6>
          <p style={{ fontSize: "0.7rem", color: "white" }}>Fees: 15,000 NGN</p>
          {/* Button for booking */}
          <button
            style={{
              backgroundColor: "#55AEAD",
              border: "1px #55AEAD solid",
              color: "white",
              borderRadius: "5px",
              marginTop: "-4rem",
              marginLeft: "29rem",
              position: "absolute",
              height: "2rem",
            }}
          >
            Book Now
          </button>
        </div>

        {/* Third Column */}
        {/* Available time dropdown */}
        <div class="dropdown1">
          <button
            // Dropdown background styling
            style={{
              backgroundColor: "#EBF5F5",
              borderRadius: "5px",
              border: " 1px black solid ",
              height: "2.3rem",
              marginTop: "-30rem",
              marginLeft: "46.5rem",
            }}
            // dropdown icon
            class="btn dropdown-toggle"
            type="button"
          >
            {/* Dropdown caption */}
            Available Time
          </button>
          <div
            class="dropdown-content1"
            style={{ marginTop: "-14.4rem", marginLeft: "47rem" }}
          >
            {/* Dropdown content */}
            <p style={{ fontSize: "1rem", height: "2rem" }}>8am-9am</p>
            <p style={{ fontSize: "1rem", height: "2rem" }}>9am-10am</p>
            <p style={{ fontSize: "1rem", height: "2rem" }}>10am-11am</p>
            <p style={{ fontSize: "1rem", height: "2rem" }}>11am-12noon</p>
            <p style={{ fontSize: "1rem", height: "2rem" }}>1pm-2pm</p>
            <p style={{ fontSize: "1rem", height: "2rem" }}>2pm-3pm</p>
          </div>
        </div>
      </div>
    );
  }
}
