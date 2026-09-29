const CACHE_NAME="toyhaven-cache-v4";
const urlsCache=[
    "index.html",
    "products.html",
    "cart.html",
    "checkout.html",
    "wishlist.html",
    "feedback.html",
    "orderconfirmation.html"
];

self.addEventListener("install",function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll(urlsCache);
        })
    );
});

self.addEventListener("fetch",function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});