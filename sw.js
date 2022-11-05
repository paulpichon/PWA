//En lugar de WINDOW se usa SELF

//varaible para cache
const nombreCache = 'apv-v1';

//variable que servira para cachear archivos
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];


//cuando se instala el service worker
//se actiav una sola vez al momento de registrar el service worker
self.addEventListener('install', e => {
    console.log('instalado el service worker');

    //cachear los archivos
    //waitUntil va a esperar hasta que se descargen todos los archivos 
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log("cacheando");
                //addAll() es para agregar un arreglo de archivos, si fuera solo 1 seria, add()
                cache.addAll(archivos);
            })
    );

});

//activar el service worker
self.addEventListener('activate', e => {
    console.log("service worker activado");

    console.log( e );
});

//evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('fetch', e);

    //archivos estaticos
    e.respondWith(
        caches.match(e.request)
        //en caso de buscar una pagina que necesite internet lo que hara es mostrar error.html
            .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('error.html')))
        
    )

});