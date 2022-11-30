import React from "react";
import { useState, useEffect } from "react";
import "../assets/css/scss/gallery.css";
function Gallery() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.drinks);
        setCocktails(data.drinks);
      });
  }, []);
  console.log(cocktails);
  return (
    <div className="cocktail-card">
      {cocktails.map((cocktails, index) => {
        return (
          <div key={index}>
            <h2>name: {cocktails.strDrink}</h2>
            <img src={cocktails.strDrinkThumb} alt="" />
            <hr />
          </div>
        );
      })}

      <hr />
    </div>
  );
}

export default Gallery;
