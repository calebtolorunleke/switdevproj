import React from "react";
import { Card, Container, Form, Table } from "react-bootstrap";
import Markb from "../Pictures/Markb.png";
import { TfiFacebook } from "react-icons/tfi";
import { MdCancel } from "react-icons/md";

const Logincess = () => {
  /*
  function handleClick() {
    Document.getElementbyid("you").style.display = "none";
  }
  */
  return (
    <div>
      <Container className="mt-5 p-5" style={{ height: "100vh" }}>
        <div
          className="mb-5  alert alert-dismissible text-white d-flex"
          id="you"
          style={{ marginLeft: "450px" }}
        >
          <button
            className="delete-button text-white  "
            style={{
              backgroundColor: "#55AEAD",
              border: "none",
              borderRadius: "10px",
              padding: "0px 50px 0px 50px",
              height: "80px",
            }}
          >
            <div className="d-flex pt-3">
              <p className="fs-4" style={{ marginRight: "220PX" }}>
                Success
              </p>
              <MdCancel size={25} className="close" data-dismiss="alert" />
            </div>
            <p style={{ marginTop: "-15px" }}>
              Your account has been sucessfully created
            </p>
          </button>
        </div>
        <Card
          className="w-50  "
          style={{ marginLeft: "350px", borderRadius: "10px" }}
        >
          <div>
            <p
              style={{ textAlign: "center", backgroundColor: "#88C6C6" }}
              className="pt-2 fs-4"
            >
              {" "}
              <strong>Login </strong>
            </p>
          </div>
          <div>
            <Form className="w-50 fs-4 ">
              <Form.Group controlId="Mobil or Email" className="ms-5 ">
                <Form.Label>
                  {" "}
                  Mobile or Email{" "}
                  <span className="required-sign text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email or number"
                  className="mb-3 pt-3 pb-3"
                  style={{ width: "30rem" }}
                />
              </Form.Group>
              <Form.Group controlId="password" className="w-50 fs-4 mb-5 ms-5">
                <Form.Label className="mt-5">
                  {" "}
                  Password <span className="required-sign text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  style={{ width: "30rem" }}
                  className="pt-3 pb-3"
                />
              </Form.Group>
            </Form>
            <div>
              <button
                type="submit"
                style={{
                  textAlign: "center",
                  backgroundColor: "#CC3636",
                  padding: "0px 210px 0 210px",
                  border: "none",
                  borderRadius: "10px",
                }}
                className="pt-3 pb-3 text-white ms-5"
              >
                {" "}
                Login
              </button>
            </div>
            <div className="d-flex mb-5">
              <div className="mt-3 ms-5">
                <img src={Markb} alt="" width="25px" />
                <p
                  style={{
                    color: "#6C6C6C7D",
                    marginLeft: "31px",
                    marginTop: "-22px",
                  }}
                >
                  Remember me
                </p>
              </div>
              <div className="mt-3" style={{ marginLeft: "165px" }}>
                <a href="/" style={{ color: "#1F605F" }}>
                  {" "}
                  Forget your password
                </a>
              </div>
            </div>
            <div className="d-flex mb-5">
              <hr style={{ width: "281px" }} />
              <button
                style={{
                  backgroundColor: "white",
                  width: "45px",
                  borderRadius: "25px",
                }}
                className="pt-2 pb-1 "
              >
                Or
              </button>
              <hr style={{ width: "281px" }} />
            </div>
          </div>
          <div>
            <button
              className="rounded text-decoration-none  mt-3 mb-5"
              style={{
                backgroundColor: "#55AEAD",
                border: "none",
                marginLeft: "130px",
                height: "40px",
              }}
            >
              <div className="d-flex">
                <a href="/" className="m-2 text-decoration-none text-white">
                  <TfiFacebook
                    fontSize={25}
                    style={{ marginRight: "300px", marginTop: "-4px" }}
                  />
                  <p style={{ marginTop: "-26px" }}>Continue with Facebook</p>
                </a>
              </div>
            </button>
          </div>
          <div
            className="fs-4 mt-5  mb-4 d-flex"
            style={{ color: "#1F605F", marginLeft: "160px" }}
          >
            <p className="me-5">New User ?</p>
            <a href="/" style={{ color: "#1F605F" }} className="ms-2">
              {" "}
              Sign Up
            </a>
          </div>
        </Card>
        <div className="mt-5 mb-5 pt-5">
          <hr />
        </div>
        <div className="table-responsive mt-2">
          <Table>
            <tr style={{ color: "#1F605F", fontSize: "18px" }}>
              <th className="pe-2 pb-4">DocAhoy!</th>
              <th className="pe-2 ps-2 pb-2 pb-4"> Hmo Insurance</th>
              <th className="pe-2 ps-2 pb-2 pb-4">Top Specialities</th>
              <th className="pe-2 ps-2 pb-2 pb-4">Location</th>
              <th className="pe-2 ps-2 pb-2 pb-4">
                {" "}
                Are you a top doctor or health service?
              </th>
            </tr>
            <tr>
              <td className="pe-2 pb-1">Home</td>
              <td className="pe-2 ps-2 pb-1">Axa Mansard</td>
              <td className="pe-2 ps-2 pb-1">Primary Health Care</td>
              <td className="pe-2 ps-2 pb-1">Lagos</td>
              <td className="pe-2 ps-2 pb-1">List Your Pratice on DochAhoy</td>
            </tr>
            <tr>
              <td className="pe-2 pb-2">Our Services</td>
              <td className="pe-2 ps-2 pb-1">Reliance</td>
              <td className="pe-2 ps-2 pb-1">Urgent Care</td>
              <td className="pe-2 ps-2 pb-1">Port Harcourt</td>
              <td className="pe-2 ps-2 pb-1">
                Learn about DochAhoy Health Systems
              </td>
            </tr>
            <tr>
              <td className="pe-2 pb-1">Our Services</td>
              <td className="pe-2 ps-2 pb-1">Nhis</td>
              <td className="pe-2 ps-2 pb-1">Dentist</td>
              <td className="pe-2 ps-2 pb-1">Ondo</td>
              <td className="pe-2 ps-2 pb-1">Become a DochAhoy Partner</td>
            </tr>
            <tr>
              <td className="pe-2 pb-1">Our Team</td>
              <td className="pe-2 ps-2 pb-1">Hygeia</td>
              <td className="pe-2 ps-2 pb-1">Cardiologist</td>
              <td className="pe-2 ps-2 pb-1">Calabar</td>
              <td className="pe-2 ps-2 pb-1"></td>
            </tr>
            <tr>
              <td className="pe-2 pb-1">Careers</td>
              <td className="pe-2 ps-2 pb-1">Avon</td>
              <td className="pe-2 ps-2 pb-1">Ear,Nose & Throat</td>
              <td className="pe-2 ps-2 pb-1">Enugu</td>
              <td className="pe-2 ps-2 pb-1"></td>
            </tr>
            <tr>
              <td className="pe-2 pb-1">Make An appointment</td>
              <td className="pe-2 ps-2 pb-1">Metro Health</td>
              <td className="pe-2 ps-2 pb-1">Neurologist</td>
              <td className="pe-2 ps-2 pb-1">Kaduna</td>
            </tr>
            <tr>
              <td className="pe-2 "></td>
              <td className="pe-2 ps-2 ">Alico</td>
              <td className="pe-2 ps-2 ">Paediatrician</td>
              <td className="pe-2 ps-2 ">Jos</td>
            </tr>
            <tr>
              <td className="pe-2 pb-1"></td>
              <td className="pe-2 ps-2 ">IHMS</td>
              <td className="pe-2 ps-2 ">Urologist</td>
              <td className="pe-2 ps-2 ">Owerri</td>
            </tr>
            <tr>
              <td className="pe-2 pb-1"></td>
              <td className="pe-2 ps-2 pb-1"></td>
              <td className="pe-2 ps-2 pb-1">Orthopedic Surgeon</td>
              <td className="pe-2 ps-2 pb-1">Ibadan</td>
              <th
                className="pe-2 ps-2 pb-1"
                style={{
                  color: "#1F605F",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              ></th>
            </tr>
          </Table>
        </div>
        <div>
          <footer style={{ marginTop: "100px" }}>
            Created by Oluwanishola
          </footer>
        </div>
      </Container>
    </div>
  );
};

export default Logincess;
