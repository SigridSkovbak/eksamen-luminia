// ----------------------------------------
// NAVIGATIONSBAR (js tilføjer og fjerne class)
// ----------------------------------------

// Finder nav-elementet i HTML via id="siteNav" og gemmer det i variablen "nav"
const nav = document.getElementById("siteNav");
// Lytter på window (hele browservinduet) — hver gang brugeren scroller kører funktionen
window.addEventListener("scroll", () => {

    // "window.scrollY" = hvor mange pixels brugeren har scrollet ned fra toppen
    if (window.scrollY > 80) { // Hvis det er mere end 80px...
        // ...tilføj klassen "scrolled" til nav-elementet
        // CSS bruger denne klasse til at give nav en baggrundsfarve
        nav.classList.add("scrolled");
    } else {
        // Hvis brugeren scroller tilbage til toppen, fjern klassen igen og Nav bliver gennemsigtig igen
        nav.classList.remove("scrolled");
    }
});

// ----------------------------------------
// PRODUKTBILLEDE - COLOR SWITCHER
// ----------------------------------------

// Color switcher — skifter produktbillede og farvenavn ved klik
const mainImage = document.getElementById("productPicture"); // Finder hovedbilledet via id="productPicture"

// Finder alle colorways på siden og samler dem i en liste
// "querySelectorAll" returnerer en NodeList — lidt som et array af elementer
const colorOptions = document.querySelectorAll(".colorOption");

// Finder teksten der viser det valgte farvenavn under knapperne
const selectedColorText = document.querySelector(".selectedColor em");

// Løber igennem hver farveknap i listen — én ad gangen
colorOptions.forEach((option) => {
    option.addEventListener("click", () => { //Lytter efter når brugeren klikker

        // Løber igennem ALLE farveknapper og fjerner .active klassen
        // Dette sikrer at kun én farve er aktiv ad gangen
        colorOptions.forEach(o => o.classList.remove("active"));
        option.classList.add("active");

        // Hent billedets src og farvenavn fra det klikkede option
        const newSrc = option.querySelector("img").src;
        const newName = option.querySelector(".colorName").textContent;

        // Opdater hovedbilledet og farvenavnet
        mainImage.src = newSrc;
    });
});

// ----------------------------------------
// HIGHLIGHTS CARDS LOGIK
// ----------------------------------------
// Highlights slider — lader brugeren bladre mellem produktets højdepunkter

// Finder slideren, alle kort, dots-containeren og pile-knapperne i HTML
const track = document.querySelector(".highlight-track");
const cards = document.querySelectorAll(".highlight-card");
const dotsContainer = document.getElementById("highlightDots");
const prevBtn = document.getElementById("highlightPrev");
const nextBtn = document.getElementById("highlightNext");

let current = 0; // Holder styr på hvilket kort der vises

// Lav en dot for hvert kort i slideren
cards.forEach(function(card, i) {
    // Opretter et nyt div element i JS og giver det klassen "dot"
    const dot = document.createElement("div");
    dot.classList.add("dot");

    // Første dot starter som aktiv så den matcher det første kort
    if (i === 0) {  
      dot.classList.add("active"); 
    }

    // Når man klikker på en dot, springer slideren til det tilhørende kort
    dot.addEventListener("click", function() {
      goTo(i); 
    });

    //Tilføjer dot'en til dot-containeren i html
    dotsContainer.appendChild(dot); //Her er enkelt dot "child" af cot containeren i html
});

// Funktion der flytter slideren til et bestemt kort
function goTo(index) {

    //Opdater current til det nye kortnummer
    current = index;

    // Hvert kort er 100% bredt — kort nr. 2 ligger på -100%, nr. 3 på -200% osv.
    // translateX flytter hele track'en til venstre så det rigtige kort vises
    track.style.transform = "translateX(-" + (current * 100) + "%)";

    // Løber igennem alle dots og fjerner active fra dem alle
    // Derefter sætter den active på den dot der matcher det aktive kort
    document.querySelectorAll(".dot").forEach (function(dot, i){
      dot.classList.remove("active");
      if (i===current){
        dot.classList.add("active");
      }
    });
}

//PILE
// Venstre pil (prev) — gå ét kort tilbage
prevBtn.addEventListener("click", function() {

    // Hvis vi er på første kort, hop til det sidste — ellers gå én tilbage
    if (current === 0) {
        goTo(cards.length - 1);
    } else {
        goTo(current - 1);
    }
});
    
// Højre pil — gå ét kort frem
nextBtn.addEventListener("click", function() {

    // Hvis vi er på sidste kort, hop til det første — ellers gå én frem
    if (current === cards.length - 1) {
        goTo(0);
    } else {
        goTo(current + 1);
    }
});

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
      <button class="playlist-knap">Gå til playlist</button>
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

// ----------------------------------------
// START - kald funktionen så siden loader playlister
// ----------------------------------------

// Kalder hentPlaylister() så snart script.js kører
hentPlaylister();