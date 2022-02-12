import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const YOUR_APP_ID = "554ac07c";
  const YOUR_APP_KEY = "aaf197303164f057b29c43f4188e7c37";
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>
      </h1>
      <div className="app__searchForm">
        <input
          type="text"
          autoComplete="Off"
          placeholder="Type the Ingredient"
          className="app__input"
        />
        <select className="app__healthLabels">
          <option value="vegan">vegan</option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </div>
    </div>
  );
}

export default App;
