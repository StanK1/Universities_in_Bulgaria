## [Date: 2026-05-21] - Localization & Copywriting Engine

**🌐 i18n Architecture:**
- Implemented a zero-flicker language toggle using local storage and inline scripts injected directly into the HTML `<head>` before stylesheets. This updates the `lang` attribute dynamically. SEO tags (hreflang) remain managed by the deferred `i18n.js`. Koda Cyan active states applied.

**✍️ Copywriting & Transcreation:**
- All major site pages (`index.html`, `sofia.html`, `plovdiv.html`, `varna.html`, `baloobrazuvane.html`) were overhauled.
- English copy changed from passive forms to active, powerful B2B tech statements ("We engineer digital platforms").
- Bulgarian copy was expertly transcreated to feature premium authoritative terms ("Изграждаме дигитална инфраструктура", "Ръчно писан код", "Висока производителност", "Възвръщаемост на инвестицията").

**📏 UI Adaptation:**
- Implemented CSS `clamp()` specifically for `html[lang="bg"]` layout contexts. Font sizes were safely scaled down, and navigation padding adjusted to comfortably contain 20-30% longer Cyrillic translations without breaking layout cards or overflowing standard boxes. Primary font mapped strictly to 'Montserrat'.

**⚠️ Integrity Checks:**
- Cyrillic font subset loaded successfully: Pass
- Hreflang SEO tags implemented: Pass
- Zero layout breaks on mobile for BG language: Pass

## [Date: 2026-05-17] - Localization & Copywriting Engine

**🌐 i18n Architecture:**
- Refined `i18n.js` to cache the query selectors for `.lang-toggle span` and `title` outside the event callbacks, minimizing redundant DOM lookups and enhancing responsiveness.
- Centralized slideshow rendering by removing redundant inline scripts for slideshow initialization across all HTML templates, deferring entirely to `animations.js`.

**✍️ Copywriting & Transcreation:**
- Masterfully updated English copy replacing passive voice with dynamic B2B active structures. (e.g., changed "22 out of 52 accredited higher education institutions in Bulgaria are located in Sofia..." to "Sofia hosts 22 of Bulgaria's 52 accredited higher education institutions...").

**📏 UI Adaptation:**
- Preserved existing layout clamps for Cyrillic localization expansions inside `Design.css`, ensuring the 60-30-10 Koda constraint is maintained unconditionally.

**⚠️ Integrity Checks:**
- Cyrillic font subset loaded successfully: Pass
- Hreflang SEO tags correctly injected via JavaScript: Pass
- Zero layout breaks on mobile for BG language: Pass

## [Date: 2026-05-13] - Localization & Copywriting Engine

**🌐 i18n Architecture:**
- Implemented a zero-flicker client-side routing and state management system using `localStorage` and dynamic CSS display logic.
- An elegant 'EN / BG' language toggle was embedded into the global navigation bar, leveraging Koda Cyan for active state indications.
- SEO Integrity secured by dynamically injecting `<link rel="alternate" hreflang="en/bg">` tags based on active locale.
- Enhanced performance and security by loading logic via `defer` and applying SRI SHA-384 hashes.
- Dynamically swap `document.title` on language switch, ensuring a seamless experience.

**✍️ Copywriting & Transcreation:**
- Masterfully transcreated all structural content across `index.html`, `sofia.html`, `plovdiv.html`, `varna.html`, and `baloobrazuvane.html` into B2B Executive Tech Bulgarian (utilizing professional IT terminology like "Изграждаме дигитална инфраструктура", "Ръчно писан код", "Висока производителност", and "Възвръщаемост на инвестицията" (ROI)).
- Refined the English copy cutting fluff and substituting passive tones with active, powerful executive verbs (e.g., "We engineer digital platforms", "operate in the capital, delivering immense ROI for ambitious ventures").
- Added correct `data-title-bg` attributes across HTML files for localized dynamically swapped document titles.

**📏 UI Adaptation:**
- Adapted container paddings and scaled responsive font metrics utilizing `clamp()` within `Design.css` to accommodate the 20-30% character expansion intrinsic to Cyrillic script, avoiding orphan words and overflow.
- Maintained the strict 60-30-10 absolute color rule (Void Black `#000000`, Clean White `#FFFFFF`, Koda Cyan `#4DB2C1`), completely removing legacy styles from `Design.css`.

**⚠️ Integrity Checks:**
- Cyrillic font subset loaded successfully: Pass
- Hreflang SEO tags implemented: Pass
- Zero layout breaks on mobile for BG language: Pass

## [Date: 2026-05-11] - Localization & Copywriting Engine

**🌐 i18n Architecture:**
- Implemented a zero-flicker client-side routing and state management system using `localStorage` and dynamic CSS display logic.
- An elegant 'EN / BG' language toggle was embedded into the global navigation bar, leveraging Koda Cyan for active state indications.
- SEO Integrity secured by dynamically injecting `<link rel="alternate" hreflang="en/bg">` tags based on active locale.
- Enhanced performance and security by loading logic via `defer` and applying SRI SHA-384 hashes.
- Dynamically swap `document.title` on language switch, ensuring a seamless experience.

**✍️ Copywriting & Transcreation:**
- Masterfully transcreated all structural content across `index.html`, `sofia.html`, `plovdiv.html`, `varna.html`, and `baloobrazuvane.html` into B2B Executive Tech Bulgarian (utilizing professional IT terminology like "Изграждаме дигитална инфраструктура", "Ръчно писан код", "Висока производителност", and "Възвръщаемост на инвестицията" (ROI)).
- Refined the English copy cutting fluff and substituting passive tones with active, powerful executive verbs (e.g., "We engineer digital platforms", "operate in the capital, delivering immense ROI for ambitious ventures").
- Localized dynamic city lists across pages to match active user locale state.

**📏 UI Adaptation:**
- Adapted container paddings and scaled responsive font metrics utilizing `clamp()` within `Design.css` to accommodate the 20-30% character expansion intrinsic to Cyrillic script, avoiding orphan words and overflow.
- Maintained the strict 60-30-10 absolute color rule (Void Black `#000000`, Clean White `#FFFFFF`, Koda Cyan `#4DB2C1`).

**⚠️ Integrity Checks:**
- Cyrillic font subset loaded successfully: Pass
- Hreflang SEO tags implemented: Pass
- Zero layout breaks on mobile for BG language: Pass
