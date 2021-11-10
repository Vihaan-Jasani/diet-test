//import axios from "axios";
import React from "react";

function Tabs() {
  //   const getData = async () => {
  //     const url =
  //       "https://api.edamam.com/api/food-database/v2/parser?app_id=0846f34e&app_key=c14a02d320a824701cbfa137e081736d&ingr=food&nutrition-type=cooking&category=generic-meals";
  //     const result = await axios.get(url);

  //     console.log(result);
  //   };
  return (
    <>
      <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="ex1-tab-1"
            data-mdb-toggle="tab"
            href="#ex1-tabs-1"
            role="tab"
            aria-controls="ex1-tabs-1"
            aria-selected="true"
          >
            Day 1
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="ex1-tab-2"
            data-mdb-toggle="tab"
            href="#ex1-tabs-2"
            role="tab"
            aria-controls="ex1-tabs-2"
            aria-selected="false"
          >
            Day 2
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="ex1-tab-3"
            data-mdb-toggle="tab"
            href="#ex1-tabs-3"
            role="tab"
            aria-controls="ex1-tabs-3"
            aria-selected="false"
          >
            Day 3
          </a>
        </li>
      </ul>

      {/* Tabs content  */}
      <div class="tab-content" id="ex1-content">
        <div
          class="tab-pane fade show active"
          id="ex1-tabs-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          Tab 1 content
        </div>
        <div
          class="tab-pane fade"
          id="ex1-tabs-2"
          role="tabpanel"
          aria-labelledby="ex1-tab-2"
        >
          Tab 2 content
        </div>
        <div
          class="tab-pane fade"
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
