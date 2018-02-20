/*
 *  Mainpage banner slider init
 */
if (document.querySelector('.mainpage-slider')) {
    var mainpageSliderSlides = document.querySelectorAll('.mainpage-slider .swiper-slide');
    if (mainpageSliderSlides.length > 1) {
        var mainpageSlider = new Swiper('.mainpage-slider', {
            speed: 600,
        	loop: true,
        	autoplay: 10000,
        	pagination: '.mainpage-pagination',
        	paginationClickable: true,
        	paginationBulletRender: function(swiper, index, className) {
        		return '<div class="' + className + '"><svg class="anim-circle" viewbox="0 0 80 80" width="20px" height="20px"><circle class="anim-circle_1" cx="38" cy="38" r="36"></circle></svg></div>';
        	}
        });
    };
};



/*
 *  Partners adaptive slider init
 */
var partnersSlider = new Swiper('.partners-slider', {
    loop: true,
    pagination: '.partners-pagination',
    paginationClickable: true,
    bulletClass: 'partners-pagination__item',
    bulletActiveClass: 'partners-pagination__item--active',
    spaceBetween: 30
});



/*
 *  Prizes slider init
 */
var awardsSlider = new Swiper('.about-awards', {
    loop: true,
    nextButton: '.arrow-right',
    prevButton: '.arrow-left',
    pagination: '.awards-pagination',
    paginationClickable: true,
    bulletClass: 'awards-pagination__item',
    bulletActiveClass: 'awards-pagination__item--active',
    paginationBulletRender: function (swiper, index, className) {
        var slides = document.querySelector('.about-awards').querySelectorAll('.swiper-slide');
        var tabs = [];
        for (var i = 0; i < slides.length; i++) {
            if (!slides[i].classList.contains('swiper-slide-duplicate')) {
                var tabsName = tabs.push(slides[i].getAttribute('data-year'));
            };
        };
        return '<span class="' + className + '">' + tabs[index] + '</span>';
    }
});

/*
 *  News slider init
 */
function newsSliderInit() {
    if (document.querySelector('.news-slider')) {
        if (document.querySelectorAll('.news-slider .swiper-slide').length > 3 && window.innerWidth > 920) {
            var newsSlider = new Swiper('.news-slider', {
                autoHeight: true,
                prevButton: '.news-slider__nav-arrow--left',
                nextButton: '.news-slider__nav-arrow--right',
                pagination: '.news-pagination',
                paginationClickable: true,
                bulletClass: 'news-pagination__item',
                bulletActiveClass: 'news-pagination__item--active',
                slidesPerView: 3,
                spaceBetween: 30
            });
        } else if (document.querySelectorAll('.news-slider .swiper-slide').length > 2 && window.innerWidth > 640) {
            var newsSlider = new Swiper('.news-slider', {
                autoHeight: true,
                prevButton: '.news-slider__nav-arrow--left',
                nextButton: '.news-slider__nav-arrow--right',
                pagination: '.news-pagination',
                paginationClickable: true,
                bulletClass: 'news-pagination__item',
                bulletActiveClass: 'news-pagination__item--active',
                slidesPerView: 2,
                spaceBetween: 30
            });
        } else if (document.querySelectorAll('.news-slider .swiper-slide').length > 1 && window.innerWidth < 640) {
            var newsSlider = new Swiper('.news-slider', {
                autoHeight: true,
                prevButton: '.news-slider__nav-arrow--left',
                nextButton: '.news-slider__nav-arrow--right',
                pagination: '.news-pagination',
                paginationClickable: true,
                bulletClass: 'news-pagination__item',
                bulletActiveClass: 'news-pagination__item--active',
                spaceBetween: 30
            });
        } else {
            var slides = document.querySelectorAll('.news-slider .swiper-slide');
            for (var i = 0; i < slides.length; i++) {
                // slides[i].removeAttribute('style');
                // slides[i].style.width = 'calc(50% - 40px)';
            };
            document.querySelector('.news-slider').classList.add('no-slider');
            document.querySelector('.news-slider__nav').classList.add('no-slider');
        }
    }
};
window.addEventListener('load', newsSliderInit);
window.addEventListener('resize', newsSliderInit);



/*
 *  Sertificates slider init
 */
var sertificatesSlider = new Swiper('.sertificates-slider', {
    prevButton: '.sertificates-slider__nav-arrow--left',
    nextButton: '.sertificates-slider__nav-arrow--right',
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 0
        }
    }
});
