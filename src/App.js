import logo from './logo.svg';
import './App.css';

const App = () => {


  const URL = `${process.env.REACT_APP_URL}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;
  console.log(URL);

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
