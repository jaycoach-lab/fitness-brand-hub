# Design System Specification: Editorial Precision

## 1. Overview & Creative North Star
**The Creative North Star: "The Intellectual Luminary"**

This design system rejects the "cookie-cutter" SaaS aesthetic in favor of a high-end editorial experience. It is designed to feel like a premium digital publication—authoritative, airy, and meticulously composed. We move beyond the rigid, boxy constraints of traditional UI by embracing **intentional asymmetry** and **tonal depth**. 

The hallmark of this system is the tension between the technical precision of the **Pretendard** typeface and a fluid, layered layout. We treat the screen not as a flat canvas, but as a three-dimensional space where content floats on varied planes of light and shadow.

---

## 2. Colors & Surface Architecture

Our palette is rooted in sophisticated violets and deep indigos, moving away from "neutral greys" to ensure every pixel feels branded and intentional.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be established exclusively through background color shifts or subtle tonal transitions. 
*   *Example:* A `surface-container-low` section sitting directly on a `surface` background provides all the definition a user needs without the visual "noise" of a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, semi-translucent paper.
*   **Base:** `surface` (#f9f5ff)
*   **Depth Level 1:** `surface-container-low` (#f2efff) for subtle grouping.
*   **Depth Level 2:** `surface-container` (#e9e5ff) for standard interactive cards.
*   **Depth Level 3:** `surface-container-high` (#e2dfff) for emphasized content.

### The "Glass & Gradient" Rule
To escape a "flat" look, floating elements (modals, dropdowns, navigation bars) should utilize **Glassmorphism**.
*   **Formula:** `surface` color at 70% opacity + `backdrop-blur` (20px).
*   **Signature Textures:** For primary CTAs and Hero backgrounds, use a linear gradient: `primary` (#1849e5) to `primary-container` (#859aff) at a 135-degree angle. This adds a "soul" to the interface that flat fills cannot replicate.

---

## 3. Typography: The Pretendard Standard

We have transitioned the entire system to **Pretendard**, a typeface chosen for its exceptional legibility and neutral-yet-modern character. It acts as the "anchor" for our editorial layouts.

| Role | Token | Weight | Size | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | 700 (Bold) | 3.5rem | -0.02em |
| **Headline** | `headline-lg` | 600 (SemiBold) | 2.0rem | -0.01em |
| **Title** | `title-lg` | 600 (SemiBold) | 1.375rem | 0 |
| **Body** | `body-lg` | 400 (Regular) | 1.0rem | 0 |
| **Label** | `label-md` | 500 (Medium) | 0.75rem | +0.02em |

**Editorial Intent:** Use `display-lg` with tight tracking for hero moments. For long-form reading, `body-lg` provides a comfortable line height (1.6) to ensure the educational content feels accessible and premium.

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** rather than traditional structural lines.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f2efff) section to create a soft, natural lift.
*   **Ambient Shadows:** If an element must "float," use a shadow tinted with the `on-surface` color.
    *   *Spec:* `0px 12px 32px rgba(43, 42, 81, 0.06)`. This mimics natural ambient light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, it must be a **Ghost Border**: `outline-variant` (#aba9d7) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`). Roundedness: `full`. No border.
*   **Secondary:** `secondary-container` fill with `on-secondary-container` text.
*   **Tertiary:** Ghost style. No fill, no border. Uses `primary` text.

### Cards & Lists
*   **Strict Rule:** No divider lines. Use vertical white space (32px or 48px from our scale) or a slight shift from `surface` to `surface-container-lowest` to separate items.
*   **Interaction:** On hover, a card should transition from `surface-container` to `surface-container-high` with a subtle 4px vertical lift.

### Input Fields
*   **Styling:** Use `surface-container-highest` as the fill.
*   **States:** On focus, the background remains, but a 2px "Ghost Border" of `primary` appears at 40% opacity. This maintains the soft aesthetic while indicating activity.

### Additional Signature Component: The "Content Spotlight"
A large-scale container using `tertiary-container` (#f790e0) with a 20% opacity. Use this for pull-quotes, important tips, or "Eureka" moments within the Academy context.

---

## 6. Do's and Don'ts

### Do
*   **Do** embrace asymmetry. Align text to the left while keeping a visual balance with an image offset to the right.
*   **Do** use the full spectrum of `surface-container` tokens to create "rooms" within the page.
*   **Do** prioritize whitespace. If a layout feels "crowded," double the padding.

### Don't
*   **Don't** use 1px solid black or grey borders. This immediately destroys the editorial feel.
*   **Don't** use standard "Drop Shadows." Always tint your shadows with the background hue to maintain color harmony.
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#2b2a51) to keep the contrast sophisticated rather than harsh.