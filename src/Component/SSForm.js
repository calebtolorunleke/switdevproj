import React, { Component } from "react";
import { FaFacebookF } from "react-icons/fa";

export default class SSForm extends Component {
  render() {
    return (
      <div>
        <div
          // Signup styling
          style={{
            width: "31.25rem",
            height: "2rem",
            backgroundColor: "#55AEAD",
            marginTop: "3rem",
            position: "relative",
            left: "13.3rem",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <p
            style={{ color: "white", fontSize: "0.9rem", textAlign: "center" }}
          >
            Sign Up
          </p>
        </div>
        {/* Connect to facebook styling */}
        <div
          style={{
            width: "500px",
            height: "600px",
            backgroundColor: "white",
            justifyContent: "center",
            marginTop: "-1px",
            position: "absolute",
            left: "14rem",
            borderRadius: "0 0 10px 10px ",
          }}
        >
          <button
            style={{
              backgroundColor: "#55AEAD",
              color: "white",
              border: "#55AEAD solid 1px",
              borderRadius: "3px",
              margin: "1.5rem 0 0 10rem",
              position: "absolute",
              width: "13rem",
            }}
          >
            {/* Button to connect to Facebook */}
            {/* Facebook icon */}
            <FaFacebookF />
            <span style={{ fontSize: "0.9rem", paddingLeft: "0.5rem" }}>
              Connect with Facebook
            </span>
          </button>

          {/* Signup Form */}
          <div
            style={{ position: "absolute", top: "110px", marginLeft: "1rem" }}
          >
            {/* line */}
            <hr
              style={{
                width: "52%",
                position: "absolute",
                margin: "-1.7rem 0 0 15.9rem",
              }}
            />
            <p
              // styling for OR in between the lines
              style={{
                position: "absolute",
                margin: "-2.7rem 0 0 13.9rem",
                width: "2rem",
                padding: "3px",
                border: "1px solid darkgray ",
                borderRadius: "2rem",
                textAlign: "center",
                color: "darkgray",
              }}
            >
              or
            </p>
            {/* line */}
            <hr
              style={{
                position: "absolute",
                width: "54%",
                margin: "-1.7rem 0 0 -1rem",
              }}
            />
            {/* Signup form */}
            <div style={{ fontSize: "0.9rem", justifyContent: "center" }}>
              {/*  Name */}
              <label style={{ marginLeft: "1rem" }}>Your Name</label>{" "}
              <input
                type="text"
                placeholder="First name and last name"
                style={{ width: "19rem", marginLeft: "3rem" }}
              ></input>
              <br />
              <br />
              {/* Mobile number */}
              <label style={{ marginLeft: "1rem" }}>Mobile number</label>
              <input
                type="text"
                placeholder="Mobile number"
                style={{ marginLeft: "1.5rem", width: "19rem" }}
              ></input>
              <br />
              <br />
              {/* Email Address */}
              <label style={{ marginLeft: "1rem" }}>Email Address</label>
              <input
                type="text"
                placeholder="example.domain.com"
                style={{
                  marginLeft: "2rem",
                  width: "19rem",
                }}
              ></input>
              <br />
              <br />
              {/* Gender */}
              <label style={{ marginLeft: "1rem" }}>Gender</label>
              <input
                type="radio"
                name="female"
                style={{ marginLeft: "5rem" }}
              ></input>
              <label style={{ marginLeft: "0.5rem" }}>Female</label>
              <input
                type="radio"
                name="Male"
                style={{ marginLeft: "1rem" }}
              ></input>
              <label style={{ marginLeft: "0.5rem" }}>Male</label>
              <br />
              <br />
              {/* Birth date */}
              <label style={{ marginLeft: "1rem" }}>Birth Date</label>
              <input
                type="text"
                style={{ marginLeft: "3.5rem", width: "19rem" }}
              ></input>
              <br />
              <br />
              {/* Password */}
              <label style={{ marginLeft: "1rem" }}>Password</label>
              <input
                type="password"
                style={{ marginLeft: "3.7rem", width: "19rem" }}
              ></input>
              <br />
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: "0.8rem",
                margin: "2rem 0 0 5rem",
              }}
            >
              By signing up you agree to our
              <a
                href="www.google.com"
                style={{ marginLeft: "0.5rem", color: "#55AEAD" }}
              >
                Terms of Use
              </a>
            </p>
            {/* Join button */}
            <button
              style={{
                borderRadius: "4px",
                backgroundColor: "#55AEAD",
                fontSize: "0.9rem",
                border: "solid 1px #55AEAD",
                color: "white",
                margin: "10px 0 0 13rem",
              }}
            >
              Join Now
            </button>
          </div>
          {/* line */}
          <hr style={{ margin: "31rem 0 0 5rem", width: "75%" }} />
          <p
            style={{
              margin: "1rem 0 0 2rem",
              textAlign: "center",
              fontSize: "0.9rem",
            }}
          >
            Already Registered in DocAhoy?
            {/* Login link */}
            <a
              href="www.google.com"
              style={{
                marginLeft: "0.5rem",
                color: "#55AEAD",
                textDecoration: "none",
              }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    );
  }
}
