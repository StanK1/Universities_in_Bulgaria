# Koda Studio Palette & UX Journal

## Color Aesthetic
- 60% Void Black (#000000)
- 30% Clean White (#FFFFFF)
- 10% Koda Cyan (#4DB2C1)

## UX & Accessibility Learnings
- **Zero-Flicker Translations**: When toggling CSS-based display states using `.lang-en`/`.lang-bg` and the `<html lang="xx">` attribute, managing state purely via deferred JS leads to severe layout shifts on initial load. Injecting a synchronous inline script in `<head>` (e.g. `document.documentElement.lang = localStorage.getItem('siteLang') || 'bg';`) before stylesheets parse provides a native, instantaneous switch.
- **Cyrillic Subsets**: The 'Montserrat' font must always have `&subset=cyrillic` embedded to ensure appropriate weight rendering.
- **Transcreation UX**: Bulgarian text runs consistently 20-30% longer than its English counterpart. Explicit UI scaling with CSS `clamp()` and localized `line-height` adjustments are mandatory for seamless international transitions without card overflow.
