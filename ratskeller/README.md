# Ratskeller Rodenberg — Website

Einseitige, responsive Restaurant-Website für den **Ratskeller Rodenberg**
(Lange Straße 42, 31552 Rodenberg). Reines HTML/CSS/JS, kein Build-Schritt,
kein Framework — einfach `index.html` öffnen oder auf beliebiges Hosting legen.

```
ratskeller/
├── index.html   → Seitenstruktur, Inhalte, Interaktions-JS (am Dateiende)
├── styles.css   → Design-System & Layout
└── README.md    → diese Datei
```

## Design-System (via Design-Studio-Skill / ui-ux-pro-max)

- **Stil:** Fine-Dining Dark Mode, warm — „Kerzenlicht auf Espresso".
- **Typografie:** Playfair Display (Überschriften) + Karla (Fließtext), Google Fonts.
- **Farben:** Espresso-Dunkel `#14100b`, Kerzen-Gold `#d4af37`, Deister-Rotwein `#8f2f2f`, Creme-Text `#f6ecd8`.
- **Tokens:** als CSS-Variablen in `:root` (siehe `styles.css`) — zentral anpassbar.

## Umgesetzte Features (aus der Analyse führender Restaurant-Websites)

- **Immersiver Dark-Hero** mit großem Foto, klarer Headline & zwei CTAs oberhalb der Falz.
- **Sticky-Navigation**, die beim Scrollen transparent → deckend wird; mobiles Burger-Menü.
- **Interaktive Speisekarte** mit Kategorie-Tabs (Tastatur-bedienbar), Beschreibungen,
  Preisen (tabellarische Ziffern) und Diät-Tags (Veg/Vegan/Saison) — 93 % der Gäste
  prüfen die Karte online vor dem Besuch.
- **Direkte Reservierungs-Anfrage** ohne Drittanbieter-Weiterleitung, mit clientseitiger Validierung.
- **Öffnungszeiten** mit automatischer Hervorhebung des heutigen Tages.
- **Anlässe/Feiern-Sektion** (Familienfeiern, Trauerkaffee, Firmen-/Vereinsessen).
- **Anfahrt** mit eingebetteter Karte + `Restaurant`-Structured-Data (JSON-LD) für SEO.
- **Barrierefreiheit & Performance:** WCAG-Kontraste, Fokus-Ringe, `prefers-reduced-motion`,
  Lazy-Loading, Scroll-Reveal mit sauberem Fallback, mobil-first responsive (375–1440 px).

## Zielgruppe (Rodenberg / Schaumburger Land)

- **Einheimische & Stammgäste** aus Rodenberg und den umliegenden 16 Ortschaften.
- **Familien & Feiernde** — zwei Etagen für Geburtstage, Taufen, Trauerkaffees, Vereinsessen.
- **Ausflügler & Wanderer** am Deister/Höhenweg (Weserbergland), Einkehr nach der Tour.
- **Tagesgäste aus der Region Hannover** — ~20 Min. über die A2 (Abfahrt 37).

Ton daher: bodenständig-herzlich statt abgehoben; regionale Verankerung (Deister,
Süntel, Bückeberge) und „gemütlich auf zwei Etagen" stehen im Vordergrund.

## Inhalte anpassen / echte Fotos einsetzen

Aktuell sind als **Platzhalter hochwertige Unsplash-Fotos** verlinkt. Für den
Live-Betrieb durch eigene Aufnahmen ersetzen (Gastraum, Gerichte, Team):

1. Fotos (Querformat, ≥ 1600 px, als `.jpg`/`.webp`) in einen Ordner `assets/` legen.
2. In `index.html` die `https://images.unsplash.com/...`-URLs durch die eigenen
   Pfade ersetzen (Hero-Bild steht in `styles.css` unter `.hero__bg`).
   Fehlt ein Bild, greift automatisch eine warme Fallback-Fläche — nichts wirkt „kaputt".
3. **Noch zu prüfen/ergänzen:** Telefonnummer, E-Mail (`info@ratskeller-rodenberg.de`
   ist ein Platzhalter), Preise, Speisekarte, Impressum & Datenschutz.

> Reservierungsformular: sendet aktuell nur clientseitig eine Bestätigung. Zum
> echten Versand ein Formular-Backend (z. B. Formspree) oder `mailto:` anbinden.
