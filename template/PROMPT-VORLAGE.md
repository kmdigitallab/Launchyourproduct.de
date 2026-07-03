# Prompt-Vorlage: Website im "AIDEN-Stil" bauen

Diese Vorlage schickst du mir einfach (kopieren, Klammern ausfüllen) und ich baue
die neue Seite mit demselben Aufbau, derselben Optik und denselben Animationen
wie die AIDEN-Seite — nur mit deinen neuen Inhalten.

---

## PROMPT (zum Kopieren)

```
Baue mir eine Landingpage im selben Stil wie die AIDEN-Seite
(aiden-redesign/index.html) — gleicher Look, gleicher Aufbau, gleiche
Animationen, aber mit folgenden neuen Inhalten:

1. PROJEKT
   - Markenname: [z. B. "Nova Fitness"]
   - Claim/Tagline: [z. B. "Dein Coach, immer erreichbar"]
   - Was macht das Produkt/die Firma: [1-2 Sätze]
   - Zielgruppe: [z. B. Fitnessstudios, Privatkunden]

2. FARBEN (optional — sonst übernehme ich Schwarz/Weiß/Gold wie bei AIDEN)
   - Hauptfarbe/Akzent: [z. B. Blau #1a73e8]
   - Grundstimmung: [hell & clean / dunkel & premium / verspielt / seriös]

3. STRUKTUR (Standard = wie AIDEN, einfach anpassen oder weglassen)
   - [ ] Intro-Splash mit großem Markennamen beim Laden
   - [ ] Ankündigungsleiste oben (z. B. Aktion/Angebot)
   - [ ] Glass-Navigation mit Logo, Links, CTA-Button
   - [ ] Hero mit Headline, Unterzeile, 2 CTAs, Trust-Badges
   - [ ] Trust-/Logo-Leiste (laufende Partner-/Tool-Logos)
   - [ ] Problem-Sektion (3-4 Karten "So sieht der Alltag ohne uns aus")
   - [ ] Leistungsübersicht (Kartenraster, 4-6 Leistungen)
   - [ ] Branchen-/Zielgruppen-Tabs mit Detailpanel
   - [ ] Case Study / Erfolgsbeispiel mit Kennzahlen + Ablaufschritten
   - [ ] Team-/Vertrauens-Sektion (wer steckt dahinter)
   - [ ] Onboarding-Pfade (2 Wege, wie man startet, je 3 Schritte)
   - [ ] Preise (Einstiegs-Box + 3-4 Tarif-Karten)
   - [ ] Testimonials (3-5 Kundenstimmen mit Sternen)
   - [ ] FAQ (Akkordeon)
   - [ ] Abschluss-CTA
   - [ ] Kinematischer Footer mit großem Markennamen im Hintergrund
   - [ ] WhatsApp-Bubble unten rechts
   - [ ] Sprachumschalter DE/EN (nur falls gewünscht)

4. INHALTE PRO SEKTION
   [Hier für jede angehakte Sektion in Stichpunkten liefern: Überschrift,
   kurzer Text, ggf. 3-6 Bullet-Punkte oder Karten-Titel. Je konkreter,
   desto weniger muss ich raten. Reicht aber auch grob — Rest fülle ich
   sinnvoll auf und du korrigierst danach.]

5. KONTAKT
   - E-Mail: [...]
   - Telefon: [...]
   - WhatsApp-Nummer: [...]
   - Social-Media-Links: [...]

6. TECHNIK
   - Ein einzelnes HTML-File wie bei AIDEN (kein Framework, kein Build-Schritt)
   - Responsive für Mobile/Tablet/Desktop
   - Deploybar als statische Datei
```

---

## Was ich dann automatisch mitbaue (ohne dass du es extra erwähnen musst)

Diese Dinge gehören zum "AIDEN-Stil" und werden immer mitgeliefert, sofern
du nichts anderes sagst:

- **Glassmorphism-Navigation**: schwebende, transparente Nav-Bar mit
  Blur-Effekt und rotierendem Farbverlauf-Rand
- **Scroll-Reveal-Animationen**: Elemente faden/schieben beim Scrollen ins
  Bild (IntersectionObserver)
- **Goldener Faden / Linien-Effekt**: eine geschwungene, leuchtende Linie,
  die sich beim Scrollen durch die Seite zieht (wie bei launchyourproduct.de)
- **Hover-Mikrointeraktionen**: Karten heben sich leicht an, Icons pulsieren,
  Buttons haben Ripple-Effekt
- **Cursor-Glow**: sanfter Lichtschein, der dem Mauszeiger folgt
- **Ambient-Partikel/Sparkles**: dezente animierte Punkte im Hero und im
  Footer
- **Kinematischer Footer-Reveal**: der Footer schiebt sich beim Scrollen
  unter dem Content hervor, mit großem Markennamen als Hintergrundtext
- **Barrierefreiheit**: `prefers-reduced-motion` wird respektiert,
  Fokus-Zustände sind sichtbar

## Wie der Ablauf danach aussieht

1. Du schickst mir den ausgefüllten Prompt (auch gerne unvollständig/grob).
2. Ich baue eine erste Version als eigenständige HTML-Datei.
3. Ich schicke dir Screenshots + die Datei zum Ansehen.
4. Du gibst Feedback ("Headline ändern", "Farbe anpassen", "Sektion X weg") —
   das mache ich in kleinen Runden, bis es passt.
5. Am Ende committe/pushe ich die fertige Datei auf einen eigenen Branch.

## Tipp

Je genauer Punkt 4 ("Inhalte pro Sektion") ausgefüllt ist, desto weniger
Korrekturrunden brauchen wir. Ein grober Stichpunkt reicht aber auch —
ich schreibe dann plausible Beispieltexte, die du danach anpasst.
