self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('dictionary-v2').then(function(cache) {
            return cache.addAll([
                '/',
                '/nowa/index.html',
                '/nowa/styles.css',
                '/nowa/app.js',
                '/nowa/manifest.json',
                '/nowa/icons/ikonka.png',
                '/nowa/icons/ikonka2.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
