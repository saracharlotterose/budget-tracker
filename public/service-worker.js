

const cache = "static-cache-v1"
const precachefiles = [
    "/",
    "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    "/icons/icon-192x192.png",
    "/styles.css",
    "/manifest.webmanifest",
    "/index.js",
    "/index.html",
    "/db.js"


]

self.addEventListener("install", function (evt) {
    // pre cache image data



   
      
    // pre cache all static assets
    evt.waitUntil(
      caches.open(cache).then((cache) => cache.addAll(precachefiles))
    );

    // tell the browser to activate this service worker immediately once it
    // has finished installing
    self.skipWaiting();
});

self.addEventListener("activate", ()=> {
    self.clients.claim();
})
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response)=>{
            return response || fetch(event.request);
        })
    )
})