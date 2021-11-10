import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "../../Assets/bg1.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Errormsg from "../../Helpers/Errormsg";
import "./Signup.css";
import { useHistory } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [error, setError] = useState(false);

  let history = useHistory();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/login");
    }
  }, [history]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(fname);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/users/",
        {
          email,
          fname,
          lname,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        history.push("/login");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-img" style={{ backgroundImage: `url(${Image})` }}>
        <div className="d-flex justify-content-center">
          <form
            className="border p-5 w-50 mt-6 shadow-lg sform"
            onSubmit={submitHandler}
          >
            {error && <Errormsg msg={error}></Errormsg>}
            <div className="row mb-4">
              <div className="col">
                <div className="name">
                  <label className="form-label text-success">First name</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    onChange={(e) => setFname(e.target.value)}
                    value={fname}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col">
                <div className="name">
                  <label className="form-label text-success">Last name</label>
                  <input
                    type="text"
                    id="lname"
                    onChange={(e) => setLname(e.target.value)}
                    className="form-control"
                    value={lname}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label text-success">Email address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="mb-4">
              <label className="form-label text-success">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="mb-4">
              <label className="text-success">Confirm Password</label>
              <input
                type="password"
                id="confirmpass"
                className="form-control"
                onChange={(e) => setConfirmpass(e.target.value)}
                value={confirmpass}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-lg btn-success button" type="submit">
                Register
              </button>
            </div>

            <div className="line">
              <a className="text-success" href="/login">
                Already have an account, login?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
