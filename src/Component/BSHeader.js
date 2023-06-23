import React from "react";
import { RxPerson } from "react-icons/rx";

const BSHeader = () => {
  return (
    <div>
      <div class="pt-3">
        {/* The Header  */}
        <div>
          <h4
            style={{
              position: "absolute",
              left: "5rem",
              fontSize: "1.3rem",
            }}
          >
            <strong
              // Styling the logo/
              style={{
                border: "solid 1px #1F605F",
                fontSize: "1.5rem",
                borderRadius: "50%",
                color: "#1F605F",
                padding: " 0.3rem  0.5rem ",
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
        <ul class="text-end">
          {/* Home Nav */}
          <ls style={{ marginRight: "3rem", fontSize: "0.9rem" }}>Home</ls>

          {/* Our services Nav */}
          <ls style={{ marginRight: "3rem", fontSize: "0.9rem" }}>
            Our services
          </ls>

          {/* About us Nav  */}
          <ls style={{ marginRight: "3rem", fontSize: "0.9rem" }}>About us</ls>

          {/* You are logged in Nav */}
          <ls style={{ marginRight: "2rem" }}>
            <button
              style={{
                borderRadius: "5px",
                backgroundColor: "#55AEAD",
                fontSize: "0.8rem",
                border: "none",
                color: "white",
                height: "1.8rem",
              }}
            >
              You are logged in
            </button>
          </ls>

          {/* Person logo Nav */}
          <ls style={{ marginRight: "3rem" }}>
            {/* Person icon */}
            <RxPerson
              style={{
                width: "1.5rem",
                height: "1.5rem",
                color: "#55AEAD",
              }}
            />
          </ls>
        </ul>
      </div>
    </div>
  );
};

export default BSHeader;
