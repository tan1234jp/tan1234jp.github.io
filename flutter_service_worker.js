'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
"/assets\AssetManifest.json": "5305d74f8e877f49d21ab03a6df1a082",
"/assets\assets\audios\dora.mp3": "533b12c501203f7dce6e94b6de2dcb94",
"/assets\assets\fonts\DSEG14Classic-Regular.ttf": "616d1edcba1e4cb05f715bcf3dadfd5f",
"/assets\FontManifest.json": "41083d4ecfe3f9ad7304575c1c28e106",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "a1db0dade32d4fadd0069c071a097882",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "cf897d2a7f4012c9924bde4349354992",
"/main.dart.js": "06a7fbe8156adad257d56cb8627d3886",
"/manifest.json": "cddb195e4fe24096d28881c2c0caa0d4"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
