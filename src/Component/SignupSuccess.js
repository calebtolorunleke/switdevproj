import React from "react";
import SSHeader from "./SSHeader";
import SSAlert from "./SSAlert";
import SSForm from "./SSForm";
import SSFooter from "./SSFooter";

const SignupSuccess = () => {
  return (
    <div
      // Designing the Background of the page
      class="container"
      style={{
        backgroundColor: "#EBF5F5",
        width: "60rem",
        height: "81rem",
        position: "relative",
        marginTop: "1rem",
        marginBottom: "2rem",
      }}
    >
      {/* Importing all the Components for the page */}
      <SSHeader />
      <SSAlert />
      <SSForm />
      <SSFooter />
    </div>
  );
};

export default SignupSuccess;
