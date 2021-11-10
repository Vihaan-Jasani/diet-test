import React, { useEffect, useState } from "react";
import axios from "axios";
//import Recipe from "../Search/Recipe";
import Food from "./Food";

function Tabs() {
  const [meal, setMeal] = useState([]);

  const getData = async () => {
    const url =
      "https://api.edamam.com/api/recipes/v2?type=public&q=salads&app_id=2b4dfcef&app_key=71054cd413f030b66479d7f3fb2a6112&diet=balanced&health=alcohol-free&mealType=Breakfast";
    const result = await axios.get(url);

    setMeal(result.data.hits[1]);
    console.log(result.data.hits[1]);
    console.log(result);
  };

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
          <Food recipe={meal} />
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

export default Tabs;
