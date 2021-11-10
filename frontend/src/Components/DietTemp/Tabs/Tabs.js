import axios from "axios";
import React, { useState, useEffect } from "react";
import Content from "./Content";
import Tab from "./Tab";

function Tabs() {
  const [meal, setMeal] = useState([]);
  const getData = async () => {
    const url =
      "https://api.edamam.com/api/food-database/v2/parser?app_id=0846f34e&app_key=c14a02d320a824701cbfa137e081736d&ingr=food&nutrition-type=cooking&category=generic-meals";
    const result = await axios.get(url);

    setMeal(result.data.hints);
    console.log(result.data.hints);
    console.log(result);
  };
  useEffect(() => {
    //getData();
  });
  return (
    <>
      <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
        <Tab></Tab>
      </ul>

      <div class="tab-content" id="ex1-content">
        {meal !== [] && meal.map((meal) => <Content data={meal} />)}
      </div>
    </>
  );
}

export default Tabs;
