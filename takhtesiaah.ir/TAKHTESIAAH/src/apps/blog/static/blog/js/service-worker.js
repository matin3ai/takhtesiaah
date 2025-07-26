const CACHE_NAME = "tks-cache-v1.0.12";
const urlsToCache = [
    "/",
    "/static/blog/css/styles.css",
    "/static/blog/js/scripts.js",
    "/static/blog/images/android-chrome-192x192.png",
    "/static/blog/images/android-chrome-512x512.png",
    "/static/blog/images/favicon-16x16.png",
    "/static/blog/images/favicon-32x32.png",
    "/static/blog/images/apple-touch-icon.png",

];
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/static/blog/js/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  }