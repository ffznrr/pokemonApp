import axios from "axios";
import { useEffect, useState } from "react";
import useStore from "../zustand/store";

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const ambilPokemon = useStore((state) => state.setPokemon);
  const setCard = useStore((state) => state.setCard);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ambilPokemon]);

  const PokemonName = (name) => {
    setCard(name);
    ambilPokemon(pokemon);
  };

  return (
    <div className="min-w-screen py-10 px-24">
      <div className="grid grid-cols-2 gap-4 ">
        {pokemon.map((data, index) => (
          <button
            key={index}
            className="border min-w-24 mx-5 rounded-lg bg-amber-500 text-xs md:text-lg"
            onClick={() => PokemonName(data.name)}
          >
            {data.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
