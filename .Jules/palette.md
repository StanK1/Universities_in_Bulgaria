# Koda Studio UX & Accessibility Journal

## 60-30-10 Color Rule
- **Void Black (#000000)**: 60% of the UI (Backgrounds, primary elements).
- **Clean White (#FFFFFF)**: 30% of the UI (Text, negative space elements).
- **Koda Cyan (#4DB2C1)**: 10% of the UI (Accents, active states, calls to action).
*Learning*: Maintaining this strict aesthetic consistency ensures a high-end, premium "Executive Tech" feel. The language toggle states and navigation hover states were updated to strictly use Koda Cyan instead of generic default colors.

## Cyrillic Text Expansion
- Bulgarian words are typically 20-30% longer than English equivalents.
- *Learning*: Fixed-height navigation bars break when Cyrillic text is injected.
- *Solution*:
  - Converted `.topnav` and `ul` to use CSS Flexbox (`display: flex; flex-wrap: wrap;`) to allow elements to wrap or adjust naturally.
  - Removed strict `height: 55px;` replacing it with `min-height: 55px; height: auto;`.
  - Implemented `clamp()` for font sizes and paddings in the navigation (`padding: 14px clamp(8px, 1vw, 16px);`, `font-size: clamp(12px, 1.5vw, 16px);`) to gracefully scale text down on smaller screens before wrapping becomes necessary, maintaining layout integrity without breaking buttons or overflowing cards.
