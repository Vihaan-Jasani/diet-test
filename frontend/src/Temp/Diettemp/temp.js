import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import Tabs from "../../Components/Diet/Tabs/Tabs";
import Meals from "../../Components/Diet/Meals/Meals";

function Search() {
  const [recipes, setRecipes] = useState([]);

  // const APP_ID = "0846f34e";
  // const APP_KEY = "c14a02d320a824701cbfa137e081736d	";
  // let query = `q=${str}&app_id=${ID}&app_key=${KEY}&to=${type}&diet=${data.diet}${health}&calories=${calories.min}-${calories.max}`;

  // eslint-disable-next-line no-unused-vars
  const getData = async () => {
    // for (let i = 0; i < 3; i++) {
    const url =
      "https://api.edamam.com/api/food-database/v2/parser?app_id=0846f34e&app_key=c14a02d320a824701cbfa137e081736d&ingr=food&nutrition-type=cooking&category=generic-meals";
    const result = await axios.get(url);

    console.log(result);
    setRecipes(result.data.hits);
    //}
  };

  return (
    <>
      <Navbar />

      <Tabs recipes={recipes} />
      <Meals />
    </>
  );
}

export default Search;
