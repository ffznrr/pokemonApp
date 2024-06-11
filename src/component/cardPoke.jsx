import { useEffect, useState } from "react";
import useStore from "../zustand/store";
import axios from "axios";

const CardPoke = () => {
  const [data, setData] = useState({});
  const [ability, setAbility] = useState("");
  const card = useStore((state) => state.card);

  const handleData = () => {
    setData(" ");
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${card}`)
      .then((response) => {
        setData(response.data);
        setAbility(
          response.data.abilities.map((data) => data.ability.name).join(", "),
        );
        console.log(
          response.data.abilities.map((data) => data.ability.name).join(", "),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [card]);

  return (
    <div>
      <div className="text-center text-3xl  w-full h-72">
        <h1 className="mb-5">{data.name ? "Pokemon Detail" : " "}</h1>
        <div className="flex justify-center items-center">
          {data.name ? (
            <div className="px-10 h-24 flex justify-center ">
              <div className="mx-5">
                <img
                  className="w-40 h-40"
                  src={data.sprites && data.sprites.front_default}
                  alt="test"
                />
                <h4 className="bg-white text-black rounded-sm px-5">
                  {data.name}
                </h4>
              </div>
              <div className="text-sm md:text-lg">
                <h4 className="text-left">Types : {data.types[0].type.name}</h4>
                <h4>Skills : {ability}</h4>
                <table className="border-collapse border border-slate-400">
                  <thead>
                    <tr>
                      <th className="border border-slate-300">Status</th>
                      <th className="border border-slate-300">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.stats.map((data, index) => (
                      <tr key={index}>
                        <td className="border border-slate-300">
                          {data.stat.name}
                        </td>
                        <td className="border border-slate-300">
                          {data.base_stat}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </div>
      <div className="text-center mt-5">
        {data.name ? (
          <button
            className="border-4 rounded-xl px-3 bg-yellow-200 text-black hover:text-white hover:bg-black min-[360px]:mt-5 sm:mt-10"
            onClick={() => handleData()}
          >
            Reset
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default CardPoke;
