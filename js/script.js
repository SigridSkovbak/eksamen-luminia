// ----------------------------------------
// FETCH PLAYLISTER FRA JSON FIL
// ----------------------------------------

// "async" skriver jeg foran funktionen fordi den henter data udefra.
// Det betyder: "vent venligst på svar før du går videre". Uden async/await ville JS ikke vente — og man ville få en tom side.
async function hentPlaylister() { 

const response = await fetch("data/playlister.json"); //"fetch()" henter data fra min json fil."await" venter på dataen.

// ".json()" konverterer svaret (response) fra JSON-format (rå data) til et JS array. Jeg bruger await igen fordi det også tager lidt tid. 
const playlister = await response.json();

visPlaylister(playlister); // Nu har jeg data som et js array - kald funktionen der viser "playlistkortene" på landingpage
}

// ----------------------------------------
// VIS PLAYLISTER I DOM
// ----------------------------------------

// Funktionen modtager playlister-arrayet som input (parameter)
// Den looper igennem hver playliste og bygger et HTML kort til hver én.
function visPlaylister(playlister) {

  // "querySelector()"" finder mit tomme div i HTML med id="playlist-container".
  const container = document.querySelector("#playlist-container");

  // "forEach" looper igennem hvert objekt ("playliste") i arrayet én af gangen.
  playlister.forEach((playlist) => {

    // "createElement()" opretter et nyt tomt <div> element i hukommelsen. Det er ikke synligt på siden endnu — det tilføjer man til sidst.
    const kort = document.createElement("div");

    // "classList.add()" giver vores nye div en CSS class. Så man kan style alle playlist-kort ens i CSS.
    kort.classList.add("playlist-kort");

    // "innerHTML" bestemmer hvad der skal stå inde i vores div.
    // Man bruger backticks (`) i stedet for "citationstegn" fordi backticks tillader at skrive HTML over flere linjer
    // og indsætte variabler direkte med ${}.
    // playlist.emoji, playlist.navn osv. henter værdier fra JSON objektet.
    kort.innerHTML = `
      <span class="playlist-emoji">${playlist.emoji}</span>
      <h3>${playlist.navn}</h3>
      <p>${playlist.stemning}</p>
      <button class="playlist-knap">Åbn playlist</button>
    `;

    // "addEventListener()" lytter efter om brugeren klikker på playlist kortet.
    // Når det sker, kører koden inde i () — det kaldes en arrow function.
    kort.addEventListener("click", () => {

      // "window.open()" åbner playlist linket i browseren.
      // "playlist.link" henter linket fra JSON objektet.
      // "_blank" betyder at linket åbner i en ny fane.
      window.open(playlist.link, "_blank");
    });

    // "appendChild()" tilføjer det færdige kort til containeren i HTML.
    // Og nu bliver kortet synligt på landingpage. Det sker for hver playliste i arrayet én ad gangen.
    container.appendChild(kort);
  });
}