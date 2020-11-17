import React from "react";

const Recipe = ({ id, title, ingredients }) => {
  return (
    <div key={id}>
      <h3>{id}</h3>
      <h2>{title}</h2>
      <ul>
        {ingredients.map((ing) => (
          <li>{ing}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
