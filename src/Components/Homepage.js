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

export const Homepage = () => {
  document.body.style.backgroundColor = "aliceblue";
  return (
    <Container>
      <div className=" " style={{ margin: "5rem" }}>
        <div>
          <p
            className=""
            style={{
              border: "1px solid #1F605F",
              position: "absolute",
              width: "87px",
              height: "70px",
              marginLeft: "-1rem",
              padding: "5px",
              color: "#1F605F",
              textAlign: "center",
              borderRadius: "15rem",
              alignItems: "center",
              fontSize: "40px",
              fontFamily: "poppins",
              fontWeight: "600",
            }}
          >
            DA!
          </p>

          <p
            className=""
            style={{
              fontFamily: "poppins",
              fontSize: "32px",
              lineHeight: "70px",
              marginLeft: "72px",
              fontWeight: "600",
            }}
          >
            <span className="" style={{ color: "#1F605F" }}>
              D
            </span>
            ocAhoy!
          </p>
        </div>
        <div className="w-50" style={{ fontFamily: "poppins" }}>
          <h3
            className="w-75"
            style={{ fontSize: "2rem", fontFamily: "poppins" }}
          >
            <b>
              The Best Health Care Services Is Near You, Book An Appointment
              Today!
            </b>
          </h3>
          <br></br>
          <p className="w-75">
            We have the best well trained doctors and effective at treating
            patient and following up with them. your health and well being
            matters to us.
          </p>
        </div>
        <br></br>
        <div>
          <button
            className="w-25 p-1 text-white"
            style={{
              height: "3rem",
              border: "1px none green",
              borderRadius: "5px",
              fontFamily: "poppins",
              backgroundColor: "#55AEAD",
            }}
          >
            Book an appointment
          </button>
        </div>
      </div>
      <div>
        <img
          className=""
          style={{
            float: "right",
            marginTop: "-28rem",
            marginRight: "15rem",
            border: "2px solid #1F605F",
            borderRadius: "15rem",
          }}
          src={Doctorhome}
          alt=""
          height="350px"
          width="350px"
        ></img>
      </div>
      <br></br>

      <div className="mt-1" style={{ margin: "5rem", fontFamily: "poppins" }}>
        <h3>Top-searched specialities</h3> <br></br>
        <button
          className="bg-white"
          style={{
            height: "7rem",
            width: "11rem",
            border: "3px solid whitesmoke",
            borderRadius: "8px",
            marginRight: "5rem",
          }}
        >
          <img
            style={{ marginTop: "-2rem" }}
            src={Heart}
            alt=""
            height="50"
            width="50"
          ></img>
        </button>
        <button
          className="bg-white"
          style={{
            height: "7rem",
            width: "11rem",
            border: "3px solid whitesmoke",
            borderRadius: "8px",
            marginRight: "5rem",
          }}
        >
          <img src={Dental} alt="" height="50" width="50"></img>
        </button>
        <button
          className="bg-white"
          style={{
            height: "7rem",
            width: "11rem",
            border: "3px solid whitesmoke",
            borderRadius: "8px",
            marginRight: "5rem",
          }}
        >
          <img src={Uterus} alt="" height="50" width="50"></img>
        </button>
        <button
          className="bg-white"
          style={{
            height: "7rem",
            width: "11rem",
            border: "3px solid whitesmoke",
            borderRadius: "8px",
            marginRight: "5rem",
          }}
        >
          <img src={Skin} alt="" height="50" width="50"></img>
        </button>
        <br></br> <br></br>
        <button
          className="bg-white"
          style={{
            height: "7rem",
            width: "11rem",
            border: "3px solid whitesmoke",
            borderRadius: "8px",
            marginRight: "5rem",
          }}
        >
          <img src={Artificial} alt="" height="50" width="50"></img>
        </button>
        <button
          className="bg-white"
          style={{
            height: "7rem",
            width: "11rem",
            border: "3px solid whitesmoke",
            borderRadius: "8px",
            marginRight: "5rem",
          }}
        >
          <img src={Medical} alt="" height="50" width="50"></img>
        </button>
        <button
          className="bg-white"
          style={{
            height: "7rem",
            width: "11rem",
            border: "3px solid whitesmoke",
            borderRadius: "8px",
            marginRight: "5rem",
          }}
        >
          <img src={Eye} alt="" height="50" width="50"></img>
        </button>
        <button
          className="bg-white"
          style={{
            height: "7rem",
            width: "11rem",
            border: "3px solid whitesmoke",
            borderRadius: "8px",
            marginRight: "5rem",
          }}
        >
          <img src={Mental} alt="" height="50" width="50"></img>
        </button>
      </div>

      <div
        className="d-flex bg-white p-5"
        style={{ margin: "5rem", fontFamily: "poppins" }}
      >
        <div className="w-100 me-5">
          <BsClipboardPulse
            className=""
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

        <div className=" w-100 me-5">
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

        <div className="me-5 w-100">
          <BsCalendarCheck
            className=""
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

        <div className="me-5 w-100">
          <MdOutlinePayment
            className=""
            style={{
              fontSize: "2rem",
              color: "#1F605F",
            }}
          />
          <br></br> <br></br>
          <b>Book free and pay online</b> <br></br>
          <p>
            The consultation fees stated on DocAhoy! are the actual doctor's
            fees with no extra charges.
          </p>
        </div>
      </div>

      <div className="" style={{ margin: "5rem" }}>
        <div>
          <h4>Top-rated Doctors </h4>
        </div>
        <br></br>
        <div className="d-flex">
          <div
            className="me-5 w-100"
            style={{
              color: "#329D9C",
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: "20px",
            }}
          >
            <img src={Doctor1} alt=""></img> <br></br> <br></br>
            <p>
              Badmus Lawal <br></br>
              General practitioner <br></br> <br></br>
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
            </p>
          </div>
          <div
            className="me-5 w-100"
            style={{
              color: "#329D9C",
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: "20px",
            }}
          >
            <img src={Doctor2} alt=""></img> <br></br> <br></br>
            <p>
              Usman Musa <br></br>
              Neuro-Surgeon <br></br> <br></br>
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
            </p>
          </div>
          <div
            className="me-5 w-100"
            style={{
              color: "#329D9C",
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: "20px",
            }}
          >
            <img src={Doctor3} alt=""></img> <br></br> <br></br>
            <p>
              Mautinez James <br></br>
              Dermatologist <br></br> <br></br>
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
            </p>
          </div>
          <div
            className="me-5 w-100"
            style={{
              color: "#329D9C",
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: "20px",
            }}
          >
            <img src={Doctor4} alt=""></img> <br></br> <br></br>
            <p>
              Bruno Rodrigez <br></br>
              Psychiatrist <br></br> <br></br>
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
            </p>
          </div>
        </div>
        <br></br> <br></br> <br></br>
        <div className="bg-white p-5">
          <div>
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
            ></img>{" "}
            <br></br>
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
              marginTop: "-11rem",
              marginRight: "4rem",
              fontFamily: "poppins",
            }}
          >
            <p>
              <b>DocAhoy! FOR HEALTH SYSTEMS</b>
            </p>
            <p>
              <b>We are trusted by top health systems</b>
            </p>
            <button
              className="w-75"
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
        <br></br> <br></br>
        <div className="d-flex mt-5">
          <div className="w-50" style={{ fontFamily: "poppins" }}>
            <h1>Make your life Easier</h1> <br></br>
            <p>
              The mobile App is the quickest, easiest way to book and keep track
              of your appointment.
            </p>
            <br></br>
            <img src={Googleplay} alt="" height="50" width="200"></img>{" "}
            <img src={Apple} alt="" height="50" width="200"></img>
          </div>

          <div className="w-50" style={{ marginLeft: "15rem" }}>
            <img src={Phone} alt="" height="300" width="300"></img>
          </div>
        </div>
        <br></br> <br></br>
        <div className="" style={{ fontFamily: "poppins" }}>
          <h3>Find doctors and Specialists by City</h3> <br></br>
          <div className="d-flex">
            <div className="w-25">
              <ul
                className=" "
                style={{ listStyle: "none", marginLeft: "-2rem" }}
              >
                <li>Lagos</li>
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
                  href="Make an appointment"
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
              <li>Lagos</li>
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
