import React, { useState, useEffect } from "react";
import "./Login.css";
import login from "../../Assets/login.jpg";
import axios from "axios";
import Errormsg from "../../Helpers/Errormsg";
import Navbar from "../../Components/Navbar/Navbar";

function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/survey");
    }
  }, [history]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    console.log("LOGIN");

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        history.push("/survey");
      }
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/bg1.jpg"})`,
        }}
      >
        <div className="div-con">
          <img alt="login" src={login} className="left"></img>
          <div className="right">
            {error && <Errormsg msg={error}></Errormsg>}
            <form onSubmit={submitHandler}>
              <div className="email">
                <label className="text-success l-email">Email</label>
                <input
                  // className="i-email"
                  className="form-control rounded"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  type="email"
                ></input>
              </div>
              <div className="pass">
                <label className="l-pass">Password</label>
                <input
                  // className="i-pass"
                  className="form-control rounded"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="pass"
                  type="password"
                ></input>
              </div>
              <div>
                <button className="btn btn-success button" type="submit">
                  LogIn
                </button>
              </div>
              <div>
                <a className="text-success" href="signup">
                  Don't have an account Register?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
