import React from "react";

const RecipeTile = ({ recipe }) => {
  return (
    <div className="recipeTile">
      <img scr={recipe["recipe"]["image"]} />
    </div>
  );
};

export default RecipeTile;
