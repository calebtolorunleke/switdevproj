import React from "react";
import { Container, Card, Table } from "react-bootstrap";
import Nurse from "../Pictures/Nurse.png";
import Heart from "../Pictures/Heart.png";
import Dental from "../Pictures/Dental.png";
import Uterus from "../Pictures/Uterus.png";
import Skin from "../Pictures/Skin.png";
import Artificial from "../Pictures/Artificial.png";
import Medical from "../Pictures/Medical.png";
import Eye from "../Pictures/Eye.png";
import Mental from "../Pictures/Mental.png";
import Women from "../Pictures/Women.png";
import Man from "../Pictures/Man.png";
import Woman from "../Pictures/Woman.png";
import Vshape from "../Pictures/Vshape.png";
import Play from "../Pictures/Play.png";
import Apple from "../Pictures/Apple.png";

const Homepage = () => {
  return (
    <Container>
      <div>
        <h1 style={{ marginTop: "100px" }}>
          <strong>Welcome!!!</strong>
        </h1>
        <div>
          <p className="mt-5" style={{ fontSize: "25px" }}>
            Home for quality primary care,{" "}
          </p>
          <p style={{ fontSize: "25px", marginTop: "-15px" }}>
            more accessible than ever before.
          </p>
        </div>
        <button
          className="rounded text-decoration-none p-2 mt-5"
          style={{ backgroundColor: "#55AEAD", border: "none" }}
        >
          <a href="Success" className="m-2 text-decoration-none text-white">
            Book an appointment
          </a>
        </button>
        <div>
          <img
            src={Nurse}
            alt=""
            style={{
              float: "right",
              marginTop: "-350px",
              width: "400px",
            }}
            className="me-5"
          />
        </div>
        <div>
          <p style={{ fontSize: "25px" }} className="mt-5">
            Top-searched specialities{" "}
          </p>
        </div>
        <div className="d-flex mt-5 ">
          <Card
            className="text-white"
            style={{
              borderRadius: "25px",
              alignItems: "center",
              border: "none",
              padding: "50px 150px 0 150px",
              marginRight: "20px",
            }}
          >
            <img
              src={Heart}
              alt=""
              style={{
                width: "100px",
              }}
            />
            <div className="d-flex m-4">
              <p className="text-dark me-2">primary</p>
              <p className="text-dark">care</p>
            </div>
          </Card>
          <Card
            className="text-white "
            style={{
              borderRadius: "25px",
              alignItems: "center",
              border: "none",
              marginRight: "20px",
              marginLeft: "20px",
              padding: "50px 150px 0 150px",
            }}
          >
            <img src={Dental} alt="" />
            <p className="text-dark mt-5 " style={{ marginRight: "10px" }}>
              Dentist
            </p>
          </Card>
          <Card
            className="text-white  ms-5"
            style={{
              borderRadius: "25px",
              alignItems: "center",
              border: "none",
              marginRight: "20px",
              marginLeft: "20px",
              padding: "50px 150px 0 150px",
            }}
          >
            <img src={Uterus} alt="" />

            <div className="d-flex m-5">
              <p className="text-dark">OB-</p>
              <p className="text-dark">GYN</p>
            </div>
          </Card>
          <Card
            className="text-white"
            style={{
              borderRadius: "25px",
              alignItems: "center",
              border: "none",
              marginRight: "20px",
              marginLeft: "20px",
              padding: "50px 150px 0 150px",
            }}
          >
            <img src={Skin} alt="" />
            <p className="text-dark m-5 p-3">Determatologist</p>
          </Card>
        </div>

        <div className="d-flex mt-5 ">
          <Card
            className="text-white"
            style={{
              borderRadius: "25px",
              alignItems: "center",
              border: "none",
              padding: "50px 150px 0 150px",
              marginRight: "20px",
            }}
          >
            <img
              src={Artificial}
              alt=""
              style={{
                width: "100px",
              }}
            />

            <p className="text-dark m-4">Neurologist</p>
          </Card>
          <Card
            className="text-white "
            style={{
              borderRadius: "25px",
              alignItems: "center",
              border: "none",
              marginRight: "20px",
              marginLeft: "20px",
              padding: "50px 150px 0 150px",
            }}
          >
            <img src={Medical} alt="" />
            <p className="text-dark mt-5 " style={{ marginRight: "10px" }}>
              Cardiologist
            </p>
          </Card>
          <Card
            className="text-white  ms-5"
            style={{
              borderRadius: "25px",
              alignItems: "center",
              border: "none",
              marginRight: "20px",
              marginLeft: "20px",
              padding: "50px 150px 0 150px",
            }}
          >
            <img src={Eye} alt="" />

            <div className="d-flex m-5">
              <p className="text-dark">Eye-</p>
              <p className="text-dark">care</p>
            </div>
          </Card>
          <Card
            className="text-white"
            style={{
              borderRadius: "25px",
              alignItems: "center",
              border: "none",
              marginRight: "20px",
              marginLeft: "20px",
              padding: "50px 150px 0 150px",
            }}
          >
            <img src={Mental} alt="" />
            <p className="text-dark m-5">Phychatrist</p>
          </Card>
        </div>

        <div>
          <p style={{ fontSize: "25px" }} className="mt-5 mb-5 ">
            Build a relationship with your doctor and feel heard
          </p>
        </div>
        <div className="d-flex mt-1">
          <img src={Women} alt="" width="400px" className="me-5 " />
          <img src={Man} alt="" width="400px" className="me-5 ms-5" />
          <img src={Woman} alt="" width="400px" className="me-5 ms-5" />
        </div>
        <div>
          <p style={{ fontSize: "25px" }} className="mt-5 mb-2">
            Find doctors and specialist by city
          </p>
        </div>
        <div className="table-responsive mt-5">
          <Table className="d-flex">
            <div className=" me-5">
              <tr>
                <td
                  style={{ fontSize: "20px", borderColor: "lightgray" }}
                  className="pb-3"
                >
                  {" "}
                  Lagos{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="15px"
                    style={{
                      fontSize: "20px",
                      marginLeft: "150px",
                      marginTop: "-50px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "20px",
                    borderColor: "lightgray",
                  }}
                  className="pe-4 pb-3 pt-3 "
                >
                  {" "}
                  Ibadan{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="15px"
                    style={{ marginLeft: "150px", marginTop: "-50px" }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "20px",
                    borderColor: "lightgray",
                  }}
                  className="pe-4  pb-3 pt-3  "
                >
                  {" "}
                  Uyo{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="15px"
                    style={{ marginLeft: "150px", marginTop: "-50px" }}
                  />
                </td>
              </tr>
            </div>
            <div className="ms-5">
              <tr>
                <td
                  style={{ fontSize: "20px", borderColor: "lightgray" }}
                  className="pb-3"
                >
                  {" "}
                  Abuja{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="15px"
                    style={{
                      fontSize: "20px",
                      marginLeft: "150px",
                      marginTop: "-50px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "20px",
                    borderColor: "lightgray",
                  }}
                  className="pe-4 pb-3 pt-3 "
                >
                  {" "}
                  Kano{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="15px"
                    style={{ marginLeft: "150px", marginTop: "-50px" }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "20px",
                    borderColor: "lightgray",
                  }}
                  className="pe-4  pb-3 pt-3  "
                >
                  {" "}
                  Jos{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="15px"
                    style={{ marginLeft: "150px", marginTop: "-50px" }}
                  />
                </td>
              </tr>
            </div>
            <div className=" ms-5">
              <tr>
                <td
                  style={{ fontSize: "20px", borderColor: "lightgray" }}
                  className="pe-4  pb-2 pt-3  "
                >
                  {" "}
                  Port harcourt{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="15px"
                    style={{
                      marginTop: "-50px",
                      marginLeft: "250px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "20px",
                    borderColor: "lightgray",
                  }}
                  className="pe-4  pb-5 pt-3  "
                >
                  {" "}
                  Enugu{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="16px"
                    style={{ marginLeft: "182px" }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "20px",
                    borderColor: "lightgray",
                  }}
                  className="pe-4  pb- pt-3  "
                >
                  {" "}
                  Kaduna{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="15px"
                    style={{ marginLeft: "250px", marginTop: "-50px" }}
                  />
                </td>
              </tr>
            </div>
            <div className="align-item-center ms-5">
              <tr>
                <td
                  className="pe-4  pb-2 pt-3  "
                  style={{
                    fontSize: "20px",
                    borderColor: "lightgray",
                  }}
                >
                  {" "}
                  Calabar{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="17px"
                    style={{
                      marginLeft: "295px",
                      marginTop: "-55px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "20px",
                    borderColor: "lightgray",
                  }}
                  className="pe-4 pb-5 pt-4 "
                >
                  {" "}
                  Owerri
                  <img
                    src={Vshape}
                    alt=""
                    width="16px"
                    style={{ marginLeft: "235px" }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "20px",
                    borderColor: "lightgray",
                  }}
                  className="pe-4  pb- pt-3  "
                >
                  {" "}
                  Akure{" "}
                  <img
                    src={Vshape}
                    alt=""
                    width="18px"
                    style={{
                      marginLeft: "300px",
                      alignItems: "end",
                      marginTop: "-50px",
                    }}
                  />
                </td>
              </tr>
            </div>
          </Table>
          <div className="mt-5 mb-5 pt-5">
            <hr />
          </div>
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
              <th
                className="pe-2 ps-2 pb-1"
                style={{
                  color: "#1F605F",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                Get the DorchAhoy App
              </th>
            </tr>
            <tr>
              <td className="pe-2 "></td>
              <td className="pe-2 ps-2 ">Alico</td>
              <td className="pe-2 ps-2 ">Paediatrician</td>
              <td className="pe-2 ps-2 ">Jos</td>
              <div style={{ alignItems: "center", marginLeft: "150px" }}>
                <button
                  className="mb-1 text-white bg-dark"
                  style={{
                    border: "none",
                    borderRadius: "10px",
                    height: "70px",
                  }}
                >
                  <img
                    src={Play}
                    alt=""
                    width="60"
                    style={{ margin: "-3px 0px 0px 20px" }}
                  />
                  <div
                    style={{
                      float: "right",
                      marginRight: "20px",
                    }}
                  >
                    <p>Download on the</p>
                    <p
                      style={{
                        fontSize: "30px",
                        marginTop: "-20px",
                      }}
                    >
                      <strong>Google Play </strong>
                    </p>
                  </div>
                </button>
              </div>
            </tr>
            <tr>
              <td className="pe-2 pb-1"></td>
              <td className="pe-2 ps-2 ">IHMS</td>
              <td className="pe-2 ps-2 ">Urologist</td>
              <td className="pe-2 ps-2 ">Owerri</td>
              <div
                style={{
                  alignItems: "center",
                  marginLeft: "150px",
                  marginTop: "20px",
                }}
              >
                <button
                  className="mb-1 text-white bg-dark pe-5 pb-1 pt-2"
                  style={{
                    border: "none",
                    borderRadius: "10px",
                    height: "70px",
                  }}
                >
                  <img
                    src={Apple}
                    alt=""
                    width="60"
                    style={{ margin: "-3px 0px 0px 20px" }}
                  />
                  <div style={{ float: "right", marginRight: "20px" }}>
                    <p>Download on the</p>
                    <p style={{ fontSize: "30px", marginTop: "-20px" }}>
                      <strong>App Store </strong>
                    </p>
                  </div>
                </button>
              </div>
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
      </div>
    </Container>
  );
};

export default Homepage;
