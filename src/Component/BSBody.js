import React, { Component } from "react";

export default class BSBody extends Component {
  render() {
    return (
      <div>
        <div class="mt-5 ">
          {/* Heading */}

          <h4 class="" style={{ marginLeft: "3rem" }}>
            Book Specialities
          </h4>
          {/* Line */}
          <hr style={{ width: "94%", marginLeft: "2.5rem" }} />
          <div class="row" style={{ fontSize: "0.75rem", margin: "auto" }}>
            {/* First Column */}
            <div class="col-sm-3 mt-3">
              {/* Column List */}
              <ul style={{ listStyleType: "none" }}>
                <li>General Practitioner</li>
                <hr style={{ width: "12rem" }} />
                <li>Denistry</li>
                <hr style={{ width: "12rem" }} />
                <li>Urgent Care</li>
                <hr style={{ width: "12rem" }} />
                <li>OBGYN's</li>
                <hr style={{ width: "12rem" }} />
              </ul>
            </div>
            {/* Second Column */}
            <div class="col-sm-3 mt-3" style={{}}>
              <ul style={{ listStyleType: "none" }}>
                {/* Column List */}
                <li>Psychiatrist</li>
                <hr style={{ width: "12rem" }} />
                <li>Pediatric</li>
                <hr style={{ width: "12rem" }} />
                <li>Pharmacist</li>
                <hr style={{ width: "12rem" }} />
                <li>Dermatologist</li>
                <hr style={{ width: "12rem" }} />
              </ul>
            </div>
            {/* Third Column */}
            <div class="col-sm-3 mt-3">
              <ul style={{ listStyleType: "none" }}>
                {/* Column List */}
                <li>Optometrists</li>
                <hr style={{ width: "12rem" }} />
                <li>Orthopedic Surgeon</li>
                <hr style={{ width: "12rem" }} />
                <li>Anaesthesiologists</li>
                <hr style={{ width: "12rem" }} />
                <li>General Surgeon</li>
                <hr style={{ width: "12rem" }} />
              </ul>
            </div>
            {/* Fourth Column */}
            <div class="col-sm-3 mt-3">
              <ul style={{ listStyleType: "none" }}>
                {/* Column List */}
                <li>Veterinarians</li>
                <hr style={{ width: "12rem" }} />
                <li>Plastic Surgeon</li>
                <hr style={{ width: "12rem" }} />
                <li>Chiropractor</li>
                <hr style={{ width: "12rem" }} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
