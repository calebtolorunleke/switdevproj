import React from "react";
import SPHearder from "./SPHearder";
import SPForm from "./SPForm";
import SPFooter from "./SPFooter";

const SignupPage = () => {
  return (
    <div
      // Designing the Background of the page
      class="container"
      style={{
        backgroundColor: "#EBF5F5",
        width: "60rem",
        height: "75rem",
        position: "relative",
        marginTop: "1rem",
        marginBottom: "3rem",
      }}
    >
      {/* Importing all the Components for the page */}
      <SPHearder />
      <SPForm />
      <SPFooter />
    </div>
  );
};

export default SignupPage;
