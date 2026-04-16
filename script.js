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

    // Unsplash画像のキャッシュ＆表示処理
    // 注意: APIキーは本来バックエンドで管理するか、環境変数を使用することが推奨されます。
    // クライアントサイドでの直接的な公開はセキュリティリスクを伴います。
    const unsplashKey = 'H6kwblOIUcRCz1rxpS6NCdSDLsnVm5XsShC4RlnLK6Q'; // APIキー
    const images = document.querySelectorAll('img[data-keyword]');

    images.forEach(img => {
        const keyword = img.getAttribute('data-keyword');
        const cacheKey = 'unsplash_' + keyword;
        const cachedUrl = localStorage.getItem(cacheKey);

        if (cachedUrl) {
            img.src = cachedUrl;
        } else {
            // キーワードをURLエンコードしてAPIリクエストに含める
            const encodedKeyword = encodeURIComponent(keyword);
            fetch(`https://api.unsplash.com/photos/random?query=${encodedKeyword}&orientation=landscape&client_id=${unsplashKey}`)
                .then(res => {
                    if (!res.ok) {
                        // エラーレスポンスの場合も処理
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(data => {
                    if (data && data.urls && data.urls.regular) {
                        img.src = data.urls.regular;
                        localStorage.setItem(cacheKey, data.urls.regular);
                    } else {
                        console.warn('No image found for keyword:', keyword, data);
                    }
                })
                .catch(err => console.error('Image fetch error for keyword ' + keyword + ':', err));
        }
    });
});