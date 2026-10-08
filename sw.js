const CACHE_NAME = "catalogo-esencias-v1";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json"
];


self.addEventListener(
    "install",
    evento => {

        evento.waitUntil(

            caches.open(CACHE_NAME)
                .then(cache => {

                    return cache.addAll(
                        ARCHIVOS
                    );

                })

        );

    }
);


self.addEventListener(
    "fetch",
    evento => {

        evento.respondWith(

            caches.match(
                evento.request
            )
            .then(respuesta => {

                return respuesta ||
                    fetch(
                        evento.request
                    );

            })

        );

    }
);
