# UX/Accessibility Journal

## Cyrillic Font Subset Requirements
To ensure proper rendering of Bulgarian characters and accommodate the language switch seamlessly, the typography must incorporate the appropriate font subset. The primary font, **Montserrat**, must load with the `&subset=cyrillic` query parameter from the provider to ensure characters are correctly formed and visually consistent.

## Layout Expansion Strategies (Cyrillic Text Expansion)
Bulgarian/Cyrillic text generally takes 20-30% more horizontal space than its English equivalent. To prevent visual overflow and unintended orphans:
- Responsive font sizing utilizing `clamp()` functions is applied when `html[lang="bg"]` is active. This scales fonts responsively based on viewport width while providing a minimum and maximum font size.
- Padding inside container elements `.box` and `.box-2` has been adjusted to allow proper text reflow.
- Line heights have been slightly extended for readability inside `.lang-bg` contexts to preserve clean vertical rhythm.

## 60-30-10 Color Aesthetic
The strict adherence to Koda Studio's aesthetic provides an elite B2B feel. The application is strictly utilizing:
1. **60% Void Black (#000000)** - Core backgrounds, structural elements.
2. **30% Clean White (#FFFFFF)** - Text, typography, reading areas.
3. **10% Koda Cyan (#4DB2C1)** - Accents, hover states, toggles, box-shadows.
Legacy colors like #212121, #333, and various grays/oranges have been wholly refactored to align with this rule.

## Zero-Flicker i18n Architecture
The implementation of localization ensures seamless context switching without page reloads:
- Leverages `localStorage` to memorize user locale preference across sessions.
- Dynamic CSS (`display: none`) on `.lang-en` / `.lang-bg` classes provides an instantaneous visual change, completely eliminating white flashes.
- Document title dynamically updates by querying contextual `data-title-en` and `data-title-bg` attribute sets.
- Employs `<link rel="alternate" hreflang="...">` to explicitly guide SEO indexing without rendering delays.