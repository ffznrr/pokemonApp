import CardPoke from "./component/cardPoke";
import Pokemons from "./component/poke";

function App() {
  return (
    <div className=" bg-sky-400 min-h-screen text-yellow-200">
      <Pokemons />
      <CardPoke />
    </div>
  );
}

export default App;
