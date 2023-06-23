import React, { Component } from "react";
import { FaFacebookF } from "react-icons/fa";

export default class SPForm extends Component {
  render() {
    return (
      <div class="mt-4">
        <div
          // Signup styling
          style={{
            width: "31.25rem",
            height: "2rem",
            backgroundColor: "#55AEAD",
            marginTop: "2rem",
            position: "absolute",
            left: "14rem",
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
            marginTop: "4rem",
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
              marginTop: "1.5rem",
              marginLeft: "10rem",
              position: "absolute",
              width: "13rem",
            }}
          >
            {/* Button to connect to Facebook */}
            {/* Facebook icon */}
            <FaFacebookF />
            <span style={{ fontSize: "13px", paddingLeft: "0.5rem" }}>
              Connect with Facebook
            </span>
          </button>

          {/* Signup Form */}
          <div style={{ position: "absolute", top: "110px" }}>
            {/* line */}
            <hr
              style={{
                width: "53%",
                position: "absolute",
                marginTop: "-1.7rem",
                marginLeft: "15.9rem",
              }}
            />
            {/* styling for OR in between the lines */}
            <p
              style={{
                position: "absolute",
                marginTop: "-2.7rem",
                marginLeft: "13.9rem",
                width: "2rem",
                border: "1px solid darkgray",
                padding: "3px",
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
                width: "48%",
                marginTop: "-1.7rem",
                marginLeft: "0.7px",
              }}
            />
            {/* Signup form */}
            <div style={{ fontSize: "0.9rem", justifyContent: "center" }}>
              {/*  Name */}
              <label style={{ marginLeft: "2rem" }}>Your Name</label>
              <input
                type="text"
                placeholder="First name and last name"
                style={{ width: "19rem", marginLeft: "3.7rem" }}
              ></input>
              <br />
              <br />
              {/* Mobile number */}
              <label style={{ marginLeft: "2rem" }}>Mobile number</label>
              <input
                type="text"
                placeholder="Mobile number"
                style={{ marginLeft: "2rem", width: "19rem" }}
              ></input>
              <br />
              <br />
              {/* Email Address */}
              <label style={{ marginLeft: "2rem" }}>Email Address</label>
              <input
                type="text"
                placeholder="example.domain.com"
                style={{ marginLeft: "2.5rem", width: "19rem" }}
              ></input>
              <br />
              <br />
              {/* Gender */}
              <label style={{ marginLeft: "2rem" }}>Gender</label>
              <input
                type="radio"
                name="female"
                style={{ marginLeft: "5.5rem" }}
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
              <label style={{ marginLeft: "2rem" }}>Birth Date</label>
              <input
                type="text"
                style={{ marginLeft: "4rem", width: "19rem" }}
              ></input>
              <br />
              <br />
              {/* Password */}
              <label style={{ marginLeft: "2rem" }}>Password</label>
              <input
                type="password"
                style={{ marginLeft: "4.2rem", width: "19rem" }}
              ></input>
              <br />
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: "0.8rem",
                marginTop: "2rem",
                marginLeft: "5rem",
              }}
            >
              By signing up you agree to our
              <a
                href="www.google.com"
                style={{ marginLeft: "0.5rem", color: "#55AEAD" }}
              >
                Terms of Use
              </a>
            </p>{" "}
            {/* Join button */}
            <button
              style={{
                borderRadius: "4px",
                backgroundColor: "#55AEAD",
                fontSize: "0.9rem",
                border: "solid 1px #55AEAD",
                color: "white",
                marginLeft: "13rem",
                marginTop: "5px",
              }}
            >
              Join Now
            </button>
          </div>
          {/* line */}
          <hr
            style={{ marginTop: "31rem", width: "75%", marginLeft: "5rem" }}
          />
          <p
            style={{
              marginTop: "1rem",
              textAlign: "center",
              left: "150px",
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
