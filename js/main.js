function orientationHandler(ev) {
    requestAnimationFrame(showAlpha(ev.alpha))
}

function showAlpha(a) {
    $('#rose').attr('style', 'transform: rotate(' + a + 'deg)');
}

window.addEventListener('deviceorientation', orientationHandler, false)

/*
 * Register service worker
 * (Does nothing at present. Is needed to display Chrome install web app banner.)
 */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('../dist/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
