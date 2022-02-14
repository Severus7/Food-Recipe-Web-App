import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./recipe-tile/RecipeTile";

function App() {
  const YOUR_APP_ID = "554ac07c";
  const YOUR_APP_KEY = "aaf197303164f057b29c43f4188e7c37";
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>
      </h1>
      <form action="POST" className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="Off"
          placeholder="Type the Ingredient"
          className="app__input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select className="app__healthLabels">
          <option
            value="vegan"
            onClick={() => {
              setHealthLabel("vegan");
            }}
          >
            vegan
          </option>

          <option
            value="vegetarian"
            onClick={() => {
              setHealthLabel("vegetarian");
            }}
          >
            vegetarian
          </option>

          <option
            value="Low-sugar"
            onClick={() => {
              setHealthLabel("Low-sugar");
            }}
          >
            Low-sugar
          </option>

          <option
            value="dairy-free"
            onClick={() => {
              setHealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>

          <option
            value="immuno-supportive"
            onClick={() => {
              setHealthLabel("immuno-supportive");
            }}
          >
            immuno-supportive
          </option>

          <option
            value="wheat-free"
            onClick={() => {
              setHealthLabel("wheat-free");
            }}
          >
            wheat-free
          </option>
        </select>

        <input type="submit" value="Get Recipe" className="app__submit" />
      </form>
      <div>
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
