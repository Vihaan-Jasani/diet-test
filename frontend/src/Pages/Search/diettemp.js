import axios from "axios";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

function Diet() {
  //const url = `${process.env.URL}?type=public&q=chicken&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&diet=balanced`;

  const url =
    "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=2b4dfcef&app_key=71054cd413f030b66479d7f3fb2a6112&diet=balanced";
  const getData = async () => {
    const result = await axios.get(url);

    console.log(result);
  };

  return (
    <div>
      <Navbar />
      <div class="input-group mb-3">
        <span class="input-group-text" id="search-addon">
          <i class="fas fa-search" onClick={getData}></i>
        </span>
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
    </div>
  );
}

export default Diet;
