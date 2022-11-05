//SERVICE WORKER

//IDENTIFICAR SI EL NAVEGADOR SOPORTA SERVICE WORKER
if ('serviceWorker' in navigator) {
    //registrar nuestro service worker
    navigator.serviceWorker.register('./sw.js')
        //esto nos retorna un promise
        .then( registrado => console.log("se instalo correctamente...", registrado) )
        //en caso de un error
        .catch( error => console.log("fallo la instalacion...", error) )

}else {
    console.log('Service Worker no soportados');
}