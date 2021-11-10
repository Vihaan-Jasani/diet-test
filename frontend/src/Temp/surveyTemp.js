import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "../Survey/Survey.css";
import SurveyForm from "../Components/Survey/SurveyForm";

function Survey() {
  return (
    <>
      <Navbar />
      <div className="contain">
        <div className="d-flex justify-content-center">
          <form className="border p-5 w-50 mt-6 shadow-lg srform">
            <SurveyForm />
            <h2>Survey Form</h2>
            <label class="form-label" for="customRange1">
              Example range
            </label>
            <div class="range">
              <input type="range" class="form-range" id="customRange1" />
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Default switch checkbox input
              </label>
            </div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">
                1
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2">
                2
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Survey;
