self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('v2').then(function (cache) {
        return cache.addAll([
          '/public',
          '/css/style.css'
        ]);
      }),
    );
  });