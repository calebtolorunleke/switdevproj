import React from "react";
import "@fontsource/poppins";

export function Navbar() {
  function Login() {
    alert("click here to log in");
  }
  return (
    <nav>
      <div className="" style={{ fontFamily: "poppins" }}>
        <a href="/">Home</a>
        <a href="OurServices">OurServices</a>
        <a href="AboutUs">AboutUs</a>
        <a href="SignUp">SignUp</a>
        <a href="Login">
          <button
            className=""
            style={{
              border: "1px solid black",
              backgroundColor: "aliceblue",
              borderRadius: "5px",
            }}
            onClick={Login}
          >
            Log in
          </button>
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
