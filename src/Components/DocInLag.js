import { Container } from "react-bootstrap";
import "@fontsource/poppins";
import Dr1 from "../pictures/Dr1.png";
import Dr2 from "../pictures/Dr2.png";
import Dr3 from "../pictures/Dr3.png";
import { AiOutlineStar } from "react-icons/ai";

function DocInLag() {
  document.body.style.backgroundColor = "aliceblue";

  return (
    <Container>
      <div className="" style={{ margin: "5rem", fontFamily: "poppins" }}>
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
        <div
          style={{
            height: "4.5rem",
            width: "100%",
            padding: "1.5rem",
            backgroundSize: "cover",
            marginTop: "1rem",
            fontFamily: "poppins",
            backgroundImage: `url(${require("../pictures/Background.png")})`,
          }}
        >
          <h4> Doctors In Lagos</h4>
        </div>
        <br></br>
        <br></br>
        <div className="d-flex p-5" style={{ backgroundColor: "#ABD7D6" }}>
          <div className="w-25">
            <img src={Dr1} alt=""></img>
          </div>
          <div className="w-50 p-3" style={{ marginLeft: "5rem" }}>
            <h3>Dr. Adejoke Omodele </h3>
            <p className="text-white">General Physician</p>
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
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
            <botton
              className="p-2"
              style={{
                backgroundColor: "#EBF5F5",
                border: "none",
                color: "black",
                borderRadius: "7px",
              }}
            >
              Available Time
            </botton>
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
        <div className="d-flex p-5" style={{ backgroundColor: "#ABD7D6" }}>
          <div className="w-25">
            <img src={Dr2} alt=""></img>
          </div>
          <div className="w-50 p-4" style={{ marginLeft: "5rem" }}>
            <h3>Dr. Laraba Rhodes </h3>
            <p className="text-white">Obstetrics and gynecology</p>
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            (Overall Rating From 5 Visitors)
            <p>Reproductive Endocrinology and Minimal access surgeries.</p>
            <p>Ikeja</p>
            <p>Joined 2020</p>
            <p className="text-white">Fees: 15,000 NGN</p>
          </div>
          <div>
            <botton
              className="p-2"
              style={{
                backgroundColor: "#EBF5F5",
                border: "none",
                color: "black",
                borderRadius: "7px",
              }}
            >
              Available Time
            </botton>
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
        <div className="d-flex p-5" style={{ backgroundColor: "#ABD7D6" }}>
          <div className="w-25">
            <img src={Dr3} alt=""></img>
          </div>
          <div className="w-50 p-3" style={{ marginLeft: "5rem" }}>
            <h3>Dr. Seun Awoseye </h3>
            <p className="text-white">Psychiatrist</p>
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar style={{ color: "#55AEAD", fontSize: "1.5rem" }} />
            <AiOutlineStar
              style={{ color: "#55AEAD", fontSize: "1.5rem" }}
            />{" "}
            (Overall Rating From 5 Visitors)
            <p>Senior consultant in psychiatry</p>
            <p>Lekki</p>
            <p>Joined 2016</p>
            <p className="text-white">Fees: 15,000 NGN</p>
          </div>
          <div>
            <botton
              className="p-2"
              style={{
                backgroundColor: "#EBF5F5",
                border: "none",
                color: "black",
                borderRadius: "7px",
              }}
            >
              Available Time
            </botton>
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
            </div>
          </div>
        </footer>
      </div>
    </Container>
  );
}

export default DocInLag;
