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

   
  });
}

