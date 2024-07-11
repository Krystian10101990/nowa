self.addEventListener('install', (event) => {
  console.log('Service worker zainstalowany');
  event.waitUntil(
    caches.open('static').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './styles.css',
        './app.js',
        './icons/icon-192x192.png',
        './icons/icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
