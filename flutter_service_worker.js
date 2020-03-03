'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
"/assets/AssetManifest.json": "ff6a6a52433d38d59d15264bd1ca42c5",
"/assets/assets/audios/dora.mp3": "533b12c501203f7dce6e94b6de2dcb94",
"/assets/assets/audios/silent.mp3": "a8815c6b82ce58f54463779e60ba8434",
"/assets/assets/fonts/DSEG14Classic-Regular.woff": "a16ffec28180c2047ada961eb2519f26",
"/assets/FontManifest.json": "b818e7a7c62cb64d2745a78fa7a084ba",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "926050cff025a998ee71454a31ab6d74",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "cf897d2a7f4012c9924bde4349354992",
"/main.dart.js": "1a13ef6dc6e454646354124991c73bd3",
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
