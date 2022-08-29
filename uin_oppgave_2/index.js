const wordList = [
    "Huske",
    "Trene",
    "Danse",
    "Hoppe",
    "Sykle",
    "Gå",
    "Rulle",
    "Trille",
    "Kjøre",
    "Løpe",
    "Springe",
    "Hinke",
    "Sparke",
    "Sprinte",
    "Forflytte",
    "Trimme",
    "Løfte",
    "Snurre",
    "Svinge",
    "Svømme",
    "Flyte",
    "Fly",
    "Sveve",
    "Ake",
    "Dra",
  ];

// Koble til lytter til test knapp

// Lage funksjon som henter ut tilfeldig ord

// Fylle inn navn i boksene

const spans = document.querySelectorAll("span");
const inputs = document.querySelectorAll("input");
const testButtonId = document.querySelector("#test");

const random = () => {
    return Math.floor(Math.random() * wordList.length);
};

const addWords = () => {
    [...spans].forEach((span) => {
        span.innerHTML = wordList[random()]
    });
}

addWords();
