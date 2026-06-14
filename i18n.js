let titleEl;
let langToggles;

document.addEventListener('DOMContentLoaded', () => {
    titleEl = document.querySelector('title');
    langToggles = document.querySelectorAll('.lang-toggle span');

    const defaultLang = 'bg';
    let currentLang = localStorage.getItem('siteLang') || defaultLang;

    // Inject SEO tags
    injectHreflangTags();

    // Update document title
    updateDocumentTitle(currentLang);

    // Setup the toggle buttons
    setupToggle();
});

function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'bg') return;

    // Update state
    localStorage.setItem('siteLang', lang);
    document.documentElement.lang = lang;

    // Update UI toggle
    updateToggleUI(lang);

    // Update document title
    updateDocumentTitle(lang);
}

function updateDocumentTitle(lang) {
    if (titleEl) {
        const newTitle = titleEl.getAttribute(`data-title-${lang}`);
        if (newTitle) {
            document.title = newTitle;
        }
    }
}

function updateToggleUI(lang) {
    if (!langToggles) return;
    langToggles.forEach(toggle => {
        if (toggle.dataset.lang === lang) {
            toggle.classList.add('active');
        } else {
            toggle.classList.remove('active');
        }
    });
}

function setupToggle() {
    if (!langToggles) return;

    // Set initial state
    updateToggleUI(document.documentElement.lang);

    langToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = e.target.dataset.lang;
            setLanguage(newLang);
        });
    });
}

function injectHreflangTags() {
    const head = document.head;
    let path = window.location.pathname.split('/').pop();

    // For index/root, default to index.html or empty string for the url
    if (path === '') {
        path = 'index.html';
    }

    const baseDomain = 'http://unichoice.bg/';

    // Check if tags already exist to avoid duplicates
    if (document.querySelector('link[hreflang="en"]')) return;

    const enLink = document.createElement('link');
    enLink.rel = 'alternate';
    enLink.hreflang = 'en';
    enLink.href = baseDomain + path + '?lang=en';

    const bgLink = document.createElement('link');
    bgLink.rel = 'alternate';
    bgLink.hreflang = 'bg';
    bgLink.href = baseDomain + path + '?lang=bg';

    const defLink = document.createElement('link');
    defLink.rel = 'alternate';
    defLink.hreflang = 'x-default';
    defLink.href = baseDomain + path + '?lang=bg';

    head.appendChild(enLink);
    head.appendChild(bgLink);
    head.appendChild(defLink);
}