import React from "react";
import { Container } from "react-bootstrap";
import Girl from "../Pictures/Girl.png";
import { FcCheckmark } from "react-icons/fc";

const Success = () => {
  return (
    <Container style={{ height: "100vh" }}>
      <div className="d-flex">
        <img src={Girl} alt="" width="700px" />
        <img src={Girl} alt="" width="700px" />
      </div>
      <div style={{ marginLeft: "50%", marginTop: "-500px" }}>
        <div
          className=" bg-white  "
          style={{
            borderRadius: "100px",
            paddingLeft: "20px",
            height: "130px",
            width: "130px",
            marginLeft: "70px",
          }}
        >
          <p>
            {" "}
            <FcCheckmark
              size={40}
              style={{
                Color: "#55AEAD",
                marginLeft: "24px",
                marginTop: "35px",
              }}
            />
          </p>
        </div>
        <div style={{ alignItems: "center" }}>
          <div className="">
            <h2 className="mt-4">
              {" "}
              <strong>Payment Sucessful </strong>
            </h2>
            <p>Thank You For Choosing DocAhoy!, Check </p>
            <p className="ms-5">Email For Payment Reciept.</p>
          </div>
        </div>
        <div>
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
                  padding: "0 100px 0 100px",
                }}
              >
                try again
              </a>
            </button>
          </div>
        </div>
      </div>

      <div>
        <footer style={{ marginTop: "500px" }}>Created by Oluwanishola</footer>
      </div>
    </Container>
  );
};

export default Success;
