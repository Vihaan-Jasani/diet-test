import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function SurveyForm() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

  let history = useHistory();

  useEffect(() => {
    const userInfo = localStorage.getItem("survey");

    if (userInfo) {
      history.push("/diet");
    }
  }, [history]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("NIDHI");
    console.log(goalWeight);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/data/survey",
        {
          gender,
          age,
          weight,
          height,
          goalWeight,
        },
        config
      );
      console.log(data);

      localStorage.setItem("survey", JSON.stringify(data));
      const survey = localStorage.getItem("survey");
      if (survey) {
        history.push("/diet");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <h2 className="text-center">Survey Form</h2> */}
      <form
        onSubmit={submitHandler}
        className="border p-4 w-40 shadow-lg srform"
      >
        <div className="d-flex m-4">
          <h6 style={{ marginRight: "2rem" }}>Gender: </h6>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="Male"
              onChange={(e) => setGender("Male")}
              value="Male"
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="Female"
              onChange={(e) => setGender("Female")}
              value="Female"
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <div className="d-flex m-4">
          <h6 style={{ marginRight: "4rem" }}>Age: </h6>
          <div className="col-sm-5">
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>
        </div>

        <div className="d-flex m-4">
          <h6 style={{ marginRight: "4rem" }}>Frequency of Exercise: </h6>
          <div className="range">
            <input type="range" className="form-range" id="customRange1" />
          </div>
        </div>

        <div className="d-flex m-4">
          <h6 style={{ marginRight: "4rem" }}>Weight: </h6>
          <div className="col-sm-5">
            <input
              type="number"
              className="form-control"
              id="inputEmail3"
              placeholder="Weight"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>
        </div>

        <div className="d-flex m-4">
          <h6 style={{ marginRight: "4rem" }}>Height: </h6>
          <div className="col-sm-5">
            <input
              type="number"
              className="form-control"
              id="inputEmail3"
              placeholder="Height"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
            />
          </div>
        </div>

        <div className="d-flex m-4">
          <h6 style={{ marginRight: "1.8rem" }}>Goal Weight: </h6>
          <div className="col-sm-5">
            <input
              type="number"
              className="form-control"
              id="inputEmail3"
              placeholder="Goal weight"
              onChange={(e) => setGoalWeight(e.target.value)}
              value={goalWeight}
            />
          </div>
        </div>

        <div className="text-center" style={{ marginTop: "3rem" }}>
          <button type="submit" className="btn btn-success btn-lg">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default SurveyForm;
