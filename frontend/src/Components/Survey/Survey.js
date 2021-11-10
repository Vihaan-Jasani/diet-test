import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Survey/Survey.css";
import SurveyForm from "./SurveyForm";

function Survey() {
  return (
    <>
      <Navbar />
      <div className="contain">
        <div className="d-flex justify-content-center">
          {/* <form className="border p-4 w-40 shadow-lg srform"> */}
          <SurveyForm />
          {/* </form> */}
        </div>
      </div>
    </>
  );
}

export default Survey;
