---
name: design-studio
description: "All-in-one Design- & UI/UX-Skill — fasst Logo, Brand Identity, Corporate Identity (CIP), UI/UX-Design, shadcn/Tailwind-Komponenten, Design-Tokens/Design-System, Banner (Social/Ads/Web/Print), Icons, Social-Media-Bilder, HTML-Präsentationen/Slides und Datenvisualisierung/Charts in einem Skill zusammen. Use for: design, logo, brand, corporate identity, banner, icon, social media image, slides/presentation, chart/dataviz, design tokens, design system, UI, UX, landing page, dashboard, component, glassmorphism, dark mode, responsive, Tailwind, shadcn/ui. Actions: plan, design, create, generate, build, implement, review, improve, optimize. Routet intern zum passenden Modul (banner-design, brand, design, design-system, slides, ui-ux-pro-max, ui-styling)."
argument-hint: "[was du gestalten willst, z.B. 'logo', 'banner linkedin', 'landing page dark', 'slides pitch', 'design tokens']"
license: MIT
metadata:
  author: claudekit
  version: "1.0.0"
---

# Design Studio — ein Skill für alle Design- & UI/UX-Aufgaben

Dieser Skill bündelt alle bisherigen Einzel-Design-Skills. Statt viele
Slash-Befehle zu haben, rufst du **einen** Skill auf und beschreibst, was du
willst. Ich wähle intern automatisch das passende **Modul** und arbeite nach
dessen Anleitung.

## So funktioniert's

1. Lies die Aufgabe des Users.
2. Wähle in der Tabelle unten das passende Modul (oft mehrere kombinieren).
3. **Lies die zugehörige `modules/<name>/MODULE.md` vollständig** und folge ihr
   exakt — inkl. der dort referenzierten `references/`, `scripts/`, `data/`,
   `templates/`. Die relativen Pfade in den Modulen beziehen sich auf den
   jeweiligen Modul-Ordner.
4. Führe die Aufgabe nach der Modul-Anleitung aus.

## Modul-Routing

| Wenn der User das will … | Modul lesen |
|---|---|
| **UI/UX bauen/planen/reviewen** — Website, Landing Page, Dashboard, SaaS, App; Styles wie Glassmorphism, Brutalism, Bento, Dark Mode; Farbsysteme, Font-Pairing, Accessibility, Animation, Layout | `modules/ui-ux-pro-max/MODULE.md` |
| **Konkrete Komponenten/Styling** — shadcn/ui, Tailwind, Radix, Dialoge, Forms, Tables, Dark-Mode-Theming, responsive Layouts, Canvas-Poster | `modules/ui-styling/MODULE.md` |
| **Logo, Corporate Identity (CIP), Icons, Social-Media-Bilder** — Logo-Generierung (Gemini), CIP mit Mockups, Icon-Design (SVG), Social Photos | `modules/design/MODULE.md` |
| **Banner** — Social Media (Facebook, LinkedIn, YouTube, Instagram…), Ads, Website-Hero, Print; Stile minimalist/gradient/glassmorphism/3D/neon… | `modules/banner-design/MODULE.md` |
| **Brand** — Brand Voice, Tone of Voice, Messaging-Frameworks, Style Guides, Brand-Consistency, Asset-Management | `modules/brand/MODULE.md` |
| **Design-System / Tokens** — Drei-Ebenen-Tokens (primitive→semantic→component), CSS-Variablen, Spacing/Typo-Scales, Komponenten-Specs | `modules/design-system/MODULE.md` |
| **Slides / Präsentationen** — strategische HTML-Präsentationen mit Chart.js, Design-Tokens, Copywriting-Formeln | `modules/slides/MODULE.md` |
| **Charts / Datenvisualisierung** — Diagramme, Dashboards, Chart-Typen | `modules/ui-ux-pro-max/MODULE.md` (Chart-Teil) + `modules/slides/MODULE.md` (Chart.js) |

## Kombinationen (häufige Fälle)

- **Komplette Landingpage im Marken-Look** → `brand` (Tonalität/Farben) →
  `design-system` (Tokens) → `ui-ux-pro-max` (Struktur/Stil) → `ui-styling`
  (Umsetzung).
- **Marken-Launch-Paket** → `design` (Logo + CIP) → `banner-design` (Social/Ads)
  → `slides` (Pitch-Deck).
- **Nur schnell ein Asset** → direkt das passende Modul (`banner-design`,
  `design` für Logo/Icon, `slides`).

## Wichtig

- Immer die **vollständige MODULE.md** des gewählten Moduls lesen, bevor du
  loslegst — dort stehen die eigentlichen Schritte, Skripte und Style-Daten.
- Nichts an den Modul-Ordnern umbenennen; ihre internen relativen Pfade müssen
  intakt bleiben.
- Wenn mehrere Module passen, in der oben genannten Reihenfolge kombinieren.
