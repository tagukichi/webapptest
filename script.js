document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニューの開閉処理
    const hamburgerBtn = document.querySelector('.c-hamburger-btn');
    const gnav = document.querySelector('.l-header__nav.c-gnav');
    const gnavLinks = document.querySelectorAll('.c-gnav__link'); // ナビゲーションリンクも取得

    if (hamburgerBtn && gnav) {
        hamburgerBtn.addEventListener('click', () => {
            gnav.classList.toggle('is-open');
            hamburgerBtn.classList.toggle('is-open'); // ハンバーガーボタン自体にもis-openをトグル
            document.body.classList.toggle('no-scroll'); // 背景スクロール防止（CSSでno-scrollクラスの定義が必要）
        });

        // ナビゲーションリンクがクリックされたらメニューを閉じる
        gnavLinks.forEach(link => {
            link.addEventListener('click', () => {
                // アンカーリンクの場合、スムーススクロールが完了するまで少し待ってから閉じる
                // または、clickイベントで即座に閉じる動作で十分な場合もあるため、ここでは即座に閉じる
                if (gnav.classList.contains('is-open')) { // メニューが開いている場合のみ閉じる
                    gnav.classList.remove('is-open');
                    hamburgerBtn.classList.remove('is-open');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    // Unsplash画像のキャッシュ＆表示処理
    // 注意: クライアントサイドのJavaScriptにAPIキーを直接記述することは、
    // セキュリティ上のリスクを伴います。本番環境ではサーバーサイドでプロキシを立てるなど、
    // APIキーが公開されないような対策を強く推奨します。
    const unsplashKey = 'H6kwblOIUcRCz1rxpS6NCdSDLsnVm5XsShC4RlnLK6Q'; // APIキー
    const images = document.querySelectorAll('img[data-keyword]');

    images.forEach(img => {
        const keyword = img.getAttribute('data-keyword');
        // 画像のサイズを動的に取得し、UnsplashのURLに含める
        // img.naturalWidth と img.naturalHeight は、画像がロードされた後にしか取得できないため、
        // ここでは親要素や固定のサイズを使用するか、デフォルトのサイズでリクエストする。
        // 今回はHTMLに指定された src のサイズを参考に、デフォルトのサイズでリクエストする。
        const width = img.width || 800; // デフォルト幅
        const height = img.height || 600; // デフォルト高さ
        const cacheKey = `unsplash_${keyword}_${width}x${height}`; // サイズもキャッシュキーに含める

        const cachedUrl = localStorage.getItem(cacheKey);

        if (cachedUrl) {
            img.src = cachedUrl;
        } else {
            // Unsplash APIのqueryパラメータでサイズを指定
            fetch(`https://api.unsplash.com/photos/random?query=${keyword}&orientation=landscape&w=${width}&h=${height}&client_id=${unsplashKey}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(data => {
                    if (data && data.urls && data.urls.regular) {
                        img.src = data.urls.regular;
                        localStorage.setItem(cacheKey, data.urls.regular);
                    } else {
                        console.warn('No image URL found for keyword:', keyword, data);
                    }
                })
                .catch(err => console.error('Image fetch error for keyword', keyword, ':', err));
        }
    });
});