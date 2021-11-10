import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import "./Search.css";
import Alert from "../../Components/Search/Alert";
import Recipe from "../../Components/Search/Recipe";

function Diet() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "2b4dfcef";
  const APP_KEY = "71054cd413f030b66479d7f3fb2a6112";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      console.log(result.data.hits[1].recipe.healthLabels);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <>
      <Navbar />
      <div className="Diet">
        <form
          onSubmit={onSubmit}
          className="d-flex justify-content-center mt-3"
        >
          {alert !== "" && <Alert alert={alert} />}
          <div class="input-group w-50 m-4 ">
            <input
              type="text"
              name="query"
              onChange={onChange}
              value={query}
              autoComplete="off"
              placeholder="Search Food"
              className="form-control rounded"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-success"
              style={{ zIndex: "0" }}
            />
          </div>
        </form>
        <div className="recipes">
          {recipes !== [] &&
            recipes.map((recipe) => <Recipe recipe={recipe} />)}
        </div>
      </div>
    </>
  );
}

export default Diet;
