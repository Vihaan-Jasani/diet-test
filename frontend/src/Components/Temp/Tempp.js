import React, { useEffect, useState } from "react";
import axios from "axios";
//import Recipe from "../Search/Recipe";
import Food from "./Food";
import Ftemp from "./Ftemp";
//import Lunch from "./Lunch";

function Tempp() {
  const [breakf, setbreakf] = useState([]);
  //const [label, setLabel] = useState("");
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);

  const getData = async () => {
    const breakf =
      "https://api.edamam.com/api/recipes/v2?type=public&q=salads&app_id=2b4dfcef&app_key=71054cd413f030b66479d7f3fb2a6112&diet=balanced&health=alcohol-free&mealType=Breakfast";
    const result = await axios.get(breakf);
    setbreakf(result.data.hits[1]);

    const lunch =
      "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=2b4dfcef&app_key=71054cd413f030b66479d7f3fb2a6112&diet=balanced&health=alcohol-free&mealType=Breakfast";
    const lr = await axios.get(lunch);
    setLunch(lr.data.hits[1]);

    const dinner =
      "https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=2b4dfcef&app_key=71054cd413f030b66479d7f3fb2a6112&diet=balanced&health=alcohol-free&mealType=Breakfast";
    const dr = await axios.get(dinner);
    setDinner(dr.data.hits[1]);

    console.log(dr.data.hits[1]);
    console.log(result);
  };
  // const food = (event, newLabel) => {
  //   switch (newLabel) {
  //     case 0:
  //       // call api for Tab1
  //       break;
  //     case 1:
  //       // call api for Tab2
  //       break;
  //     case 2:
  //       // call api for Tab3
  //       break;
  //     default:
  //       break;
  //   }
  //   setLabel(newLabel);
  // };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="ex1-tab-1"
            data-mdb-toggle="tab"
            href="#ex1-tabs-1"
            role="tab"
            aria-controls="ex1-tabs-1"
            aria-selected="true"
          >
            Tab 1
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex1-tab-2"
            data-mdb-toggle="tab"
            href="#ex1-tabs-2"
            role="tab"
            aria-controls="ex1-tabs-2"
            aria-selected="false"
          >
            Tab 2
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex1-tab-3"
            data-mdb-toggle="tab"
            href="#ex1-tabs-3"
            role="tab"
            aria-controls="ex1-tabs-3"
            aria-selected="false"
          >
            Tab 3
          </a>
        </li>
      </ul>

      <div className="tab-content" id="ex1-content">
        <div
          className="tab-pane fade show active"
          id="ex1-tabs-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          {/* {meal.map((m) =>
            // <Recipe recipe={m} />
            console.log(m)
          )} */}
        </div>
        <div
          className="tab-pane fade"
          id="ex1-tabs-2"
          role="tabpanel"
          aria-labelledby="ex1-tab-2"
        >
          {/* {meal.map((m) => (
            <Food recipe={m} />
          ))} */}
          {/* <Food bf={breakf} lunch={lunch} dinner={dinner} /> */}
          <Ftemp meal={dinner} />
          <Ftemp meal={breakf} />
          {/* <Lunch recipe={meal} label={label} /> */}
        </div>
        <div
          className="tab-pane fade"
          id="ex1-tabs-3"
          role="tabpanel"
          aria-labelledby="ex1-tab-3"
        >
          Tab 3 content
        </div>
      </div>
    </>
  );
}

export default Tempp;
