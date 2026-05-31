# LUMINA Audio – Landing Page

**Multimediedesigner, 1. semester · Case: Landing Page**  
Eksamensprojekt – forbedret version

---
## 🔗 Links 
🌐 Live produkt (GitHub Pages)
💾 GitHub Repository
🎨 Figma designfil
📱 Figma prototype 

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
## HTML - Semantiak struktur
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

## CSS - Styling og layout
### Layoutteknikker
### Vigtige CSS-valg 
### Designvalg
---
## JavaScript - Funktionalitet
### JavaScript metoder anvendt
---

## Validering
---

## Studerende
**Navn:**
**Uddannelse:**
**Hold:**
**Afleveringsdato:** 