import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../FoodCard";

function Lunch() {
  const [lunch, setLunch] = useState([]);

  const getData = async () => {
    const lunch =
      "https://api.edamam.com/api/recipes/v2?type=public&q=salads&app_id=2b4dfcef&app_key=71054cd413f030b66479d7f3fb2a6112&diet=balanced&health=alcohol-free&mealType=Lunch";
    const result = await axios.get(lunch);
    const lr = Math.floor(Math.random() * 11);
    setLunch(result.data.hits[lr].recipe);
    console.log(result.data.hits[1]);
    console.log(result.data.hits);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* {bf !== [] && bf.map((recipe) => <Recipe recipe={recipe} />)} */}
      <h2 className="dishes">Lunch</h2>
      {lunch !== [] && <FoodCard recipe={lunch} />}
    </>
  );
}

export default Lunch;
