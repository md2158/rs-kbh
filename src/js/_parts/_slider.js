const swiperKbh = new Swiper('#kbhSlider', {
    slidesPerView: 1,
    pagination: {
        el: '#kbhSliderPag',
        clickable: true
    },
    navigation: {
        nextEl: '#kbhSliderNext',
        prevEl: '#kbhSliderPrev',
    },
});
let kbhSliderCurrent = swiperKbh.activeIndex;
let kbhSliderLength = swiperKbh.slides.length;
document.getElementById("kbhSliderIndex").innerHTML = parseInt(kbhSliderCurrent) + 1 +'/'+kbhSliderLength;
swiperKbh.on('transitionStart', function () {
    let kbhSliderCurrent = swiperKbh.activeIndex;
    let kbhSliderLength = swiperKbh.slides.length;
    document.getElementById("kbhSliderIndex").innerHTML = parseInt(kbhSliderCurrent) + 1 +'/'+kbhSliderLength;
});
if(window.screen.width < 991){
    document.getElementById('scrollBannerNext').addEventListener('click', function (){
        document.getElementById('kbhBanners').scrollLeft += 100;
    });
    document.getElementById('scrollBannerPrev').addEventListener('click', function (){
        document.getElementById('kbhBanners').scrollLeft -= 100;
    });
}