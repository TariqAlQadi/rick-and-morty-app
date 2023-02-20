import { search, searchQuery2 } from "./components/search-bar/search-bar.js";
import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

// const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 42;
export let page = 1;
search();

nextButton.addEventListener("click", async () => {
  if (page < maxPage) {
    page++;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery2}&page=${page}`
    );
    fetchCharacters(response);
  }
});
prevButton.addEventListener("click", async () => {
  if (page > 1) {
    page--;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery2}&page=${page}`
    );
    fetchCharacters(response);
  }
});

const allCharacters = await fetch(`https://rickandmortyapi.com/api/character/`);
fetchCharacters(allCharacters);

//Fetch
export async function fetchCharacters(data) {
  try {
    if (!data.ok) {
      console.log("Response not okay!");
    } else {
      const cardData = await data.json();
      cardContainer.innerHTML = "";
      cardData.results.forEach((result) => {
        createCharacterCard(result);
        pagination.textContent = `${page} / ${cardData.info.pages}`;
        maxPage = cardData.info.pages;
      });
    }
  } catch (error) {
    console.error(error);
  }
}
