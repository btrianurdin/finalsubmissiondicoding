import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
  console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
