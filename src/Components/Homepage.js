import React from "react";
import "@fontsource/poppins";
import { Container } from "react-bootstrap";
import Doctorhome from "../pictures/Doctorhome.png";
import Heart from "../pictures/Heart.png";
import Dental from "../pictures/Dental.png";
import Uterus from "../pictures/Uterus.png";
import Skin from "../pictures/Skin.png";
import Medical from "../pictures/Medical.png";
import Eye from "../pictures/Eye.png";
import Artificial from "../pictures/Artificial.png";
import Mental from "../pictures/Mental.png";
import Doctor1 from "../pictures/Doctor1.png";
import Doctor2 from "../pictures/Doctor2.png";
import Doctor3 from "../pictures/Doctor3.png";
import Doctor4 from "../pictures/Doctor4.png";
import Reliance from "../pictures/Reliance.png";
import Roding from "../pictures/Roding.png";
import Hygeia from "../pictures/Hygeia.png";
import Avon from "../pictures/Avon.png";
import Greenbay from "../pictures/Greenbay.png";
import Lifeworth from "../pictures/Lifeworth.png";
import Googleplay from "../pictures/Googleplay.png";
import Apple from "../pictures/Apple.png";
import Phone from "../pictures/Phone.png";
import { BsClipboardPulse } from "react-icons/bs";
import { MdOutlineSpatialAudio } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";

const Homepage = () => {
  document.body.style.backgroundColor = "#EBF5F5";
  return (
    <Container>
      <div className="container " style={{ margin: "5rem" }}>
        <div className="pt-3 mb-5" style={{ margin: "-3rem" }}>
          <h4 style={{ position: "absolute", left: "10rem" }}>
            <b
              style={{
                border: "1px solid #1F605F",
                fontSize: "1.5rem",
                borderRadius: "50%",
                color: "#1F605F",
                padding: "0.3rem 0.5rem",
              }}
            >
              DA!
            </b>
            <span>
              <strong style={{ color: "#1F605F" }}>D</strong>
            </span>
            ocAhoy!
          </h4>
        </div>
        <div
          className="w-50"
          style={{ fontFamily: "poppins", marginTop: "5rem" }}
        >
          <h4
            className="w-75"
            style={{ fontSize: "2rem", fontFamily: "poppins" }}
          >
            <b>
              The Best Health Care Services Is Near You, Book An Appointment
              Today!
            </b>
          </h4>
          <br></br>
          <p className="w-75">
            We have the best well trained doctors and effective at treating
            patient and following up with them. your health and well being
            matters to us.
          </p>
        </div>
        <br></br>
        <div>
          <a href="Login">
            <button
              className="w-25 p-1 text-white"
              style={{
                height: "3rem",
                border: "1px none green",
                borderRadius: "5px",
                fontFamily: "poppins",
                backgroundColor: "#55AEAD",
                textDecoration: "none",
              }}
            >
              Book an Appointment
            </button>
          </a>
        </div>
      </div>
      <div>
        <img
          className=""
          style={{
            float: "right",
            marginTop: "-25rem",
            marginRight: "12rem",
            backgroundColor: "aliceblue",
          }}
          src={Doctorhome}
          alt=""
          height="350px"
          width="350px"
        ></img>
      </div>
      <br></br>

      <div
        className="mt-1"
        style={{ margin: "5rem", fontFamily: "poppins", fontSize: "12px" }}
      >
        <h4>Top-searched specialities</h4> <br></br>
        <button
          className="bg-white p-5 me-5"
          style={{
            height: "8rem",
            width: "14rem",
            border: "3px solid whitesmoke",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ marginTop: "-2rem" }}
            src={Heart}
            alt=""
            height="50"
            width="50"
          ></img>

          <p className="mt-3"> Primary Care</p>
        </button>
        <button
          className="bg-white p-5 me-5"
          style={{
            height: "8rem",
            width: "14rem",
            border: "3px solid whitesmoke",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ marginTop: "-2rem" }}
            src={Dental}
            alt=""
            height="50"
            width="50"
          ></img>

          <p className="mt-3">Dentist</p>
        </button>
        <button
          className="bg-white p-5 me-5"
          style={{
            height: "8rem",
            width: "14rem",
            border: "3px solid whitesmoke",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ marginTop: "-2rem" }}
            src={Uterus}
            alt=""
            height="50"
            width="50"
          ></img>
          <p className="mt-3">OB-GYN</p>
        </button>
        <button
          className="bg-white p-5"
          style={{
            height: "8rem",
            width: "14rem",
            border: "3px solid whitesmoke",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ marginTop: "-2rem" }}
            src={Skin}
            alt=""
            height="50"
            width="50"
          ></img>
          <p className="mt-3">Dermatologist</p>
        </button>
        <br></br> <br></br>
        <button
          className="bg-white p-5 me-5"
          style={{
            height: "8rem",
            width: "14rem",
            border: "3px solid whitesmoke",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ marginTop: "-2rem" }}
            src={Artificial}
            alt=""
            height="50"
            width="50"
          ></img>
          <p className="mt-3">Neurologist </p>
        </button>
        <button
          className="bg-white p-5 me-5"
          style={{
            height: "8rem",
            width: "14rem",
            border: "3px solid whitesmoke",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ marginTop: "-2rem" }}
            src={Medical}
            alt=""
            height="50"
            width="50"
          ></img>
          <p className="mt-3">Cardiologist </p>
        </button>
        <button
          className="bg-white p-5 me-5"
          style={{
            height: "8rem",
            width: "14rem",
            border: "3px solid whitesmoke",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ marginTop: "-2rem" }}
            src={Eye}
            alt=""
            height="50"
            width="50"
          ></img>
          <p className="mt-3">Eye care</p>
        </button>
        <button
          className="bg-white p-5"
          style={{
            height: "8rem",
            width: "14rem",
            border: "3px solid whitesmoke",
            borderRadius: "10px",
            marginRight: "5rem",
          }}
        >
          <img
            style={{ marginTop: "-2rem" }}
            src={Mental}
            alt=""
            height="50"
            width="50"
          ></img>
          <p className="mt-3">Psychiatrist</p>
        </button>
      </div>

      <div
        className="d-flex bg-white p-5"
        style={{
          margin: "5rem -10rem 5rem -10rem",
          fontFamily: "poppins",
          fontSize: "15px",
          height: "45vh",
        }}
      >
        <div className="w-75 me-3 mt-5" style={{ marginLeft: "12rem" }}>
          <BsClipboardPulse
            style={{
              fontSize: "2rem",
              color: "#1F605F",
            }}
          />
          <br></br> <br></br>
          <b>All your healthcare needs</b> <br></br>
          <p>
            Search for and book a doctor's appointment, either in-clinic, or a
            teleconsulation.
          </p>
        </div>

        <div className=" w-75 me-4 mt-5">
          <MdOutlineSpatialAudio
            className=""
            style={{
              fontSize: "2rem",
              color: "#1F605F",
            }}
          />
          <br></br> <br></br>
          <b>Verified patient reviews</b> <br></br>
          <p>
            Doctor ratings are from patients who booked and visited the doctor
            through DocAhoy!
          </p>
        </div>

        <div className="me-4 w-75 mt-5">
          <BsCalendarCheck
            style={{
              fontSize: "2rem",
              color: "#1F605F",
            }}
          />
          <br></br> <br></br>
          <b>Your booking is confirmed</b> <br></br>
          <p>
            Your booking is automatically confirmed, as the doctor specifies his
            working hours.
          </p>
        </div>

        <div className="ms-4 w-75 mt-5" style={{ marginRight: "5rem" }}>
          <MdOutlinePayment style={{ fontSize: "2rem", color: "#1F605F" }} />
          <br></br> <br></br>
          <b>Book free and pay online</b> <br></br>
          <p>
            The consultation fees stated on DocAhoy! are the actual doctor's
            fees with no extra charges.
          </p>
        </div>
      </div>

      <div className="" style={{ margin: "5rem", fontFamily: "poppins" }}>
        <div>
          <h4>Top-rated Doctors </h4>
        </div>
        <br></br>
        <div className=" container d-flex">
          <div
            className="container me-5 w-100 p-4"
            style={{
              color: "#329D9C",
              border: "1px solid #329D9C",
              borderRadius: "10px",
              height: "47vh",
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: "16px",
            }}
          >
            <img src={Doctor1} alt=""></img> <br /> <br />
            <p>
              Badmus Lawal <br />
              General practitioner <br /> <br />
              <a href="Login">
                <button
                  className="w-50"
                  style={{
                    height: "3rem",
                    border: "none",
                    color: "white",
                    fontFamily: "poppins",
                    fontSize: "16px",
                    borderRadius: "5px",
                    backgroundColor: "#329D9C",
                  }}
                >
                  See More
                </button>
              </a>
            </p>
          </div>
          <div
            className="me-5 w-100 p-4"
            style={{
              color: "#329D9C",
              border: "1px solid #329D9C",
              borderRadius: "10px",
              height: "47vh",
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: "16px",
            }}
          >
            <img src={Doctor2} alt=""></img> <br />
            <br />
            <p>
              Usman Musa <br />
              Neuro-Surgeon <br /> <br />
              <a href="Login">
                <button
                  className="w-50"
                  style={{
                    height: "3rem",
                    border: "none",
                    color: "white",
                    fontFamily: "poppins",
                    fontSize: "16px",
                    borderRadius: "5px",
                    backgroundColor: "#329D9C",
                  }}
                >
                  See More
                </button>
              </a>
            </p>
          </div>
          <div
            className="me-5 w-100 p-4"
            style={{
              color: "#329D9C",
              border: "1px solid #329D9C",
              borderRadius: "10px",
              height: "47vh",
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: "16px",
            }}
          >
            <img src={Doctor3} alt=""></img> <br />
            <br />
            <p>
              Mautinez James <br />
              Dermatologist <br /> <br />
              <a href="Login">
                <button
                  className="w-50"
                  style={{
                    height: "3rem",
                    border: "none",
                    color: "white",
                    fontFamily: "poppins",
                    fontSize: "16px",
                    borderRadius: "5px",
                    backgroundColor: "#329D9C",
                  }}
                >
                  See More
                </button>
              </a>
            </p>
          </div>
          <div
            className="me-5 w-100 p-4"
            style={{
              color: "#329D9C",
              border: "1px solid #329D9C",
              borderRadius: "10px",
              height: "47vh",
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: "16px",
            }}
          >
            <img src={Doctor4} alt=""></img> <br />
            <br />
            <p>
              Bruno Rodrigez <br />
              Psychiatrist <br />
              <br />
              <a href="Login">
                <button
                  className="w-50"
                  style={{
                    height: "3rem",
                    border: "none",
                    color: "white",
                    fontFamily: "poppins",
                    fontSize: "16px",
                    borderRadius: "5px",
                    backgroundColor: "#329D9C",
                  }}
                >
                  See More
                </button>
              </a>
            </p>
          </div>
        </div>
        <br /> <br />
        <div
          className="bg-white p-5"
          style={{
            margin: "5rem -10rem 5rem -10rem",
            fontFamily: "poppins",
            height: "45vh",
          }}
        >
          <div className="container" style={{ marginLeft: "7rem" }}>
            <img
              className="me-4"
              src={Reliance}
              alt=""
              width="150"
              height="100"
            ></img>
            <img
              className="me-4"
              src={Roding}
              alt=""
              width="150"
              height="100"
            ></img>
            <img
              className="me-4"
              src={Hygeia}
              alt=""
              width="150"
              height="100"
            ></img>
            <br /> <br />
            <img
              className="me-4"
              src={Avon}
              alt=""
              width="150"
              height="100"
            ></img>
            <img
              className="me-4"
              src={Greenbay}
              alt=""
              width="150"
              height="100"
            ></img>
            <img
              className="me-4"
              src={Lifeworth}
              alt=""
              width="150"
              height="100"
            ></img>
          </div>
          <div
            className="float-end w-25"
            style={{
              marginTop: "-12rem",
              marginRight: "10rem",

              fontFamily: "poppins",
            }}
          >
            <p style={{ fontSize: "20px" }}>DocAhoy! FOR HEALTH SYSTEMS</p>
            <p style={{ fontSize: "23px" }}>
              We are trusted by top health systems
            </p>
            <button
              style={{
                height: "3rem",
                border: "none",
                color: "white",
                fontFamily: "poppins",
                fontSize: "16px",
                borderRadius: "5px",
                backgroundColor: "#329D9C",
              }}
            >
              Partner with DocAHoy
            </button>
          </div>
        </div>
        <br /> <br />
        <div className="d-flex mt-5">
          <div className="w-50" style={{ fontFamily: "poppins" }}>
            <h1>Make your life Easier</h1> <br></br>
            <p>
              The mobile App is the quickest, easiest way to book and keep track
              of your appointment.
            </p>
            <br />
            <img src={Googleplay} alt="" height="50" width="200"></img>
            <img src={Apple} alt="" height="50" width="200"></img>
          </div>

          <div
            className="w-50"
            style={{ marginLeft: "15rem", marginTop: "-3rem" }}
          >
            <img src={Phone} alt="" height="300" width="300"></img>
          </div>
        </div>
        <br /> <br /> <br /> <br />
        <div style={{ fontFamily: "poppins" }}>
          <h4>Find doctors and Specialists by City</h4> <br></br>
          <div className="d-flex">
            <div className="w-25">
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-2rem",
                }}
              >
                <li>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="Login"
                  >
                    Lagos
                  </a>
                </li>

                <hr></hr>
                <li>Ibadan</li>
                <hr></hr>
                <li>Uyo</li>
                <hr></hr>
              </ul>
            </div>
            <div className="w-25">
              <ul className=" " style={{ listStyle: "none" }}>
                <li>Abuja</li>
                <hr></hr>
                <li>Kano</li>
                <hr></hr>
                <li>Jos</li>
                <hr></hr>
              </ul>
            </div>
            <div className="w-25">
              <ul className=" " style={{ listStyle: "none" }}>
                <li>Port Harcourt</li>
                <hr></hr>
                <li>Enugu</li>
                <hr></hr>
                <li>Kaduna</li>
                <hr></hr>
              </ul>
            </div>
            <div className="w-25">
              <ul className=" " style={{ listStyle: "none" }}>
                <li>Calabar</li>
                <hr></hr>
                <li>Owerri</li>
                <hr></hr>
                <li>Akure</li>
                <hr></hr>
              </ul>
            </div>
          </div>
        </div>
        <br></br> <br></br>
        <footer>
          <hr></hr>

          <div
            className="d-flex"
            style={{
              listStyle: "none",
              lineHeight: "2.5rem",
              fontFamily: "poppins",
            }}
          >
            <div className="w-25">
              <li className="" style={{ color: "#236E6D", fontSize: "1.2rem" }}>
                DocAhoy!
              </li>
              <br></br>
              <li>
                <a
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  href="OurServices"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  href="AboutUs"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  href="OurTeam"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  href="Careers"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  href="Login"
                >
                  Make An Appointment
                </a>
              </li>
            </div>
            <div className="w-25">
              <li className="" style={{ color: "#236E6D", fontSize: "1.2rem" }}>
                Hmo Insurance
              </li>
              <br></br>
              <li>Axa mansard</li>
              <li>Reliance</li>
              <li>Nhis</li>
              <li>Hygeia</li>
              <li>Avon</li>
              <li>Metro Health</li>
              <li>Aiico</li>
              <li>IHMS</li>
            </div>
            <div className="w-25">
              <li className="" style={{ color: "#236E6D", fontSize: "1.2rem" }}>
                Top Specialities
              </li>
              <br></br>
              <li>Primary Health Care</li>
              <li>Urgent Care</li>
              <li>Dentist</li>
              <li>Cardiologist</li>
              <li>Ear, Nose & Throat</li>
              <li>Neurologist</li>
              <li>Paediatrician</li>
              <li>Urologist</li>
              <li>Orthopedic Surgeon</li>
            </div>
            <div className="w-25">
              <li className="" style={{ color: "#236E6D", fontSize: "1.2rem" }}>
                Location
              </li>
              <br></br>
              <li>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="Login"
                >
                  Lagos
                </a>
              </li>
              <li>Port Harcourt</li>
              <li>Ondo</li>
              <li>Calabar</li>
              <li>Enugu</li>
              <li>Kaduna</li>
              <li>Jos</li>
              <li>Owerri</li>
              <li>Ibadan</li>
            </div>
            <div className="w-25" style={{ marginLeft: "-5rem" }}>
              <li className="" style={{ color: "#236E6D", fontSize: "1.1rem" }}>
                Are you a top doctor or health service?
              </li>
              <br></br>
              <li>List Your Practice On DocAhoy</li>
              <li>Learn About DocAhoy For Health Systems</li>
              <li>Become A DocAhoy partner</li>
              <p>Get the DocAhoy App</p>
              <img src={Googleplay} alt="" height="50" width="200"></img>{" "}
              <img src={Apple} alt="" height="50" width="200"></img>
            </div>
          </div>
        </footer>
      </div>
    </Container>
  );
};
export default Homepage;
