import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const URL = `${process.env.REACT_APP_URL}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;

  const [counter, setCounter] = useState(0);

  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    getRecipe(); 
  }, []);

  const getRecipe = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits) 
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form> 
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
