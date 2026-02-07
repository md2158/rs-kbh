if(window.screen.width < 1199) {
    let menuItems = document.getElementsByClassName('rs-kbh-menu__item');
    for(let i = 0; i < menuItems.length; i++){
        menuItems[i].addEventListener("click", function (){
            this.classList.toggle('active');
        });
    }
    document.getElementById('closeMenu').addEventListener('click', function (){
        document.getElementById('headerMenu').classList.remove('active');
    });
    document.getElementById('openMenu').addEventListener('click', function (){
        document.getElementById('headerMenu').classList.add('active');
    });
};
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
};
// let footerHeight = document.getElementById('kbhFooter').offsetHeight;
// console.log(footerHeight);
// if(footerHeight && window.screen.height > 700) {
//     document.getElementById('kbhPag').style.bottom = footerHeight + 20 + 'px';
// }
if(window.screen.width < 991) {
    document.getElementById('openAddressInfo').addEventListener('click', function (){
        document.getElementById('addressInfo').style.display = 'flex';
    });
    document.getElementById('closeAddressInfo').addEventListener('click', function (){
        document.getElementById('addressInfo').style.display = 'none';
    });
};

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