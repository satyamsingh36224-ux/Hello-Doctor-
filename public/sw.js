// This is a basic service worker file.
// You can expand it to add more caching strategies.

self.addEventListener('install', (event) => {
  console.log('Service worker installed');
});

self.addEventListener('fetch', (event) => {
  // For now, just fetch from the network.
  event.respondWith(fetch(event.request));
});
