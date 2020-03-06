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
"/browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"/favicon-16x16.png": "d58860da10ca2847b3e92af62d52a613",
"/favicon-32x32.png": "3f827c26a576faa5c9f86e07571e8993",
"/icons/android-chrome-192x192.png": "46a6725cdbce619c5d2194bfdcac8c20",
"/icons/android-chrome-512x512.png": "feb77d84ea9587b55c0036020f02d475",
"/icons/apple-touch-icon.png": "3361e9ca37e3c0ec611b312123c287e2",
"/icons/safari-pinned-tab.svg": "5066ed007a8096b626ad9a718d5485ba",
"/index.html": "8e11d1aa3740bb75ae024997efa67aca",
"/main.dart.js": "44efe44267ad00ba46a26886c19a1f3d",
"/manifest.json": "4bd0e51b623aae9adcd5c081b4abbc65",
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
