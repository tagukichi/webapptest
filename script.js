document.addEventListener('DOMContentLoaded', () => {
    // 共通のハンバーガーメニュー初期化関数
    function initHamburger(btnSelector, navSelector) {
        const btn = document.querySelector(btnSelector);
        const nav = document.querySelector(navSelector);
        const body = document.body;

        if (btn && nav) {
            btn.addEventListener('click', () => {
                nav.classList.toggle('is-open');
                btn.classList.toggle('is-open');
                body.classList.toggle('is-open');
            });

            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    nav.classList.remove('is-open');
                    btn.classList.remove('is-open');
                    body.classList.remove('is-open');
                });
            });
        }
    }

    // index.html用の古いクラス名
    initHamburger('.js-hamburger-trigger', '.l-global-nav');
    
    // about-us.html用の新しいFLOCSSクラス名
    initHamburger('.c-hamburger', '.l-header__nav');
});