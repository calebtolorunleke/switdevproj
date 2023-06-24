import React from "react";
import Femaledoc from "../pictures/Femaledoc.png";
import "@fontsource/poppins";

export const SuccessBooking = () => {
  return (
    <div
      className="container"
      style={{ margin: "5rem", fontFamily: "poppins" }}
    >
      <div className="pt-3 mb-5" style={{ margin: "-3rem" }}>
        <h4 style={{ position: "absolute", left: "10rem" }}>
          <b
            style={{
              border: "1px solid #1F605F",
              fontSize: "1.5rem",
              borderRadius: "50%",
              color: "#1F605F",
              padding: "0.3rem 0.5rem",
            }}
          >
            DA!
          </b>
          <span>
            <strong style={{ color: "#1F605F" }}>D</strong>
          </span>
          ocAhoy!
        </h4>
      </div>
      <div className=" container m-5" style={{ width: "95%" }}>
        <div
          style={{
            border: "1px solid darkgrey",
            borderRadius: "5px",
            width: "67%",
            marginTop: "5rem",
            height: "77vh",
          }}
        >
          <table
            className="table table-bordered"
            style={{ color: "GrayText", fontSize: "14.5px" }}
          >
            <tr>
              <td className="p-3">
                We notified Dr Badmus Lawal of your booking <br></br>Examination
                Fees: 15000 NGN <br></br>Clinic Number : 07033316157
              </td>
              <td></td>
            </tr>
            <th
              className="p-1 text-center"
              style={{
                fontSize: "18px",
                color: "#000000",
              }}
            >
              <p style={{ marginRight: "-32rem" }}> Booking Details</p>
            </th>
            <tr>
              <td className="p-3">Patient Name</td>
              <td>Faith Tope Oluwatobi</td>
            </tr>
            <br></br>
            <tr>
              <td className="p-3">Booking Date</td>
              <td style={{ color: "#000000" }}>
                Tomorrow May 18 - 11:00 AM , <b>Appointment reservation</b>
              </td>
            </tr>
            <br></br>
            <tr>
              <td className="p-3">Doctor Name</td>

              <td style={{ color: "#161F1F" }}>Dr. Badmus Lawal</td>
            </tr>
            <br></br>
            <tr>
              <td className="p-3">Waiting Time</td>
              <td>Not Available</td>
            </tr>
            <br></br>
            <tr>
              <td className="p-3">Clininc Address</td>
              <td>Lagos Island: 11 Breadfruit street , Marina</td>
            </tr>
            <br></br>
            <tr className="p-3" style={{ textAlign: "center" }}>
              <a href="SignUp">
                <button
                  style={{
                    backgroundColor: "#329D9C",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                    fontSize: "20px",
                    width: "12rem",
                    height: "3.5rem",
                    marginRight: "-32rem",
                  }}
                >
                  <b>Payment</b>
                </button>
              </a>
            </tr>
          </table>
        </div>
        <img
          style={{ marginTop: "-43rem", float: "right" }}
          src={Femaledoc}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default SuccessBooking;
