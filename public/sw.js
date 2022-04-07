self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('v4').then(function (cache) {
        return cache.addAll([
          '/',
          '/offline',
          '/notFound',
          '/css/style.css',
          '/js/script.js'
        ]);
      }),
    );
    self.skipWaiting(); 
  });

  self.addEventListener('activate', event => {
    console.log('Activate v3');
  });


  // caches first then network
  self.addEventListener('fetch', function(event) {
              // console.log('fetch event', event);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });