const swiperKbh = new Swiper('#kbhSlider', {
    slidesPerView: 1,
    effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    pagination: {
        el: '#kbhSliderPag',
        clickable: true
    },
    navigation: {
        nextEl: '#kbhSliderNext',
        prevEl: '#kbhSliderPrev',
    },
});
// Arrows
var kbhSliderCurrent = swiperKbh.activeIndex;
var kbhSliderLength = swiperKbh.slides.length;
document.getElementById("kbhSliderIndex").innerHTML = parseInt(kbhSliderCurrent) + 1 +'/'+kbhSliderLength;
swiperKbh.on('transitionStart', function () {
    var kbhSliderCurrent = swiperKbh.activeIndex;
    var kbhSliderLength = swiperKbh.slides.length;
    document.getElementById("kbhSliderIndex").innerHTML = parseInt(kbhSliderCurrent) + 1 +'/'+kbhSliderLength;
});
// Banners buttons
var kbhBannersWrapper = document.getElementById('kbhBannersWrapper');
// var kbhBannerNext = document.getElementById('scrollBannerNext');
// var kbhBannerPrev = document.getElementById('scrollBannerPrev');
// var maxScrollLeft = kbhBannersWrapper.scrollWidth - kbhBannersWrapper.clientWidth;
// function checkScrollLeft(){
//     console.log(kbhBannersWrapper.scrollLeft);
//     if (kbhBannersWrapper.scrollLeft = maxScrollLeft) {
//         kbhBannerNext.classList.add('hide');
//         kbhBannerPrev.classList.remove('hide');
//     }
//     if (kbhBannersWrapper.scrollLeft = 0) {
//         kbhBannerNext.classList.remove('hide');
//         kbhBannerPrev.classList.add('hide');
//     }
// }
// if(window.innerWidth < 991){
//     kbhBannerNext.addEventListener('click', function (){
//         kbhBannersWrapper.scrollLeft += 5;
//         checkScrollLeft();
//     });
//     kbhBannerPrev.addEventListener('click', function (){
//         kbhBannersWrapper.scrollLeft -= 5;
//         checkScrollLeft();
//     });
// }
// Banners computed margin
var containerWidth = document.querySelector('.rs-kbh-slider__inner-container').clientWidth;
// var captionHeight = document.querySelector('.rs-kbh-slider__slide-caption').clientHeight
var kbhBanners = document.getElementById('kbhBanners');
if(window.innerWidth > 1300) {
    kbhBanners.style.marginRight = (window.innerWidth - containerWidth)/2 + 'px';
}
// if(window.innerWidth > 991) {
//     kbhBanners.style.maxWidth = containerWidth / 4 + 'px';
// }
// if(window.innerWidth < 991) {
//     kbhBanners.style.top = 'calc(50% + '+ (captionHeight - (kbhBanners.offsetHeight/2)) + 'px)';
// }
// console.log(kbhBanners.offsetHeight);

var sliderCaption = document.querySelector('.rs-kbh-slider__slide-caption');
var sliderCaptionAll = document.getElementsByClassName('rs-kbh-slider__slide-caption');
// var sliderCaption = document.getElementById('sliderCaption');
if(sliderCaption && window.innerWidth < 768) {
    for( var y = 0; y < sliderCaptionAll.length; y++) {
        // sliderCaptionAll[y].style.bottom = 80 + kbhBannersWrapper.offsetHeight + 'px';
    }
}
if(sliderCaption && window.screen.height < 700 && window.innerWidth < 991) {
    for( var yy = 0; yy < sliderCaptionAll.length; yy++) {
        // sliderCaptionAll[yy].style.bottom = 180 + kbhBannersWrapper.offsetHeight + 'px';
    }
}
// var kbhInner = document.querySelector('.rs-kbh-slider__inner-container');
// var kbhInner = document.getElementById('kbhInner');
var kbhHeader = document.getElementById('khbHeader');
// console.log(kbhHeader);
var kbhInnerAll = document.getElementsByClassName('rs-kbh-slider__inner-container');
if(window.innerWidth < 992) {
    for( var x = 0; x < kbhInnerAll.length; x++) {
        kbhInnerAll[x].style.height = 'calc(100% - ' + kbhHeader.offsetHeight + 'px)';
        kbhInnerAll[x].style.marginTop = kbhHeader.offsetHeight + 20 + 'px';
    }
}