import React from "react";
import { Container } from "react-bootstrap";
import Circle from "../Pictures/Circle.png";
import Human from "../Pictures/Human.png";
import Vshape from "../Pictures/Vshape.png";

const Slist = () => {
  return (
    <Container className="container">
      <div>
        <button
          style={{
            borderRadius: "40px",
            width: "100px",
            color: "#1F605F",
            borderColor: "#1F605F",
            backgroundColor: "#EBF5F6",
            height: "50px",
          }}
          className="mt-4"
        >
          <h1 style={{ fontSize: "45px", marginTop: "-5px" }}>
            <strong> DA! </strong>
          </h1>
        </button>
        <h1 style={{ margin: "-50px 0px 0px 100px ", color: "#1F605F" }}>
          {" "}
          D{" "}
        </h1>{" "}
        <h1 style={{ margin: "-49px 0px 0px 127px " }}> ocAhoy!</h1>
      </div>
      <div
        style={{
          float: "right",
          margin: "-30px 0px 0px -50px",
        }}
      >
        <a href="/" className="m-3 text-decoration-none text-dark">
          Home
        </a>
        <a href="Services" className="m-3 text-decoration-none text-dark">
          Our Sevices
        </a>
        <a href="About us" className="m-3 text-decoration-none text-dark">
          About Us
        </a>
        <button
          className="rounded text-decoration-none p-1"
          style={{ backgroundColor: "#EBF5F6", border: "0.5px solid" }}
        >
          <a href="Login" className="m-2 text-decoration-none text-dark w-25">
            Login <img src={Vshape} alt="" style={{ width: "18px" }} />
          </a>
        </button>
        <img
          src={Circle}
          alt=""
          className="ms-5 me-1"
          style={{ marginTop: "-26px" }}
        />

        <div>
          {" "}
          <img
            src={Human}
            alt=""
            style={{ float: "right", marginTop: "-20px", marginLeft: "10px" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Slist;
