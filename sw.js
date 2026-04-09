const CACHE_NAME = 'my-local-app-v1';
// List every file you want to work offline (index.html, styles.css, icons, etc.)
const ASSETS_TO_CACHE = [
    './',
'./index.html',
'./apps.html',
'./contact.html',
'./apps-ergatika.html',
'./apps-forologika.html',
'./manifest.json',
'./styles.css',
'./js/dropdown.js',
'./img/svg/apps-active.svg',
'./img/svg/apps-inactive.svg',
'./img/svg/blog-active.svg',
'./img/svg/blog-inactive.svg',
'./img/svg/call-active.svg',
'./img/svg/call-inactive.svg',
'./img/svg/home-active.svg',
'./img/svg/home-inactive.svg',
'./img/svg/online-active.svg',
'./img/svg/online-inactive.svg',
'./img/tax.webp',
'./img/welcome-medium.webp',
'./img/welcome-normal.webp',
'./img/welcome-small.webp',
'./192.png',
'./512.png'
];

// 1. Install Event: Save files to the browser cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching assets...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. Fetch Event: Serve files from cache if offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return the cached file, or try to get it from the network
            return response || fetch(event.request);
        })
    );
});
