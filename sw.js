self.addEventListener('fetch', (event) => {
    // This tells Chrome the worker is actually 'handling' the request
    event.respondWith(fetch(event.request));
});
