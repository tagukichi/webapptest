document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニューの開閉処理
    const hamburgerBtn = document.querySelector('.js-hamburger-trigger');
    const globalNav = document.querySelector('.l-global-nav');
    const body = document.body;

    if (hamburgerBtn && globalNav) {
        hamburgerBtn.addEventListener('click', () => {
            globalNav.classList.toggle('is-open');
            hamburgerBtn.classList.toggle('is-open');
            body.classList.toggle('is-open'); // bodyにis-openクラスをトグルしてスクロールを固定
        });

        // ナビゲーションリンクがクリックされたらメニューを閉じる
        globalNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                globalNav.classList.remove('is-open');
                hamburgerBtn.classList.remove('is-open');
                body.classList.remove('is-open');
            });
        });
    }


});


/*
 * FLOCSS - Architecture for CSS
 *
 * This CSS is structured following the FLOCSS methodology:
 * Foundational, Layout, Object (Component, Project, Utility).
 *
 * Foundational: Base styles, resets, typography defaults.
 * Layout: Major page sections (header, footer, main, container).
 * Object: Reusable UI patterns.
 *   Component: Independent, reusable UI elements (buttons, cards).
 *   Project: Specific UI patterns tied to a project or page section (hero, feature list).
 *   Utility: Single-purpose, often atomic classes (spacing, text alignment).
 */

/* Foundational */
:root {
    --color - primary: #007bff;
    --color - secondary: #6c757d;
    --color - success: #28a745;
    --color - info: #17a2b8;
    --color - warning: #ffc107;
    --color - danger: #dc3545;
    --color - light: #f8f9fa;
    --color - dark: #343a40;
    --color - white: #fff;
    --color - gray - 100: #f8f9fa;
    --color - gray - 200: #e9ecef;
    --color - gray - 300: #dee2e6;
    --color - gray - 400: #ced4da;
    --color - gray - 500: #adb5bd;
    --color - gray - 600: #6c757d;
    --color - gray - 700: #495057;
    --color - gray - 800: #343a40;
    --color - gray - 900: #212529;

    --font - family - base: 'Noto Sans JP', sans - serif;
    --font - family - heading: 'Poppins', sans - serif;

    --spacing - xs: 0.25rem; /* 4px */
    --spacing - sm: 0.5rem;  /* 8px */
    --spacing - md: 1rem;    /* 16px */
    --spacing - lg: 1.5rem;  /* 24px */
    --spacing - xl: 2rem;    /* 32px */
    --spacing - xxl: 3rem;   /* 48px */
    --spacing - xxxl: 4rem;  /* 64px */

    --border - radius: 0.25rem;
    --transition - speed: 0.3s;
}

*, *:: before, *::after {
    box - sizing: border - box;
}

html {
    scroll - behavior: smooth;
}

body {
    margin: 0;
    font - family: var(--font - family - base);
    line - height: 1.6;
    color: var(--color - gray - 800);
    background - color: var(--color - white);
    -webkit - font - smoothing: antialiased;
    -moz - osx - font - smoothing: grayscale;
}

/* Accessibility: Hide content visually but keep for screen readers */
.sr - only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white - space: nowrap;
    border: 0;
}

a {
    color: var(--color - primary);
    text - decoration: none;
    transition: color var(--transition - speed) ease;
}

a:hover {
    color: #0056b3; /* Darker primary color, corrected from 'darken()' */
    text - decoration: underline;
}

img {
    max - width: 100 %;
    height: auto;
    display: block;
}

h1, h2, h3, h4, h5, h6 {
    font - family: var(--font - family - heading);
    margin - top: 0;
    margin - bottom: var(--spacing - md);
    line - height: 1.2;
    color: var(--color - gray - 900);
}

p {
    margin - top: 0;
    margin - bottom: var(--spacing - md);
}

/* Layout */
.l - container {
    max - width: 1200px;
    margin - left: auto;
    margin - right: auto;
    padding - left: var(--spacing - md);
    padding - right: var(--spacing - md);
}

.l - section {
    padding - top: var(--spacing - xxl);
    padding - bottom: var(--spacing - xxl);
}

.l - section--gray {
    background - color: var(--color - gray - 100);
}

.l - header {
    background - color: var(--color - white);
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    padding: var(--spacing - sm) 0;
    position: sticky;
    top: 0;
    z - index: 100;
}

.l - header__inner {
    display: flex;
    justify - content: space - between;
    align - items: center;
}

.l - header__logo a {
    font - family: var(--font - family - heading);
    font - size: 1.8rem;
    font - weight: 700;
    color: var(--color - dark);
    text - decoration: none;
}

.l - header__logo a:hover {
    color: var(--color - primary);
}

.l - footer {
    background - color: var(--color - dark);
    color: var(--color - light);
    padding: var(--spacing - xl) 0;
    text - align: center;
}

.l - footer__copyright {
    font - size: 0.9rem;
    margin - bottom: 0;
}

.l - grid {
    display: grid;
    gap: var(--spacing - xl);
}

.l - grid--2col {
    grid - template - columns: 1fr; /* Default for mobile */
}

@media(min - width: 768px) {
    .l - grid--2col {
        grid - template - columns: repeat(2, 1fr);
    }
}

.l - grid--3col {
    grid - template - columns: 1fr; /* Default for mobile */
}

@media(min - width: 768px) {
    .l - grid--3col {
        grid - template - columns: repeat(2, 1fr);
    }
}

@media(min - width: 1024px) {
    .l - grid--3col {
        grid - template - columns: repeat(3, 1fr);
    }
}


/* Object - Component */
.c - button {
    display: inline - flex;
    align - items: center;
    justify - content: center;
    padding: var(--spacing - sm) var(--spacing - lg);
    border - radius: var(--border - radius);
    font - weight: 700;
    text - decoration: none;
    transition: all var(--transition - speed) ease;
    border: 1px solid transparent;
    cursor: pointer;
    font - size: 1rem;
}

.c - button--primary {
    background - color: var(--color - primary);
    color: var(--color - white);
}

.c - button--primary:hover {
    background - color: #0056b3; /* Darker primary */
    color: var(--color - white);
    text - decoration: none;
}

.c - button--secondary {
    background - color: var(--color - secondary);
    color: var(--color - white);
}

.c - button--secondary:hover {
    background - color: #545b62; /* Darker secondary */
    color: var(--color - white);
    text - decoration: none;
}

.c - button--outline - primary {
    background - color: transparent;
    color: var(--color - primary);
    border - color: var(--color - primary);
}

.c - button--outline - primary:hover {
    background - color: var(--color - primary);
    color: var(--color - white);
    text - decoration: none;
}

.c - button--large {
    padding: var(--spacing - md) var(--spacing - xl);
    font - size: 1.1rem;
}

.c - nav {
    display: block; /* Default to block for mobile */
}

.c - nav__list {
    list - style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: var(--spacing - md);
}

.c - nav__link {
    display: block;
    padding: var(--spacing - sm) var(--spacing - xs);
    color: var(--color - dark);
    font - weight: 700;
    text - decoration: none;
    position: relative;
}

.c - nav__link: hover,
.c - nav__link.is - current {
    color: var(--color - primary);
    text - decoration: none;
}

.c - nav__link.is - current::after {
    content: '';
    position: absolute;
    left: var(--spacing - xs);
    right: var(--spacing - xs);
    bottom: 0;
    height: 2px;
    background - color: var(--color - primary);
}

/* Hamburger menu styles */
.c - hamburger {
    display: none; /* Hidden by default on desktop */
    flex - direction: column;
    justify - content: space - between;
    width: 30px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z - index: 101; /* Ensure it's above other elements */
}

.c - hamburger span {
    display: block;
    width: 100 %;
    height: 2px;
    background - color: var(--color - dark);
    transition: all var(--transition - speed) ease;
}

/* States for hamburger menu */
.c - hamburger.is - open span: nth - child(1) {
    transform: translateY(9px) rotate(45deg);
}

.c - hamburger.is - open span: nth - child(2) {
    opacity: 0;
}

.c - hamburger.is - open span: nth - child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

/* Mobile navigation overlay */
@media(max - width: 767px) {
    .l - header__nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100 %;
        height: 100 %;
        background - color: var(--color - dark);
        opacity: 0;
        visibility: hidden;
        transition: opacity var(--transition - speed) ease, visibility var(--transition - speed) ease;
        display: flex;
        align - items: center;
        justify - content: center;
        z - index: 99;
    }

    .l - header__nav.is - open {
        opacity: 1;
        visibility: visible;
    }

    .c - nav__list {
        flex - direction: column;
        text - align: center;
        gap: var(--spacing - xl);
    }

    .c - nav__link {
        color: var(--color - white);
        font - size: 1.5rem;
        padding: var(--spacing - sm) 0;
    }

    .c - nav__link: hover,
    .c - nav__link.is - current {
        color: var(--color - primary);
    }

    .c - nav__link.is - current::after {
        left: 20 %;
        right: 20 %;
        background - color: var(--color - primary);
    }

    .c - hamburger {
        display: flex; /* Show hamburger on mobile */
    }

    /* Prevent body scroll when nav is open */
    body.is - open {
        overflow: hidden;
    }
}

.c - heading {
    font - family: var(--font - family - heading);
    margin - bottom: var(--spacing - lg);
    color: var(--color - gray - 900);
}

.c - heading--primary {
    font - size: clamp(2rem, 5vw, 3rem); /* Responsive font size */
    font - weight: 700;
}

.c - heading--secondary {
    font - size: clamp(1.5rem, 4vw, 2.5rem);
    font - weight: 700;
}

.c - text {
    font - size: 1rem;
    line - height: 1.8;
    color: var(--color - gray - 700);
}

.c - card {
    background - color: var(--color - white);
    border - radius: var(--border - radius);
    box - shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    display: flex;
    flex - direction: column;
    transition: transform var(--transition - speed) ease;
}

.c - card:hover {
    transform: translateY(-5px);
}

.c - card__img {
    width: 100 %;
    height: 200px;
    object - fit: cover;
}

.c - card__content {
    padding: var(--spacing - lg);
    flex - grow: 1;
    display: flex;
    flex - direction: column;
}

.c - card__title {
    font - family: var(--font - family - heading);
    font - size: 1.4rem;
    font - weight: 700;
    margin - bottom: var(--spacing - sm);
    color: var(--color - gray - 900);
}

.c - card__text {
    font - size: 0.95rem;
    line - height: 1.7;
    color: var(--color - gray - 700);
    margin - bottom: 0;
}

/* Object - Project */
.p - hero {
    position: relative;
    height: 60vh;
    min - height: 300px; /* Minimum height for smaller screens */
    display: flex;
    align - items: center;
    justify - content: center;
    color: var(--color - white);
    text - align: center;
    overflow: hidden;
}

.p - hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100 %;
    height: 100 %;
    background - color: rgba(0, 0, 0, 0.4); /* Overlay for readability */
    z - index: 1;
}

.p - hero img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100 %;
    height: 100 %;
    object - fit: cover;
    z - index: 0;
}

.p - hero__content {
    position: relative;
    z - index: 2;
    max - width: 900px;
    padding: var(--spacing - md);
}

.p - hero__title {
    font - size: clamp(2rem, 5vw, 4rem);
    margin - bottom: var(--spacing - md);
    color: var(--color - white);
}

.p - hero__text {
    font - size: clamp(1rem, 2vw, 1.5rem);
    max - width: 800px;
    margin: 0 auto;
    color: var(--color - white);
}


/* Object - Utility */
.u - text - center {
    text - align: center;
}

.u - mb - xs { margin - bottom: var(--spacing - xs); }
.u - mb - sm { margin - bottom: var(--spacing - sm); }
.u - mb - md { margin - bottom: var(--spacing - md); }
.u - mb - lg { margin - bottom: var(--spacing - lg); }
.u - mb - xl { margin - bottom: var(--spacing - xl); }
.u - mb - xxl { margin - bottom: var(--spacing - xxl); }
.u - mb - xxxl { margin - bottom: var(--spacing - xxxl); }

.u - mt - xs { margin - top: var(--spacing - xs); }
.u - mt - sm { margin - top: var(--spacing - sm); }
.u - mt - md { margin - top: var(--spacing - md); }
.u - mt - lg { margin - top: var(--spacing - lg); }
.u - mt - xl { margin - top: var(--spacing - xl); }
.u - mt - xxl { margin - top: var(--spacing - xxl); }
.u - mt - xxxl { margin - top: var(--spacing - xxxl); }