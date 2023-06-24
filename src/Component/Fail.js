import React from "react";
import Oops from "../Pictures/Oops.png";
import { Container } from "react-bootstrap";
import Cancel from "../Pictures/Cancel.png";

const Fail = () => {
  return (
    <Container style={{ height: "100vh" }}>
      <div>
        <div>
          <img src={Oops} alt="" width="600px" />
          <div style={{ marginLeft: "50%" }}>
            <div
              className=" bg-white "
              style={{
                borderRadius: "100px",
                paddingLeft: "20px",
                height: "150px",
                width: "150px",
              }}
            >
              <img
                src={Cancel}
                alt=""
                width="50px"
                style={{
                  marginTop: "50px",
                  marginBottom: "50px",
                  marginLeft: "30px",
                }}
              />
            </div>
            <div>
              <h2 className="mt-4">Ooooops!</h2>
              <p>Something went wrong</p>
            </div>
          </div>
          <div style={{ marginLeft: "47%" }}>
            <div>
              <button
                className=" text-decoration-none p-2 mt-5"
                style={{
                  backgroundColor: "#55AEAD",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <a
                  href="Services"
                  className="m-2 text-decoration-none text-white"
                  style={{
                    padding: "0 80px 0 80px",
                  }}
                >
                  try again
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <img src={Oops} alt="" width="600px" style={{ float: "right" }} />
        </div>
        <div>
          <footer style={{ marginTop: "500px" }}>
            Created by Oluwanishola
          </footer>
        </div>
      </div>
    </Container>
  );
};

export default Fail;
