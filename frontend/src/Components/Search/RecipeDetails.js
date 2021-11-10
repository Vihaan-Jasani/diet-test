import React from "react";
// import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <ul className="ingredient-list">
        <li className="ingredient-text">
          {ingredient.food}: {ingredient.weight}g
        </li>
        {/* <li className="ingredient-text">{ingredient.text}</li>
        <li className="ingredient-weight">Weight - {ingredient.weight}</li> */}
      </ul>
    );
  });
};

export default RecipeDetails;
