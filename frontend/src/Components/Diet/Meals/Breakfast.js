import React, { useEffect, useState } from "react";
import axios from "axios";
//import Recipe from "../../Search/Recipe";
import FoodCard from "../FoodCard";

function Breakfast() {
  const [bf, setBf] = useState([]);

  const getData = async () => {
    const breakf =
      "https://api.edamam.com/api/recipes/v2?type=public&q=salads&app_id=2b4dfcef&app_key=71054cd413f030b66479d7f3fb2a6112&diet=balanced&health=alcohol-free&mealType=Breakfast";
    const result = await axios.get(breakf);

    const arr = Math.floor(Math.random() * 11);
    // console.log(arr);
    setBf(result.data.hits[arr].recipe);
    console.log(result.data.hits[1]);
    console.log(result.data.hits);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* {bf !== [] && bf.map((recipe) => <Recipe recipe={recipe} />)} */}
      <h2 className="dishes">Breakfast</h2>
      {bf !== [] && <FoodCard recipe={bf} />}
    </>
  );
}

export default Breakfast;
