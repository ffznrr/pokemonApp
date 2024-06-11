import { create } from "zustand";

const useStore = create((set) => ({
  pokemon: [],
  setPokemon: (pokemon) => set(() => ({ pokemon })),
  card: [],
  setCard: (card) => set(() => ({ card })),
}));

export default useStore;
