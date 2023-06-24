import React from "react";
import "../Styles/SPHeader.css";

const SPHearder = () => {
  return (
    <div>
      <div class="pt-3">
        {/* The Header  */}
        <div>
          <h4
            style={{
              position: "absolute",
              marginLeft: "5rem",
              fontSize: "1.3rem",
            }}
          >
            <strong
              // Styling the logo/
              style={{
                border: "solid 1px #1F605F",
                fontSize: "1.5rem",
                borderRadius: "50%",
                padding: " 0.3rem 0.5rem  ",
                color: "#1F605F",
                marginLeft: "-3rem",
              }}
            >
              DA!
            </strong>
            <span>
              <strong style={{ color: "#1F605F" }}>D</strong>
            </span>
            ocAhoy!
          </h4>
        </div>

        {/* Navigation */}
        <ul class="text-end mt-3">
          {/* Home Nav */}
          <ls style={{ marginRight: "3rem", fontSize: "0.9rem" }}>Home</ls>

          {/* Our services Nav */}
          <ls style={{ marginRight: "3rem", fontSize: "0.9rem" }}>
            Our services
          </ls>

          {/* About us Nav  */}
          <ls style={{ marginRight: "3rem", fontSize: "0.9rem" }}>About us</ls>

          {/* Signup Nav */}
          <ls style={{ marginRight: "2rem" }}>
            {/* Sign up link */}
            <a
              href="www.google.com"
              style={{
                color: "#55AEAD",
                fontSize: "0.9rem",
                textDecoration: "none",
                marginRight: "10rem",
              }}
            >
              Sign Up
            </a>
          </ls>
        </ul>

        {/* Log in dropdown */}
        <div
          class="dropdown"
          style={{ marginLeft: "50rem", marginTop: "-3rem" }}
        >
          <button
            class="btn dropdown-toggle"
            type="button"
            style={{
              backgroundColor: "#EBF5F5",
              color: "black",
              padding: "5px",
              fontSize: "16px",
              height: "2rem",
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            Log In
          </button>
          {/* Dropdown content */}
          <div class="dropdown-content">
            <p style={{ fontSize: "1rem", height: "2rem" }}>Patient's Login</p>
            <p style={{ fontSize: "1rem", height: "2rem" }}>Doctor's Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPHearder;
