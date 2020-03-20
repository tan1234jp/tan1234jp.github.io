'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
"/assets/AssetManifest.json": "ff6a6a52433d38d59d15264bd1ca42c5",
"/assets/assets/audios/dora.mp3": "e4c7f8bc2612d4d7c585b8eb464009bb",
"/assets/assets/audios/silent.mp3": "a8815c6b82ce58f54463779e60ba8434",
"/assets/assets/fonts/DSEG14Classic-Regular.woff": "a16ffec28180c2047ada961eb2519f26",
"/assets/FontManifest.json": "b818e7a7c62cb64d2745a78fa7a084ba",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "f9bbc1e907017043f408e62fbfbb7081",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/browserconfig.xml": "68c9044fa4a08749efb85bb2a4edaede",
"/favicon-16x16.png": "d58860da10ca2847b3e92af62d52a613",
"/favicon-32x32.png": "3f827c26a576faa5c9f86e07571e8993",
"/icons/android-chrome-192x192.png": "46a6725cdbce619c5d2194bfdcac8c20",
"/icons/android-chrome-512x512.png": "feb77d84ea9587b55c0036020f02d475",
"/icons/apple-touch-icon.png": "3361e9ca37e3c0ec611b312123c287e2",
"/icons/Icon-192.png": "b7d0a8f68fa2e3837beacdf9ac75b941",
"/icons/Icon-512.png": "c83a0d22e0c1537db90862650e598c4d",
"/icons/safari-pinned-tab.svg": "57de9c58fbe16fec3c4b09d948aa588a",
"/index.html": "8e11d1aa3740bb75ae024997efa67aca",
"/main.dart.js": "2ccde90904663144facc165ac3d95770",
"/manifest.json": "5ae9a6d7de9e99f8ea07fe2697a27b12",
"/mstile-150x150.png": "fdbcf3b0fb8116e9184c38af51f34576"
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
