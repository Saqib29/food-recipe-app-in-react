import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import FOOTER from './footer'

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  
  const URL = `${process.env.REACT_APP_URL}q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;

  useEffect(() => {
    getRecipe(); 
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits) 
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form> 
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

      <FOOTER />
    </div>
  );
}

export default App;
