---
name: main
description: "Master design skill — aktiviert alle installierten Skills gleichzeitig: impeccable (Brand/Premium-Design), ui-ux-pro-max (50+ Styles, 161 Paletten, 57 Font-Pairings, 99 UX-Regeln), banner-design, brand, design (Logos/Icons/CIP), design-system (Tokens), slides, ui-styling (shadcn/Tailwind). Einmal aufrufen, alles aktiv. Für Websites, Landing Pages, Komponenten, Logos, Banner, Präsentationen, Design-Systeme."
---

# Master Design Skill

Du hast jetzt Zugriff auf alle installierten Design-Skills gleichzeitig. Lies alle folgenden Skill-Dateien und wende ihre Regeln kombiniert auf die Aufgabe an:

## Zu ladende Skills (alle lesen und anwenden)

1. **Impeccable** — Premium Brand-Design, Anti-Slop-Regeln, Typografie, Farbe, Layout, Motion
   - Lies: `.claude/skills/impeccable/SKILL.md` und alle Dateien in `.claude/skills/impeccable/reference/`

2. **UI/UX Pro Max** — 50+ Styles, 161 Farbpaletten, 57 Font-Pairings, 99 UX-Regeln, Stack-Guides
   - Lies: `.claude/skills/ui-ux-pro-max/SKILL.md`

3. **Design** — Logos, Icons, CIP, Social Photos, Banner
   - Lies: `.claude/skills/design/SKILL.md`

4. **Brand** — Brand Voice, Visual Identity, Messaging, Style Guides
   - Lies: `.claude/skills/brand/SKILL.md`

5. **Design System** — Token-Architektur, Komponenten-Spezifikationen
   - Lies: `.claude/skills/design-system/SKILL.md`

6. **UI Styling** — shadcn/ui, Tailwind CSS, Canvas-Designs
   - Lies: `.claude/skills/ui-styling/SKILL.md`

7. **Banner Design** — Social Media, Ads, Web Heroes, Print
   - Lies: `.claude/skills/banner-design/SKILL.md`

8. **Slides** — HTML-Präsentationen, Chart.js, Layout-Strategien
   - Lies: `.claude/skills/slides/SKILL.md`

## Arbeitsweise

1. **Lies zuerst alle relevanten Skill-Dateien** bevor du antwortest oder code schreibst.
2. **Wende die Regeln kombiniert an** — Impeccable gibt die Qualitätslatte vor, UI/UX Pro Max liefert konkrete Daten (Paletten, Fonts, Styles), die anderen liefern domänenspezifisches Wissen.
3. **Bei Konflikten gilt:** Impeccable-Regeln haben Vorrang (Anti-Slop, Brand-Register, Reflex-Reject-Listen).
4. **Wähle selbst** welche Skills für die konkrete Aufgabe am relevantesten sind — bei einer Landing Page alle, bei einem Logo hauptsächlich `design` und `brand`.

## Wenn Magic (21st.dev) verfügbar ist

Falls `mcp__magic__21st_magic_component_builder` im Tool-Set erscheint: nutze Magic zusätzlich für fertige UI-Komponenten als Basis, dann veredle sie mit den Regeln aus Impeccable und UI/UX Pro Max.

## Qualitäts-Pflichtcheck vor jeder Ausgabe

- [ ] Kein Font aus der Impeccable Reflex-Reject-Liste verwendet
- [ ] Kein generisches Agency-Design ("synergy", "unlock potential", gradient text)
- [ ] WCAG AA Kontrast eingehalten
- [ ] `prefers-reduced-motion` berücksichtigt
- [ ] Imagery vorhanden (bei image-led Briefs)
- [ ] Distinct CTAs, nicht derselbe Button-Text wiederholt
- [ ] Motion ist intentional, nicht dekorativ
