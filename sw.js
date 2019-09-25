/** An empty service worker! */
self.addEventListener('fetch', function(event) {
  console.log(event)
  document.write(event)
  /** An empty fetch handler! */
});
