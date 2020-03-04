'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
"/assets/AssetManifest.json": "ff6a6a52433d38d59d15264bd1ca42c5",
"/assets/assets/audios/dora.mp3": "533b12c501203f7dce6e94b6de2dcb94",
"/assets/assets/audios/silent.mp3": "a8815c6b82ce58f54463779e60ba8434",
"/assets/assets/fonts/DSEG14Classic-Regular.woff": "a16ffec28180c2047ada961eb2519f26",
"/assets/FontManifest.json": "b818e7a7c62cb64d2745a78fa7a084ba",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "b49e335b65c7e97a0ff81ebd28031623",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons/Icon-192.png": "b7d0a8f68fa2e3837beacdf9ac75b941",
"/icons/Icon-512.png": "c83a0d22e0c1537db90862650e598c4d",
"/index.html": "cf897d2a7f4012c9924bde4349354992",
"/main.dart.js": "33d252797dc32171f63a84f7e3afb93c",
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
