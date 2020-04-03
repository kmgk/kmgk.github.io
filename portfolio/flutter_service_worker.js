'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "b2fa3441a49c45f64aa946a9b4afc86e",
"/assets/assets/benzenkun.jpeg": "1a4fe63e80f0b17f06980718ee6a4823",
"/assets/assets/illustration/sushi1.png": "5cbe6ed0756c1c6b503d3e49620510e1",
"/assets/assets/maguro.png": "23ddcc0400d68522c19e8efbe5bee47b",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "23ddcc0400d68522c19e8efbe5bee47b",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "2def70cdfb9efbc99017bc85e0c5e804",
"/main.dart.js": "a20b0033607cbf277ae7c7f1e45e5227",
"/manifest.json": "14e919b7b1dde549ab334b7ee3ce8412"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
