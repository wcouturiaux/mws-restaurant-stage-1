let staticCacheName = 'rest-static-rev1';

self.addEventListener('install', function(evt) {
  evt.waitUntil(
    caches.open(staticCacheName).then(
      function (cache) {
        return cache.addAll([
          './',
          './index.html',
  				'./restaurant.html',
  				'./css/styles.css',
  				'./data/restaurants.json',
  				'./js/dbhelper.js',
  				'./js/main.js',
  				'./js/restaurant_info.js',
  				'./js/regSW.js',
  				'./img/1.jpg',
  				'./img/2.jpg',
  				'./img/3.jpg',
  				'./img/4.jpg',
  				'./img/5.jpg',
  				'./img/6.jpg',
  				'./img/7.jpg',
  				'./img/8.jpg',
  				'./img/9.jpg',
  				'./img/10.jpg'
      ]);
    })
  );
});

self.addEventListener('activate', function(evt) {
  evt.waitUntil(
    cache.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName){
          if (cachName !== staticCacheName) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function (evt) {
  evt.respondWith(
    caches.match(evt.request).then(function(response) {
      if (response) return response;
      return fetch(evt.request);
    })
  );
});
