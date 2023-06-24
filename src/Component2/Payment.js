import React from "react";
import "@fontsource/poppins";
import { Card, Container } from "react-bootstrap";
import { MdRadioButtonChecked } from "react-icons/md";
import Cardpayment from "../pictures/Cardpayment.png";
import { RiErrorWarningLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

export const Payment = () => {
  return (
    <Container>
      <div className="pt-3 mb-5">
        <h4 style={{ position: "absolute", left: "15rem" }}>
          <strong
            style={{
              border: "1px solid #1F605F",
              fontSize: "1.5rem",
              borderRadius: "50%",
              color: "#1F605F",
              padding: "0.3rem 0.5rem",
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
      <Card
        className="container w-75"
        style={{
          margin: "5rem 5rem 3rem 10rem",
          height: "70vh",
          fontFamily: "poppins",
        }}
      >
        <div>
          <div
            className="d-flex"
            style={{
              backgroundColor: "#ABD7D6",
              marginLeft: "-.8rem",
              marginRight: "-.8rem",
              border: "none",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <div className="p-1">
              <MdRadioButtonChecked
                className="ms-4"
                style={{ fontSize: "3rem", color: "#55AEAD" }}
              />
            </div>
            <div className="ms-3">
              <p className="p-1">
                <b style={{ fontSize: "20px" }}>Credit & Debit Cards</b>
                <br></br>
                Transaction fee may apply
              </p>
            </div>
            <img
              style={{ marginLeft: "20rem" }}
              src={Cardpayment}
              alt=""
              height="75px"
              width="330px"
            ></img>
          </div>
          <div className="p-3">
            <form style={{ color: "#6C6C6C", fontSize: "20px" }}>
              <div className="mt-2 form-group">
                <label for="name">Cardholder Name</label> <br></br>
                <input type="text" className="form-control border-1"></input>
              </div>
              <br></br>
              <div className="form-group">
                <label for="number">Card Number</label>
                <input
                  type="number"
                  placeholder="5992"
                  className="form-control border-1"
                />
              </div>
              <br></br>
              <div className="form-group d-flex">
                <div>
                  <label for="expiration date">Expiration Date</label>
                  <div className="d-flex">
                    <input
                      type="number"
                      placeholder="MM"
                      className="form-control w-25"
                    />
                    <input
                      type="number"
                      className="form-control w-25 ms-3"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
                <div style={{ marginLeft: "-6rem" }}>
                  <label for="CVV">CVV</label>
                  <div className="d-flex">
                    <input
                      type="number"
                      className="form-control w-50"
                      maxLength="3"
                    />
                    <RiErrorWarningLine
                      className="ms-2"
                      style={{ fontSize: "1.5rem" }}
                    />
                    <span className="ms-1" style={{ color: "#000000" }}>
                      3 Digits
                    </span>
                  </div>
                </div>
              </div>
              <br></br>
              <div>
                <input type="checkbox" />
                <span
                  className="ms-2"
                  style={{ color: "#000000", fontSize: "16px" }}
                >
                  I Have Read And Accept The Terms Of Use And Privacy Policy.
                </span>
              </div>
              <br></br>
              <div>
                <button
                  className="w-100"
                  style={{
                    backgroundColor: "#55AEAD",
                    height: "4rem",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                  }}
                >
                  Confirm Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </Card>
      <div
        className="container d-flex w-75"
        style={{
          margin: "-2rem 5rem 2rem 10rem",
          border: "1px solid darkgrey",
          borderRadius: "4px",
          fontFamily: "poppins",
        }}
      >
        <RiCheckboxBlankCircleFill
          style={{ fontSize: "3rem", color: "#EBF5F5" }}
        />
        <div className="ms-5">
          <p>
            <b>Cash Payment</b> <br></br>
            No additional cost
          </p>
        </div>
      </div>
    </Container>
  );
};
export default Payment;
