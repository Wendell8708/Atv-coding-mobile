const CACHE_NAME = "yourdbz-v1";

// Lista de arquivos para funcionar Offline
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  // Adicionei os caminhos dos seus ícones principais para garantir o visual offline
  "/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/180.png",
  "/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/1024.png"
];

// Instalação e Cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache aberto: Salvando recursos do Scouter...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativação: Limpa caches antigos se você mudar o CACHE_NAME para "v2"
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Limpando cache antigo...");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Estratégia de busca: Tenta o Cache primeiro, se não tiver, vai na rede
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});