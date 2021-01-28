import './App.css';

const App = () => {


  const URL = `${process.env.REACT_APP_URL}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;
  console.log(URL);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
