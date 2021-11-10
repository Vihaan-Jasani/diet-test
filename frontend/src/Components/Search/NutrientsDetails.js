import React from "react";

function NutrientsDetails({ healthLabels }) {
  console.log(healthLabels);
  return healthLabels.slice(0, 6).map((healthLabel) => {
    return (
      <>
        {/* <li>{healthLabel}</li> */}
        <button
          type="button"
          class="btn btn-outline-info btn-rounded"
          style={{ margin: "0.5rem" }}
        >
          {healthLabel}
        </button>
      </>
    );
  });
}

// const NutrientsDetails = ({ healthLabels }) => {
//   return healthLabels.map((ingredient) => {
//     return <li>{ingredient}</li>;
//   });
// };

export default NutrientsDetails;
