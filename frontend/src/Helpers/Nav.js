import React from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar/Navbar.css";

function nav(props) {
  //const names = props.name;
  const listname = props.name.map((n, i) => (
    <Link
      style={{ marginRight: "2rem" }}
      key={i}
      className="nav-links"
      to={props.linkto.map((l) => l)}
    >
      {n}
    </Link>
  ));

  return (
    <>
      <li style={{ marginRight: "1rem" }}>{listname}</li>
      {/* <li>
        <Link className="nav-links" to={props.linkto}>
          {props.name}
        </Link>
      </li> */}
    </>
  );
}

export default nav;
