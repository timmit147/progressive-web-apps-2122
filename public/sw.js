// Cache files in storage
self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('v4').then(function (caches) {
        return caches.addAll([
          '/',
          '/offline',
          '/notfound',
          '/css/style.css',
          '/js/script.js'
        ]);
      }),
    );
    self.skipWaiting(); 
  });

  // caches first then network
  self.addEventListener('fetch', function(event) {
    console.log('fetch event', event);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
      .catch(e => {
        return caches.match('/offline')
      })
    );
  });