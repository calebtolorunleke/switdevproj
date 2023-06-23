import { Container } from "react-bootstrap";
import "@fontsource/poppins";
import Dr1 from "../pictures/Dr1.png";
import Dr2 from "../pictures/Dr2.png";
import Dr3 from "../pictures/Dr3.png";
import { AiFillStar } from "react-icons/ai";

const DocInLag = () => {
  document.body.style.backgroundColor = "#D9D9D9";

  return (
    <Container>
      <div
        className="container"
        style={{ margin: "5rem", fontFamily: "poppins" }}
      >
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
          style={{
            height: "5rem",
            width: "100%",
            padding: "1.5rem",
            marginTop: "5rem",
            backgroundImage: `url(${require("../pictures/Background.png")})`,
          }}
        >
          <h4> Doctors In Lagos</h4>
        </div>
        <br></br>
        <br></br>
        <div
          className="d-flex p-5"
          style={{ marginRight: "7rem", backgroundColor: "#ABD7D6" }}
        >
          <div className="w-25">
            <img src={Dr1} alt=""></img>
          </div>
          <div className="w-50 p-3" style={{ marginLeft: "5rem" }}>
            <h4>Dr. Adejoke Omodele </h4>
            <p className="text-white">General Physician</p>
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            (Overall Rating From 5 Visitors)
            <p>
              General practitioner specialized in paediatric general practice
              and Adult General Practice
            </p>
            <p>Victoria Island</p>
            <p>Joined Recently</p>
            <p className="text-white">Fees: 15,000 NGN</p>
          </div>
          <div>
            <div>
              <select
                className="p-2"
                style={{
                  backgroundColor: "#EBF5F5",
                  border: "1px solid black",
                  color: "black",
                  borderRadius: "7px",
                }}
              >
                <option value="available time">Available Time</option>
                <option value="8am-9am">8am-9am</option>
                <option value="9am-10am">9am-10am</option>
                <option value="10am-11am">10am-11am</option>
                <option value="11am-12pm">11am-12pm</option>
                <option value="1pm-2pm">1pm-2pm</option>
                <option value="2pm-3pm">2pm-3pm</option>
              </select>
            </div>

            <br></br>

            <button
              style={{
                backgroundColor: "#55AEAD",
                border: "none",
                height: "2.5rem",
                width: "7rem",
                color: "white",
                marginTop: "15rem",
                borderRadius: "5px",
              }}
            >
              Book Now
            </button>
          </div>
        </div>
        <br></br>
        <div
          className="d-flex p-5"
          style={{ marginRight: "7rem", backgroundColor: "#ABD7D6" }}
        >
          <div className="w-25">
            <img src={Dr2} alt=""></img>
          </div>
          <div className="w-50 p-4" style={{ marginLeft: "5rem" }}>
            <h4>Dr. Laraba Rhodes </h4>
            <p className="text-white">Obstetrics and gynecology</p>
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            (Overall Rating From 5 Visitors)
            <p>Reproductive Endocrinology and Minimal access surgeries.</p>
            <p>Ikeja</p>
            <p>Joined 2020</p>
            <p className="text-white">Fees: 15,000 NGN</p>
          </div>
          <div>
            <div>
              <select
                className="p-2"
                style={{
                  backgroundColor: "#EBF5F5",
                  border: "1px solid black",
                  color: "black",
                  borderRadius: "7px",
                }}
              >
                <option value="available time">Available Time</option>
                <option value="8am-9am">8am-9am</option>
                <option value="9am-10am">9am-10am</option>
                <option value="10am-11am">10am-11am</option>
                <option value="11am-12pm">11am-12pm</option>
                <option value="1pm-2pm">1pm-2pm</option>
                <option value="2pm-3pm">2pm-3pm</option>
              </select>
            </div>
            <br></br>

            <button
              style={{
                backgroundColor: "#55AEAD",
                border: "none",
                height: "2.5rem",
                width: "7rem",
                color: "white",
                marginTop: "15rem",
                borderRadius: "5px",
              }}
            >
              Book Now
            </button>
          </div>
        </div>
        <br></br>
        <div
          className="d-flex p-5"
          style={{ marginRight: "7rem", backgroundColor: "#ABD7D6" }}
        >
          <div className="w-25">
            <img src={Dr3} alt=""></img>
          </div>
          <div className="w-50 p-3" style={{ marginLeft: "5rem" }}>
            <h4>Dr. Seun Awoseye </h4>
            <p className="text-white">Psychiatrist</p>
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiFillStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />{" "}
            (Overall Rating From 5 Visitors)
            <p>Senior consultant in psychiatry</p>
            <p>Lekki</p>
            <p>Joined 2016</p>
            <p className="text-white">Fees: 15,000 NGN</p>
          </div>
          <div>
            <div>
              <select
                className="p-2"
                style={{
                  backgroundColor: "#EBF5F5",
                  border: "1px solid black",
                  color: "black",
                  borderRadius: "7px",
                }}
              >
                <option value="available time">Available Time</option>
                <option value="8am-9am">8am-9am</option>
                <option value="9am-10am">9am-10am</option>
                <option value="10am-11am">10am-11am</option>
                <option value="11am-12pm">11am-12pm</option>
                <option value="1pm-2pm">1pm-2pm</option>
                <option value="2pm-3pm">2pm-3pm</option>
              </select>
            </div>
            <br></br>

            <button
              style={{
                backgroundColor: "#55AEAD",
                border: "none",
                height: "2.5rem",
                width: "7rem",
                color: "white",
                marginTop: "15rem",
                borderRadius: "5px",
              }}
            >
              Book Now
            </button>
          </div>
        </div>
        <br></br> <br></br>
        <footer>
          <hr style={{ marginRight: "5rem" }}></hr>

          <div
            className="d-flex"
            style={{
              listStyle: "none",
              lineHeight: "2.5rem",
              fontFamily: "poppins",
              marginRight: "5rem",
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
            </div>
          </div>
        </footer>
      </div>
    </Container>
  );
};

export default DocInLag;
