export function createCharacterCard(character) {
  const cardContainer = document.querySelector('[data-js="card-container"]');
  const card = document.createElement("li");
  card.setAttribute("class", "card");
  cardContainer.append(card);

  const cardImageContainer = document.createElement("div");
  cardImageContainer.setAttribute("class", "card__image-container");
  card.append(cardImageContainer);

  const cardImage = document.createElement("img");
  cardImage.setAttribute("class", "card__image");
  cardImage.setAttribute("alt", character.name);
  cardImage.setAttribute("src", character.image);
  cardImageContainer.append(cardImage);

  const imageGradient = document.createElement("div");
  imageGradient.setAttribute("class", "card__image-gradient");
  cardImageContainer.append(imageGradient);

  const cardContent = document.createElement("div");
  cardContent.setAttribute("class", "card__content");
  cardContainer.append(cardContent);

  const cardTitle = document.createElement("h2");
  cardTitle.setAttribute("class", "card__title");
  cardTitle.textContent = character.name;
  cardContent.append(cardTitle);

  const cardDl = document.createElement("dl");
  cardDl.setAttribute("class", "card__info");
  cardContent.append(cardDl);

  const cardInfoTitle = document.createElement("dt");
  cardInfoTitle.setAttribute("class", "card__info-title");
  cardInfoTitle.textContent = "Status";
  cardDl.append(cardInfoTitle);

  const cardInfoDescription = document.createElement("dd");
  cardInfoDescription.setAttribute("class", "card__info-description");
  cardInfoDescription.textContent = character.status;
  cardDl.append(cardInfoDescription);

  const cardInfoOccurences = document.createElement("dt");
  cardInfoOccurences.setAttribute("class", "card__info-title");
  cardInfoOccurences.textContent = "Occurrences";
  cardDl.append(cardInfoOccurences);

  const occurences = document.createElement("dd");
  occurences.setAttribute("class", "card__info-description");
  occurences.textContent = character.episode.length;
  cardDl.append(occurences);
}
