import React from "react";
import Breakfast from "../Meals/Breakfast";
import Dinner from "../Meals/Dinner";
import Lunch from "../Meals/Lunch";

function TabsContent({ title, id }) {
  return (
    <>
      <div
        className={id === 1 ? "tab-pane fade show active" : "tab-pane fade"}
        id={id}
        role="tabpanel"
        aria-labelledby={id}
      >
        {title}
        <div className="row">
          <div className="col-md-4">
            <Breakfast />
          </div>
          <div className="col-md-4">
            <Lunch />
          </div>
          <div className="col-md-4">
            <Dinner />
          </div>
        </div>
      </div>
    </>
  );
}

export default TabsContent;
