import React from "react";
import Secbreakfast from "./secondMeals/Secbreakfast";
import Secdinner from "./secondMeals/Secdinner";
import Seclunch from "./secondMeals/Seclunch";

const Secondcontent = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Secbreakfast />
        </div>
        <div className="col-md-4">
          <Seclunch />
        </div>
        <div className="col-md-4">
          <Secdinner />
        </div>
      </div>
    </div>
  </div>
));

export default Secondcontent;
