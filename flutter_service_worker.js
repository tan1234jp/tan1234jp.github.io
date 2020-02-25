'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git\config": "aaaca0ec6e96fceca3e7aa36a0f702ef",
"/.git\description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git\HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git\hooks\applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git\hooks\commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git\hooks\fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git\hooks\post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git\hooks\pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git\hooks\pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git\hooks\pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git\hooks\pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git\hooks\pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git\hooks\prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git\hooks\update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git\info\exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/assets\AssetManifest.json": "5305d74f8e877f49d21ab03a6df1a082",
"/assets\assets\audios\dora.mp3": "533b12c501203f7dce6e94b6de2dcb94",
"/assets\assets\fonts\DSEG14Classic-Regular.ttf": "616d1edcba1e4cb05f715bcf3dadfd5f",
"/assets\FontManifest.json": "41083d4ecfe3f9ad7304575c1c28e106",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "94d3d50e042f8b03a690811241a24408",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "cf897d2a7f4012c9924bde4349354992",
"/main.dart.js": "a5d66b6cd6e888358217e2768866b5a9",
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
