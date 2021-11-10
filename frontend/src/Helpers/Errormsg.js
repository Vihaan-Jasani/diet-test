import React from "react";

function Errormsg({ msg }) {
  return (
    <>
      <h5 className="note note-danger text-danger">{msg}</h5>
    </>
  );
}

export default Errormsg;
