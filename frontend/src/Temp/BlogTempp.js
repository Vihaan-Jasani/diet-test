/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Blogcomp(props) {
  return (
    <>
      <div className="card m-4 border shadow-lg h-60">
        <img src={props.src} className="img-fluid" alt="..." />
        <div className="card-body">
          <a
            href={props.a}
            style={{ margin: "0%", color: "black" }}
            className="card-title"
            target="_blank"
          >
            {props.p}
          </a>
        </div>
      </div>
    </>
  );
}

export default Blogcomp;
