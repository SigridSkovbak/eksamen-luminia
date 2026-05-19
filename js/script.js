// ----------------------------------------
// FETCH PLAYLISTER FRA JSON FIL
// ----------------------------------------

// "async" betyder at funktionen må vente på svar fra fetch. Uden den ville JS fortsætte videre uden at vente på data.
async function hentPlaylister() { 

const response = await fetch("data/playlister.json"); //"fetch()" henter data fra min json fil. 

// ".json()" konverterer svaret fra JSON-format til et JS array. Jeg bruger await igen fordi det også tager lidt tid. 
const playlister = await response.json();

visPlaylister(playlister); // Nu har jeg data - kald funktionen der viser "playlistkortene" på landingpage
}
