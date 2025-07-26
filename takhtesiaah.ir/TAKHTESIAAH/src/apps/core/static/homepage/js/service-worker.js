const CACHE_NAME = "tks-cache-v1.0.12";
const urlsToCache = [
    "/",
    "/static/homepage/css/styles.css",
    "/static/homepage/js/scripts.js",
    "/static/homepage/images/android-chrome-192x192.png",
    "/static/homepage/images/android-chrome-512x512.png",
    "/static/homepage/images/favicon-16x16.png",
    "/static/homepage/images/favicon-32x32.png",
    "/static/homepage/images/apple-touch-icon.png",

];
self.addEventListener("install", (event) => {
    self.skipWaiting(); // ✅ فعال‌سازی سریع
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
            .catch(() => {
                // Optional: return fallback page/image/audio
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
        }).then(() => self.clients.claim()) // ✅ کنترل همه تب‌ها
    );
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/static/homepage/js/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  }

