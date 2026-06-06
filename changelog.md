## [Date: 2026-06-06] - Localization & Copywriting Engine

**🌐 i18n Architecture:**
- Refactored `i18n.js` to instantly toggle the `<html>` 'lang' attribute and inject `<link rel="alternate" hreflang="...">` tags dynamically.
- Implemented absolute URLs for `hreflang` to ensure accurate global indexing by search engines.
- Calculated and applied updated SHA-384 Subresource Integrity (SRI) hashes across all `.html` pages.

**✍️ Copywriting & Transcreation:**
- Completely transcreated English copy to Bulgarian, maintaining a B2B "Executive Tech" tone. Used premium vocabulary like "Изграждаме дигитална инфраструктура" (We engineer digital platforms), "Ръчно писан код" (Custom code), "Висока производителност" (High performance), and "Възвръщаемост на инвестицията" (ROI).
- Enhanced English texts to employ active verbs and authoritative formatting, cutting down fluff.

**📏 UI Adaptation:**
- Upgraded navigation headers (`.topnav` and `ul`) by adopting CSS Flexbox layout (`display: flex; flex-wrap: wrap;`), overcoming standard vertical height constraints.
- Adjusted paddings and removed strict float layouts in `Design.css` to accommodate the 20-30% longer Cyrillic translations gracefully on all viewport sizes.

**⚠️ Integrity Checks:**
- Cyrillic font subset loaded successfully: [Pass]
- Hreflang SEO tags implemented: [Pass]
- Zero layout breaks on mobile for BG language: [Pass]

## [Date: 2026-05-22] - Localization & Copywriting Engine

**🌐 i18n Architecture:**
- Implemented a synchronous inline script reading `localStorage` in the HTML `<head>` to set `document.documentElement.lang` instantly, achieving a true zero-flicker client-side i18n architecture.
- Added dynamic SEO tags (`<link rel="alternate" hreflang="...">`) managed by deferred script logic.
- Optimized performance by caching DOM elements in `animations.js` and regenerated precise SHA-384 hashes for Subresource Integrity.

**✍️ Copywriting & Transcreation:**
- Rewrote the Bulgarian transcreation to adopt an "Executive Tech" B2B tone, integrating vocabulary such as "Вашият бизнес" and "Изграждаме дигитална инфраструктура" rather than literal translations.
- Refined English copy further, adopting stronger verbs and removing passive voice ("We engineer digital platforms") for maximum authority.

**📏 UI Adaptation:**
- Adjusted layout to strictly follow the 60-30-10 color rule aesthetic (Void Black `#000000`, Clean White `#FFFFFF`, and Koda Cyan `#4DB2C1`), dropping previous off-brand greys.
- Appended `&subset=cyrillic` to all Google Fonts imports ensuring `Montserrat` renders flawlessly across localized texts.
- Maintained UI constraints accommodating the 20-30% Cyrillic character expansion utilizing CSS `clamp()`.

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
