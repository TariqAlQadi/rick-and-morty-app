import { page } from "../../index.js";
import { createCharacterCard } from "../card/card.js";
import { fetchCharacters } from "../../index.js";

export const searchBar = document.querySelector('[data-js="search-bar"]');
export let searchQuery2 = "";

export let response = null;

export function search() {
  searchBar.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchData = Object.fromEntries(formData);
    const searchQuery = searchData.query;
    searchQuery2 = searchQuery;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery2}&page=${page}`
    );

    fetchCharacters(response);
    event.target.reset();
  });
}
