self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('v3').then(function (cache) {
        return cache.addAll([
          '/',
          '/css/style.css',
          '/js/script.js'
        ]);
      }),
    );
  });

  self.addEventListener('activate', event => {
    console.log('Activate v3');
  });


  self.addEventListener('fetch', function(event) {
              // console.log('fetch event', event);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });