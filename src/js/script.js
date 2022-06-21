@@include('_parts/_header.js');
@@include('_parts/_slider.js');
@@include('_parts/_footer.js');

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});
// On orientation changed reload page
window.addEventListener('orientationchange', function() { location.reload(); }, false);
// On screen resize reload page
var windowWidthForResize = window.screen.width;
var windowHeightForResize = window.screen.height;
console.log(windowWidthForResize+'--'+windowHeightForResize);
window.addEventListener('resize', function (){
    var newWindowWidth = window.screen.width;
    if( Math.abs(windowWidthForResize - newWindowWidth) > 10 ){
        location.reload();
    }
});