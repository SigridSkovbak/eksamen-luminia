# LUMINA Audio – Landing Page
**Multimediedesigner, 1. semester · Case: Landing Page**  
Eksamensprojekt – forbedret version

---
## 🔗 Links 
- 🌐 Live produkt (GitHub Pages)
- 💾 GitHub Repository
- 🎨 Figma designfil - https://www.figma.com/design/KCLmuvT71czhP7Q83Mvk3I/Eksamen--Landingpage-LUMINA?node-id=0-1&t=N9BD1L8FA4k4gOhr-1 
- 📱 Figma prototype 

## 📋 Projektbeskrivelse
Dette projekt er en landingpage for **LUMINA One** – en bærbar Bluetooth-højttaler fra det fiktive brand *LUMINA Audio*. Projektet er udviklet som en del af 1. semesters eksamen på Multimediedesigner-uddannelsen og bygger på en User Centered Development (UCD)-proces med persona "Sofie" som udgangspunkt.
Landingpagen præsenterer produktet, dets farver og funktioner, og sigter mod at skabe en emotionel og visuel oplevelse der matcher målgruppens livsstil: strand, picnic, sociale sammenkomster og nordisk æstetik.


## 🗂️ Fil- og mappestruktur
```
/
├── index.html              # Sidens HTML-struktur
├── css/
│   └── style.css           # Ekstern stylesheet (al styling)
├── js/
│   └── script.js           # JavaScript-funktionalitet
├── data/
│   └── playlister.json     # JSON-data til playlist-sektionen
└── img/
    ├── herolys1.png        # Hero baggrundsbillede
    ├── herodark.png        # Highlight-kort (ambient lys & bluetooth)
    ├── heropicture.png     # Highlight-kort (vandafvisende)
    ├── groupsetting.png    # Inspirationsbillede
    ├── luminapink.png      # Produkt – Dusty Rose
    ├── luminahvid.png      # Produkt – Moonlight White
    ├── luminalilla.png     # Produkt – Lavender Mist
    ├── luminagrøn.png      # Produkt – Sage Green
    ├── luminaparty.png     # Highlight & inspiration
    ├── pinkluminabeach.png # Highlight & inspiration
    ├── luminagreen.png     # Highlight (bærbar)
    ├── luminaconnect.png   # Highlight (Social Connect) & inspiration
    ├── luminagreen1.png    # Inspirationsbillede
    ├── luminafrontpage.png # Inspirationsbillede
    └── anmeldelser.png     # Trustpilot-anmeldelser
```
Alle filer og mapper er navngivet med små bogstaver og bindestreger i overensstemmelse med god web-praksis. CSS er placeret i en ekstern fil så struktur og præsentation er adskilt. `<script>`-tagget er placeret nederst i `<body>` så HTML er fuldt loadet før JavaScript kører.

---
## Teknologier 
- **HTML** - semantisk markup med korrekt brug af `<nav>`, `<header>`, `<section>`, `<article>`, `<aside>` og `<footer>`
- **CSS** – ekstern stylesheet med CSS custom properties, Flexbox, CSS Grid, transitions og hover-effekter
- **JavaScript** - DOM-manipulation, event listeners, slider-logik, color switcher og fetch af JSON
- **JSON** - ekstern datafil til playlist-sektionen
- **GitHub** – versionsstyring med Git
- **GitHub Pages** – publicering og hosting

---
## 📄HTML - Semantiak struktur
Siden er bygget med semantiske HTML5-elementer for at sikre klar struktur og god tilgængelighed:
| Element | Anvendelse |
|---------|-----------|
| `<nav>` | Fast navigation øverst med ankerlinks og CTA-knap |
| `<header>` | Hero med baggrundsbillede, gradient-overlay og heroContent |
| `<section class="features">` | Highlights-slider med kort, pile og dots |
| `<article class="productBrowse">` | Produktsektion med billede, farvevælger og køb-knap |
| `<section class="inspo">` | Inspirationsbilleder i grid-layout |
| `<section class="playlister">` | Playlist-sektion — indhold genereret dynamisk via JS og JSON |
| `<aside id="om">` | Om LUMINA – brandtekst og Trustpilot-anmeldelser |
| `<footer>` | Sidefod med logo, tagline, links og adresse |
| `<figure>` | Hero-fade overlay og inspirationsbilleder |
| `<ul>` / `<li>` | Navigation og footer-links |

### Ankernavigation
Navigation er opbygget med ìd`-attributter på sektionerne, der linkes fra `<nav>`:
```html
<nav class="site-nav" id="siteNav">
  <a class="nav-logo" href="#">LUMINA</a>
  <ul class="nav-links">
    <li><a href="#produkt">PRODUKT</a></li>
    <li><a href="#funktioner">FUNKTIONER</a></li>
    <li><a href="#inspiration">INSPIRATION</a></li>
    <li><a href="#om">OM OS</a></li>
  </ul>
  <a class="nav-cta" href="#produkt">KØB NU</a>
</nav>
```

---
## 🎨CSS - Styling og layout
### CSS Custom Properties (variabler)
Farver er defineret som CSS-variabler i `:root` så de er nemme at ændre ét sted og bruges konsekvent på tværs af hele siden:
```css
:root {
  --color-bg: #E8E0D0;
  --color-bg-alt: #DDD5C5;
  --color-text: #4A3F35;
  --color-accent: #7A6A5A;
  --color-button: #6B5744;
  --color-button-hover: #3D2E22;
  --color-nav: #DDD5C5;
}
```
### Layoutteknikker
**Flexbox** bruges til:
- `.heroContent` — tekst og knap stablet lodret med `flex-direction: column` og `gap`
- `.productBrowse` — billede og produktinfo side om side med `flex-direction: row`
- `.productColor` — farveknapper på en vandret linje
- `.highlight-track` — alle highlight-kort på én vandret linje (slider-effekt)
- `.highlight-nav` — pile og dots centreret på linje
- `.footer-inner` — brand, links og adresse fordelt med `justify-content: space-between`

**CSS Grid** bruges til:
- `.inspoPlaces` — 3 inspirationsbilleder pr. række: `grid-template-columns: repeat(3, 1fr)`
- `#playlist-container` — 2 playlist-kort pr. række: `grid-template-columns: 1fr 1fr`


### Vigtige CSS-valg 


### Designvalg
- **Farvepalette**: Varm sandbeige (`#E8E0D0`) og brun-karamel (`#4A3F35`) — en varmere og mere sofistikeret palet end version 1, som bedre matcher LUMINA Audios nordiske og feminine brandidentitet
- **Typografi**: `Montserrat` via Google Fonts — moderne og let, appellerende til en ung kvindelig målgruppe
- **Knapper**: Konsekvent outline-stil med `background-color: transparent` og `border: 2px solid` — giver et luftigt og premium udtryk der matcher brandet

---
## JavaScript - Funktionalitet
Projektet har fire separate JS-funktioner. Al kode er i `js/script.js` som linkes nederst i `<body>`.

### 1. Navigationsbar — scroll-klasse
Navigationen starter transparent over hero-billedet. Når brugeren scroller mere end 80px ned, tilføjer JS klassen `.scrolled` som CSS bruger til at give nav en baggrundsfarve:
```javascript
const nav = document.getElementById("siteNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
```
### 2. Highlights-slider
En slider der lader brugeren bladre gennem produktets funktioner. JS opretter dynamisk en dot for hvert kort og håndterer navigation med pile og dots. `translateX()` bruges til at skubbe slide-track'en:
```javascript
function goTo(index) {
  current = index;
  track.style.transform = "translateX(-" + (current * 100) + "%)";
  document.querySelectorAll(".dot").forEach(function(dot, i) {
    dot.classList.remove("active");
    if (i === current) dot.classList.add("active");
  });
}
```
Pile-knapperne bruger `if/else` til at wrappe rundt (fra første til sidste kort og omvendt).
### 3. Color switcher — produktbillede
Brugerens klik på en farvevariant opdaterer det store produktbillede og markerer den valgte farve med `.active`-klassen. `.forEach()` sikrer at kun én farve er aktiv ad gangen:
```javascript
colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    colorOptions.forEach(o => o.classList.remove("active"));
    option.classList.add("active");
    mainImage.src = option.querySelector("img").src;
  });
});
```
### 4. Fetch playlister fra JSON
Playlist-sektionen henter data fra `data/playlister.json` med `fetch()` og `async/await`, som venter på svar fra fetch. For hver playliste i JSON-filen bygges et HTML-kort dynamisk og indsættes i DOM'en. Klik på et kort åbner Spotify-linket i en ny fane:
```javascript
async function hentPlaylister() {
  const response = await fetch("data/playlister.json");
  const playlister = await response.json();
  visPlaylister(playlister);
}
function visPlaylister(playlister) {
  const container = document.querySelector("#playlist-container");
  playlister.forEach((playlist) => {
    const kort = document.createElement("div");
    kort.classList.add("playlist-kort");
    kort.innerHTML = `
      <span class="playlist-emoji">${playlist.emoji}</span>
      <h3>${playlist.navn}</h3>
      <p>${playlist.stemning}</p>
      <button class="playlist-knap">Gå til playlist</button>
    `;
    kort.addEventListener("click", () => {
      window.open(playlist.link, "_blank");
    });
    container.appendChild(kort);
  });
}
hentPlaylister();
```
### JavaScript-koncepter anvendt
| Koncept | Anvendelse |
|---------|-----------|
| `getElementById()` | Finder nav-elementet |
| `querySelector()` / `querySelectorAll()` | Selektion af enkelt og multiple elementer |
| `addEventListener()` | Lytter på `scroll`, `click` |
| `classList.add/remove/toggle` | Styrer `.scrolled` og `.active` klasser |
| `createElement()` | Opretter dots og playlist-kort dynamisk |
| `appendChild()` | Tilføjer elementer til DOM |
| `forEach()` | Looper over kort, dots og farve-options |
| `innerHTML` + template literals | Bygger HTML-strenge med `${}` variabler |
| `window.scrollY` | Aflæser brugerens scroll-position på siden|
| `async` / `await` | Venter på svar fra fetch |
| `fetch()` | Henter JSON-data fra ekstern fil |
| `.json()` | Konverterer response til JS-array |
| `window.open()` | Åbner Spotify-link i ny fane |
| `if / else` | Pile-logik til slider-wrap på mine highligh cards (højtalerens funktioner) |

---
## JSON - Datastruktur
### Hvilken type data arbejder jeg med?
Playlister hentes fra `data/playlister.json`. Data er struktureret som et **array af objekter** — altså en liste `[]` der indeholder flere objekter `{}`, ét for hver playliste:
```json
[
  {
    "navn": "Dancing Queen",
    "stemning": "Dance the night away to these iconic songs",
    "emoji": "🪩",
    "link": "https://open.spotify.com/playlist/..."
    }
]
```
Hvert objekt har fire properties:
| Property | Type | Indhold |
|----------|------|---------|
| `navn` | string | Playlistens navn — vises som overskrift på kortet |
| `stemning` | string | En kort beskrivelse — vises som brødtekst |
| `emoji` | string | Et emoji-ikon øverst på kortet |
| `link` | string | URL til Spotify-playlisten — åbnes ved klik |

### Hvorfor passer denne datastruktur til projektet?
Et array af objekter er den ideelle struktur her, fordi alle playlister har de samme fire felter — og fordi JavaScript's `forEach()` kan loope igennem arrayet og bygge ét HTML-kort per objekt. Hvis jeg vil tilføje en ny playliste, tilføjer jeg bare et nyt objekt i JSON-filen uden at ændre noget JavaScript eller HTML.

### Kodeeksempel — visPlaylister()
Funktionen `visPlaylister()` modtager playliste-arrayet og bygger dynamisk et HTML-kort for hver playliste i DOM'en:
```javascript
function visPlaylister(playlister) {
  // 1.Først finder funktionen den tomme `<div id="playlist-container">` i HTML — det er her kortene skal indsættes.
  const container = document.querySelector("#playlist-container");

  // 2. Derefter looper `forEach()` igennem hvert objekt i playliste-arrayet.
  playlister.forEach((playlist) => {

    // 3. For hvert objekt oprettes et nyt `<div>`-element med `createElement()` — det eksisterer kun i hukommelsen og endnu ikke på siden. 
    const kort = document.createElement("div");

    // 4. Giver det CSS-klassen "playlist-kort" så det kan styles 
    kort.classList.add("playlist-kort");

     //5. `innerHTML` med template literals (backticks) bruges til at fylde div'en med HTML, hvor `${}` trækker værdier som `playlist.navn` og `playlist.emoji` direkte ud af JSON-objektet.
    kort.innerHTML = `
      <span class="playlist-emoji">${playlist.emoji}</span>
      <h3>${playlist.navn}</h3>
      <p>${playlist.stemning}</p>
      <button class="playlist-knap">Gå til playlist</button>
    `;
    // 6. Tilføjer en click-event der åbner Spotify-linket i en ny fane
    kort.addEventListener("click", () => {
      window.open(playlist.link, "_blank");
    });
    // 7. Til sidst tilføjer `appendChild()` kortet til containeren i HTML, og kortet bliver synligt på landingpagen. Dette sker for alle seks playlister i arrayet én ad gangen.
    container.appendChild(kort);
  });
}
```
---
## ✅ Validering
- HTML valideret via 
- CSS valideret via
- CSS er placeret i ekstern fil (`css/style.css`) — struktur og præsentation er adskilt

Projektet er versionsstyret med Git og hostet på GitHub.
```bash
git add .
git commit -m "Beskrivende commit-besked"
git push origin main
```

---
## 👤 Studerende
**Navn:** Sigrid Skovbak 
**Uddannelse:** Multimediedesign,m 1. semester 
**Hold:** F26A
**Afleveringsdato:** 1. juni 2026