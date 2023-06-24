import React from "react";

const GPFooter = () => {
  return (
    <div>
      {/* Page Footer */}
      {/* line */}
      <hr
        style={{
          marginTop: "5rem",
          width: "90%",
          marginLeft: "2.5rem",
        }}
      />

      <footer>
        <div class="row">
          {/* First Column */}
          <div class="col-sm-2" style={{ marginLeft: "3rem" }}>
            <ul
              style={{
                listStyleType: "none",
                lineHeight: "2rem",
                fontSize: "0.75rem",
              }}
            >
              {/* List Heading */}
              <h6
                style={{
                  fontSize: "0.75rem",
                  paddingTop: "0.5rem",
                  color: "#55AEAD",
                }}
              >
                DocAhoy!
              </h6>
              {/* List */}
              <li>Home</li>
              <li>Our Services</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Make An Appointment</li>
            </ul>
          </div>
          {/* Second Column */}
          <div class="col-sm-2" style={{ marginLeft: "-2rem" }}>
            <ul
              style={{
                listStyleType: "none",
                lineHeight: "2rem",
                fontSize: "0.75rem",
              }}
            >
              {/* List Heading */}
              <h6
                style={{
                  fontSize: "0.75rem",
                  paddingTop: "0.5rem",
                  color: "#55AEAD",
                }}
              >
                Hmo Insurance
              </h6>
              {/* List */}
              <li>Axa Monsard</li>
              <li>Reliance</li>
              <li>Nhis</li>
              <li>Hygeia</li>
              <li>Avon</li>
              <li>Metro Health</li>
              <li>Alico</li>
              <li>IHMS</li>
            </ul>
          </div>
          {/* Third Column */}
          <div class="col-sm-2" style={{ marginLeft: "-2rem" }}>
            <ul
              style={{
                listStyleType: "none",
                lineHeight: "2rem",
                fontSize: "0.75rem",
              }}
            >
              {/* List Heading */}
              <h6
                style={{
                  fontSize: "0.75rem",
                  paddingTop: "0.5rem",
                  color: "#55AEAD",
                }}
              >
                Top Specialities
              </h6>
              {/* List */}
              <li>Primary Health Care</li>
              <li>Urgent Care</li>
              <li>Dentist</li>
              <li>Cardiologist</li>
              <li>Ear, Nose & Throat</li>
              <li>Neurologist</li>
              <li>Paediatrician</li>
              <li>Urologist</li>
              <li>Orthopedic Surgeon</li>
            </ul>
          </div>
          <div
            // Fourth Column
            class="col-sm-2"
            style={{ marginLeft: "-1rem", paddingTop: "0.5rem" }}
          >
            <ul
              style={{
                listStyleType: "none",
                lineHeight: "2rem",
                fontSize: "0.75rem",
              }}
            >
              {/* List Heading */}
              <h6
                style={{
                  fontSize: "0.75rem",
                  paddingTop: "0.2rem",
                  color: "#55AEAD",
                }}
              >
                Location
              </h6>
              {/* List */}
              <li>Lagos </li>
              <li> Port-Harcourt</li>
              <li>Ondo</li>
              <li>Calabar</li>
              <li>Enugu</li>
              <li>Kaduna</li>
              <li>Jos</li>
              <li>Owerri</li>
              <li>Ibadan</li>
            </ul>
          </div>
          {/* Fifth Column */}
          <div class="col-sm-4" style={{ marginLeft: "-3rem" }}>
            <ul
              style={{
                listStyleType: "none",
                lineHeight: "2rem",
                fontSize: "0.75rem",
              }}
            >
              {/* List Heading */}
              <h6
                style={{
                  fontSize: "0.75rem",
                  paddingTop: "0.5rem",
                  color: "#55AEAD",
                }}
              >
                Are you a top Doctor or Health service?
              </h6>
              {/* List */}
              <li>List Your Practice On DocAhoy</li>
              <li>Learn About DocAhoy For Health Systems</li>
              <li>Become On DocAhoy Partner</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GPFooter;
