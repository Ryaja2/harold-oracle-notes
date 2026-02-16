const CACHE_NAME = &#39;oracle-v1&#39;;
const urlsToCache = [
  &#39;/&#39;,
  &#39;/index.html&#39;,
  &#39;/manifest.json&#39;
];

self.addEventListener(&#39;install&#39;, event =&gt; {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache =&gt; cache.addAll(urlsToCache))
  );
});

self.addEventListener(&#39;fetch&#39;, event =&gt; {
  event.respondWith(
    caches.match(event.request)
      .then(response =&gt; {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});