'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
"/assets/AssetManifest.json": "ff6a6a52433d38d59d15264bd1ca42c5",
"/assets/assets/audios/dora.mp3": "e4c7f8bc2612d4d7c585b8eb464009bb",
"/assets/assets/audios/silent.mp3": "a8815c6b82ce58f54463779e60ba8434",
"/assets/assets/fonts/DSEG14Classic-Regular.woff": "a16ffec28180c2047ada961eb2519f26",
"/assets/FontManifest.json": "b818e7a7c62cb64d2745a78fa7a084ba",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "d13717e1fa0d9a9cc9957218d771cf65",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.ico": "9c8ef56c5cc80f9b4651152efc50a1b6",
"/icons/Icon-192.png": "b7d0a8f68fa2e3837beacdf9ac75b941",
"/icons/Icon-512.png": "c83a0d22e0c1537db90862650e598c4d",
"/index.html": "d0d4f5158c349df73d4e514d905aee8a",
"/main.dart.js": "44efe44267ad00ba46a26886c19a1f3d",
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
