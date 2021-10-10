
import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      {pokemons.map((element) => <Pokemon prop={element} />)}
    
    </div>
  );
}

export default App;
