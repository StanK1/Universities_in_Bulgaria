document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'bg';
    let currentLang = localStorage.getItem('siteLang') || defaultLang;

    // Apply the language to the HTML tag
    document.documentElement.lang = currentLang;

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
    const titleEl = document.querySelector('title');
    if (titleEl) {
        const newTitle = titleEl.getAttribute(`data-title-${lang}`);
        if (newTitle) {
            document.title = newTitle;
        }
    }
}

function updateToggleUI(lang) {
    const toggles = document.querySelectorAll('.lang-toggle span');
    toggles.forEach(toggle => {
        if (toggle.dataset.lang === lang) {
            toggle.classList.add('active');
        } else {
            toggle.classList.remove('active');
        }
    });
}

function setupToggle() {
    const langToggles = document.querySelectorAll('.lang-toggle span');

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

    const enLink = document.createElement('link');
    enLink.rel = 'alternate';
    enLink.hreflang = 'en';
    enLink.href = window.location.href; // In a real routing setup this would be different

    const bgLink = document.createElement('link');
    bgLink.rel = 'alternate';
    bgLink.hreflang = 'bg';
    bgLink.href = window.location.href;

    // default
    const defLink = document.createElement('link');
    defLink.rel = 'alternate';
    defLink.hreflang = 'x-default';
    defLink.href = window.location.href;

    head.appendChild(enLink);
    head.appendChild(bgLink);
    head.appendChild(defLink);
}