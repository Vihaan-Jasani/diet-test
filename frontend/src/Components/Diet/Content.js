import React from "react";
import Breakfast from "./Meals/Breakfast";
import Dinner from "./Meals/Dinner";
import Lunch from "./Meals/Lunch";

const Content = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <div className="container">
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
  </div>
));

// function Content() {
//   return (
//     <>
//       <div className="row">
//         <div className="col-md-4">
//           <Breakfast />
//         </div>
//         <div className="col-md-4">
//           <Lunch />
//         </div>
//         <div className="col-md-4">
//           <Dinner />
//         </div>
//       </div>
//     </>
//   );
// }

export default Content;
