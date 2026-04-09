# Design System Specification: Kinetic Precision

## 1. Overview & Creative North Star
**The Creative North Star: "The High-Performance Pulse"**

This design system is engineered to feel like a high-end piece of athletic equipment: technical, energetic, and unapologetically premium. We are moving away from the "standard SaaS" aesthetic of thin lines and flat grids toward an **Editorial Kinetic** experience. 

To break the "template" look, this system utilizes **intentional asymmetry**—offsetting headings, using varied container widths, and allowing elements like "glowing" data points to bleed across section boundaries. By layering high-contrast neon accents against a sophisticated charcoal and crisp white foundation, we create an environment that feels fast yet disciplined. The goal is to make the user feel as though they are interacting with a living performance dashboard.

---

## 2. Colors & Atmospheric Depth

The color palette is built on extreme contrast. The primary energy source is the Neon Green, which must be used with surgical precision to guide the eye toward high-value actions.

### Core Tones
*   **Primary (Action):** `#576500` (Used for critical hits of color)
*   **Primary Container (The Pulse):** `#DFFF00` (The high-contrast Neon Green for highlights and primary CTA surfaces)
*   **Surface:** `#FCF9F8` (The Crisp White base)
*   **On-Surface:** `#1C1B1B` (The deep charcoal/off-black for authoritative text)
*   **Secondary Container:** `#E0E0D9` (A muted technical grey for supporting elements)

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through **background color shifts**. For instance, a `surface-container-low` section should sit flush against a `surface` background to denote a change in context. This creates a more seamless, modern flow.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Each "inner" container should utilize a tier higher or lower in the `surface-container` scale to define importance:
*   **Base:** `surface`
*   **Cards/Modules:** `surface-container-lowest` (pure white) to pop off a light background.
*   **Inset Areas:** `surface-container-high` to create a "recessed" feel for data readouts.

### The "Glass & Gradient" Rule
To add soul to the interface, floating elements (like status chips or mobile navs) should utilize **Glassmorphism**. Use semi-transparent variants of `surface` with a 20px-40px backdrop-blur. For main Hero CTAs, apply a subtle linear gradient from `primary` (#576500) to `primary-container` (#DFFF00) at a 135-degree angle to create a sense of metallic sheen.

---

## 3. Typography: Editorial Authority

The choice of **Manrope** provides a geometric, technical feel that remains highly legible at high speeds.

*   **Display (LG: 3.5rem):** Reserved for hero impact. Use negative letter-spacing (-0.02em) and Bold weight to command the page.
*   **Headline (MD: 1.75rem):** Used for section starts. Often paired with a Neon Green accent underline or a "glowing" dot indicator.
*   **Title (MD: 1.125rem):** The workhorse for card titles and module headers.
*   **Body (LG: 1rem):** Optimized for readability with a generous 1.6 line-height.
*   **Label (SM: 0.6875rem):** All-caps with +0.05em tracking. Used for technical data points and secondary metadata.

The hierarchy communicates a "Data-First" identity, where headings are treated like headlines in a premium sports magazine.

---

## 4. Elevation & Depth

We move beyond drop shadows to **Tonal Layering**.

*   **The Layering Principle:** Avoid shadows where possible. Place a `surface-container-lowest` card on a `surface-container-low` background. The subtle 2-3% shift in luminosity is enough for the eye to perceive depth without the visual clutter of a shadow.
*   **Ambient Glow (Shadow Alternative):** When an element must float, use a "Neon Shadow." Instead of black, the shadow should be `primary` (#576500) at 5% opacity with a 40px blur. This creates a "glow" effect that feels like an LED screen.
*   **The "Ghost Border" Fallback:** If a container requires a border for accessibility, use `outline-variant` at 15% opacity. Never use 100% opaque lines.
*   **Glassmorphism:** For overlays, use a background of `surface/80%` with a blur to allow the energetic neon highlights from the background to bleed through softly.

---

## 5. Components

### Buttons
*   **Primary:** Background `#DFFF00`, Text `#1C1B1B`. Radius `lg` (2rem). No border. On hover, apply the "Ambient Glow."
*   **Secondary:** Background `transparent`, Ghost Border (`outline-variant` at 20%), Text `#1C1B1B`.
*   **Tertiary:** Text-only with a `primary-container` 2px bottom-border that extends on hover.

### Cards & Lists
*   **Forbid dividers.** Use `Spacing 8` (2.75rem) to separate list items or subtle background alternating (`surface` vs `surface-container-low`).
*   **Data Cards:** Use `radius-xl` (3rem) for a friendly yet futuristic tech look.

### Input Fields
*   **State:** Default inputs use `surface-container-lowest` with a "Ghost Border."
*   **Focus:** The border disappears and is replaced by a 2px `primary-container` (#DFFF00) glow.

### Signature Component: The "Pulse Marker"
A small, circular Neon Green element used to denote "Live" data or active tracking. It should have a CSS animation scaling from 1.0 to 1.2 with a blur to simulate a digital heartbeat.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. A 60/40 split grid is more dynamic than 50/50.
*   **Do** use the Spacing Scale strictly. Gaps are as important as the content.
*   **Do** use Neon Green (#DFFF00) for "Action" and "Success" only.

### Don't:
*   **Don't** use 1px solid black or grey borders. It breaks the "premium equipment" feel.
*   **Don't** use standard "Drop Shadows." Use tonal shifts or ambient glows.
*   **Don't** center-align long blocks of body text. Keep it left-aligned for a technical, editorial look.
*   **Don't** use more than three Neon Green elements on screen at once to avoid "visual noise."

---

## 7. Spacing & Rhythm

All spacing must follow the **3.5px Base**.
*   **Section Padding:** Use `Spacing 24` (8.5rem) to allow the "Modern" aesthetic to breathe.
*   **Internal Card Padding:** Use `Spacing 6` (2rem) to create a luxurious sense of space around data points.
*   **Visual Rhythm:** Elements should "stagger." If an image is on the right, the next section's image should be slightly offset or overlapping a background container to maintain the Kinetic feel.