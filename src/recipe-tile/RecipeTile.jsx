import React from "react";
import "./style.css";

const RecipeTile = ({ recipe }) => {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeTile">
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
        <img
          className="recipeTile__image"
          src={recipe["recipe"]["image"]}
          onClick={() => window.open(recipe["recipe"]["url"])}
        />
      </div>
    )
  );
};

export default RecipeTile;
