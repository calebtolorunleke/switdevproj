import React, { Component } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default class PMATop extends Component {
  render() {
    return (
      <div style={{ position: "absolute", marginTop: "2rem" }}>
        {/* Grey Div */}
        <div
          style={{ backgroundColor: "#7C7C7C", width: "60rem", height: "2rem" }}
        >
          {/* Arrow Icon */}
          <HiOutlineArrowNarrowLeft
            style={{ width: "2rem", height: "2rem", marginLeft: "3rem" }}
          />
          <h5 style={{ marginTop: "-2rem", paddingLeft: "15rem" }}>
            <b> My Appointment</b>
          </h5>
        </div>
        {/* Green Div */}
        <div
          style={{
            backgroundColor: "#88C6C6",
            width: "57rem",
            height: "2rem",
            borderRadius: "10px 10px 0 0",
            margin: "2rem 0 0 1.5rem",
          }}
        >
          <h5 class="mx-3">
            <b>Approved Appointment</b>
          </h5>
          <h5 style={{ margin: "-2rem 0 0 40rem" }}>
            <b> Cancelled Appointment</b>
          </h5>
        </div>
      </div>
    );
  }
}
