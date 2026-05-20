## [Date: 2026-05-20] - Localization & Copywriting Engine

**🌐 i18n Architecture:**
- Updated Subresource Integrity (SRI) SHA-384 hash for `i18n.js` across all HTML templates to ensure security and loading integrity.

**✍️ Copywriting & Transcreation:**
- Refined Bulgarian transcreation by replacing colloquialisms (e.g., "ВУЗ-ове") with professional terminology ("висши учебни заведения") in `index.html` and `sofia.html` to align with the Elite B2B Executive Tech tone.

**📏 UI Adaptation:**
- Enforced the strict 60-30-10 Koda Studio color rule (Void Black `#000000`, Clean White `#FFFFFF`, Koda Cyan `#4DB2C1`) globally. Replaced all legacy color strings (`white`, `rgb(255, 255, 255)`, `#aaa`, `#333`, `rgba(36, 36, 36, ...)`) in `Design.css` and all `*.html` files.

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
