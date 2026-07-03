---
name: aiden-style-website
description: Baut eine neue einseitige Landingpage im selben Look, Aufbau und mit denselben Animationen wie die AIDEN-Website (aiden-redesign/index.html) — Glassmorphism-Nav, goldener Scroll-Faden, Scroll-Reveals, kinematischer Footer usw. Use when the user asks to build a new landing page "im AIDEN-Stil", "wie die AIDEN-Seite", "im selben Stil wie AIDEN" oder eine Schablone/Vorlage aus diesem Projekt für eine neue Website nutzen möchte.
---

# Website im AIDEN-Stil bauen

Diese Skill baut eine neue, eigenständige Ein-Datei-HTML-Landingpage, die
optisch, strukturell und animationstechnisch der AIDEN-Seite
(`aiden-redesign/index.html`) entspricht — nur mit neuen Inhalten für ein
anderes Projekt/eine andere Marke.

## Ablauf

1. **Referenz laden**: Lies `aiden-redesign/index.html` als Referenz für
   CSS-Variablen, Struktur und Animationsmuster. Nutze `template/index.html`
   als bereits generischen Ausgangspunkt (Marken-Platzhalter, keine
   AIDEN-spezifischen Integrationen wie Spline-Robot oder EN-Wörterbuch).
2. **Angaben einsammeln**: Falls der User noch keine Projektangaben gemacht
   hat, frage kompakt nach (oder nutze das Formular in
   `template/PROMPT-VORLAGE.md`):
   - Markenname, Claim, kurze Produktbeschreibung, Zielgruppe
   - Farbpalette (Standard: Schwarz/Weiß/Gold wie AIDEN, wenn nichts anderes
     gewünscht)
   - Welche Sektionen gewünscht/nicht gewünscht sind (siehe Liste unten)
   - Inhalte pro Sektion (auch grob reicht — plausible Beispieltexte
     ergänzen und später vom User korrigieren lassen)
   - Kontaktdaten (E-Mail, Telefon, WhatsApp)
3. **Bauen**: Kopiere `template/index.html` in einen neuen Projektordner,
   ersetze alle `[MARKENNAME]`/`[CLAIM / TAGLINE]`-Platzhalter und die
   Beispielinhalte pro Sektion mit den gesammelten Angaben. Entferne nicht
   gewünschte `<section>`-Blöcke komplett (Struktur bleibt für den Rest
   unverändert).
4. **Verifizieren**: Lokalen Server starten, mit Playwright screenshotten
   (Hero, mittlere Sektion, Footer), auf JS-Fehler prüfen, bevor an den User
   geliefert wird.
5. **Liefern**: Datei per SendUserFile schicken, bei Bedarf committen/pushen
   wie beim Hauptprojekt.

## Was zum "AIDEN-Stil" gehört (immer mitbauen, außer explizit abgewählt)

- Glassmorphism-Navigation: schwebende, transparente Nav-Bar mit
  Blur-Effekt und rotierendem Farbverlauf-Rand
- Scroll-Reveal-Animationen (IntersectionObserver, `.reveal`/`.vis`)
- Goldener Faden: geschwungene, leuchtende SVG-Linie, die sich beim
  Scrollen durch die Seite zieht
- Hover-Mikrointeraktionen: Karten heben sich an, Icons pulsieren,
  Buttons mit Ripple-Effekt
- Cursor-Glow, der dem Mauszeiger folgt
- Ambient-Partikel/Sparkles im Hero und Footer
- Kinematischer Footer-Reveal mit großem Markennamen als Hintergrundtext
- `prefers-reduced-motion` wird respektiert, Fokus-Zustände sichtbar

## Standard-Sektionsliste (aus AIDEN übernommen, einzeln abwählbar)

Intro-Splash · Ankündigungsleiste · Nav · Hero · Trust-/Logo-Leiste ·
Problem-Sektion · Leistungsübersicht · Branchen-/Zielgruppen-Tabs ·
Case Study · Team-/Vertrauens-Sektion · Onboarding-Pfade · Preise ·
Testimonials · FAQ · Abschluss-CTA · Kinematischer Footer · WhatsApp-Bubble

## Technik-Vorgaben

- Ein einzelnes HTML-File (kein Framework, kein Build-Schritt), wie beim
  Original
- Reines HTML/CSS/Vanilla-JS, responsive für Mobile/Tablet/Desktop
- Keine AIDEN-spezifischen Assets (Spline-3D-URL, Telefonnummer,
  E-Mail-Domain) unreflektiert übernehmen — immer durch die Projektangaben
  ersetzen

## Referenzdateien in diesem Repo

- `template/index.html` — bereinigte Grundschablone (Startpunkt)
- `template/PROMPT-VORLAGE.md` — Ausfüll-Formular für Projektangaben
- `aiden-redesign/index.html` — Original als Stil-/Struktur-Referenz
