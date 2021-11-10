import React, { useState } from "react";
import NutrientsDetails from "../Search/NutrientsDetails";
import RecipeDetails from "../Search/RecipeDetails";

const FoodCard = ({ recipe }) => {
  const [showIngre, setShowIngre] = useState(false);
  const [showNutri, setShowNutri] = useState(false);
  const { label, image, ingredients, healthLabels, url, calories } = recipe;

  return (
    <div className="w-30 m-2 p-3">
      <div className="card h-30 shadow border" style={{ width: "22rem" }}>
        <img src={image} className="recipe img" alt={label} />
        <div className="card-body">
          <h5 className="card-title" style={{ marginBottom: "1rem" }}>
            {label}
          </h5>

          <button
            onClick={() => setShowNutri(!showNutri)}
            className="btn btn-secondary"
            style={{ marginRight: "2.7rem" }}
          >
            Nutrients{" "}
            <i
              className={showNutri ? "fas fa-times" : "fas fa-tags"}
              style={{ fontSize: "1.2rem", marginLeft: "3px" }}
            ></i>
          </button>
          {showNutri && <NutrientsDetails healthLabels={healthLabels} />}

          <button type="button" class="btn btn-outline-success btn-rounded">
            {Math.round(calories)}cal
          </button>
          <button
            onClick={() => setShowIngre(!showIngre)}
            className="btn btn-success"
            style={{ marginTop: "1.5rem", marginRight: "1.5rem" }}
          >
            Ingredients{" "}
            <i
              className={showIngre ? "fas fa-times" : "fas fa-notes-medical"}
              style={{ fontSize: "1.2rem", marginLeft: "3px" }}
            ></i>
          </button>
          {showIngre && <RecipeDetails ingredients={ingredients} />}

          <a
            target="_blank"
            rel="noreferrer"
            type="button"
            className="btn btn-danger"
            href={url}
            style={{ margin: "0%", marginLeft: "1rem" }}
          >
            Recipe
            <i
              className="fas fa-external-link-alt"
              style={{ fontSize: "1rem", marginLeft: "10px" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
