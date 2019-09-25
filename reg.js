//service worker
navigator.serviceWorker && navigator.serviceWorker.register('../manifest/manifest/sw.js').then(function(registration) {
  console.log('Excellent, registered with scope: ', registration.scope);
});
