//= vendors/pace.min.js

var sessionCheck = sessionStorage.getItem('session');
if (!sessionCheck) {
    sessionStorage.setItem('session', true);
    var preloaderElement = document.createElement('div');
    preloaderElement.className = 'preloader-wrapper';
    document.querySelector('body').insertBefore(preloaderElement, document.querySelector('body').firstChild);
    paceOptions = {
        ghostTime: 2000,
        target: '.preloader-wrapper'
    };
    Pace.on('done', function() {
        document.querySelector('.pace-progress').classList.add('done');
        setTimeout(function() {
            document.querySelector('.preloader-wrapper').classList.add('closed');
            document.querySelector('body').classList.remove('no-scroll');
        }, 2000);
    });
} else {
    document.querySelector('body').classList.remove('no-scroll');
};



//= vendors/swiper.min.js
//= vendors/modernizr-custom.js
//= vendors/halkaBox.min.js
//= vendors/masonry.min.js
//= vendors/ScrollMagic.min.js


'use strict';

//= controllers/sliders.js
//= controllers/animations.js
//= controllers/history-animations.js



/*
 * Object-fit support
 */
if ('objectFit' in document.documentElement.style === false) {
    var container = document.getElementsByClassName('image-wrapper');
    for(var i = 0; i < container.length; i++) {
        var imageSource = container[i].querySelector('img').src;
        container[i].querySelector('img').style.display = 'none';
        container[i].style.backgroundSize = 'cover';
        container[i].style.backgroundImage = 'url(' + imageSource + ')';
        container[i].style.backgroundPosition = 'center center';
    }
}



/*
 * Mainpage banner video source add
 */
if(document.querySelector('.video-wrapper__video')) {
	(function() {
		var videoElement = document.querySelectorAll('.video-wrapper__video');
		// var videoElementPoster = videoElement.getAttribute('data-poster-src');
		function videoInit() {
			if (window.innerWidth > 992 || document.body.clientWidth > 992) {
				for (var i = 0; i < videoElement.length; i++) {
                    videoElement[i].innerHTML = '<source src="' + videoElement[i].getAttribute('data-src') + '" type="video/mp4">';
    				videoElement[i].removeAttribute('poster');
    				videoElement[i].setAttribute('autoplay', 'autoplay');
    				videoElement[i].setAttribute('loop', 'loop');
    				videoElement[i].classList.add('desktop');
                }
			} else {
                for (var i = 0; i < videoElement.length; i++) {
    				if(videoElement[i].classList.contains('desktop')) {
    					videoElement[i].removeChild(videoElement[i].firstChild);
    					videoElement[i].setAttribute('poster', videoElement[i].getAttribute('data-poster-src'));
    					videoElement[i].removeAttribute('autoplay');
    					videoElement[i].removeAttribute('loop');
    					videoElement[i].classList.remove('desktop');
    				}
                }
			}
		}

		window.addEventListener('load', videoInit);
		window.addEventListener('resize', videoInit);
	})();
};



/*
 *  Search form open desktop
 */
if (document.querySelector('.search-icon')) {
 	document.querySelector('.search-icon.desktop').onclick = function() {
 		document.querySelector('.search-form--desktop').classList.toggle('search-form--opened');
		document.querySelector('.nav').classList.toggle('nav--hidden');
		this.classList.toggle('search-icon--opened');
        document.querySelector('.search-form__input').focus();
 	}
}



/*
 *  Hidden navigation open(desktop)
 */
if (document.querySelector('.nav-icon-wrapper--desktop')) {
	document.querySelector('.nav-icon-wrapper--desktop').onclick = function() {
		document.querySelector('.navigation-hidden').classList.add('opened');
		document.body.classList.add('no-scroll');
	}
}



/*
 * Hidden navigation close(desktop)
 */
if (document.querySelector('.navigation-hidden__close')) {
    document.querySelector('.navigation-hidden__close').onclick = function() {
        document.querySelector('.navigation-hidden').classList.remove('opened');
        document.body.classList.remove('no-scroll');
    }
}



/*
 * Adaptive navigation open
 */
if (document.querySelector('.nav-icon-wrapper--adaptive')) {
    document.querySelector('.nav-icon-wrapper--adaptive').onclick = function() {
        document.querySelector('.navigation-adaptive').classList.add('opened');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }
}



/*
 * Adaptive navigation close
 */
if (document.querySelector('.navigation-adaptive__close')) {
    document.querySelector('.navigation-adaptive__close').onclick = function() {
        document.querySelector('.navigation-adaptive').classList.remove('opened');
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }
}



/*
 * Video play
 */
if (document.querySelector('.play-icon')) {
    document.querySelector('.play-icon').onclick = function() {
        this.style.display = 'none';
        document.querySelector('.video-wrapper').classList.add('play');
        this.nextElementSibling.innerHTML = '<source src="' + this.nextElementSibling.getAttribute('data-src') + '" type="video/mp4">';
        this.nextElementSibling.play();
        this.nextElementSibling.setAttribute('controls', 'true');
    };
};



/*
 * Sticky header behaviour
 */
(function(document, window, index) {
    var element = document.querySelector('.header');

    if (!element) return true;

    var criticalPoint = 550,
        dTop = 0,
        lastScrollPosition = 0,
        elHeight = 0;

    window.addEventListener('scroll', function() {
        dTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        elHeight = element.offsetHeight;

        if (lastScrollPosition < dTop && dTop > 300) {
            element.style.transform = 'translate3d(0, -100%, 0)';
        }

        if (lastScrollPosition > dTop && dTop > criticalPoint) {
            element.classList.add('header--fixed');
            element.style.transform = 'translate3d(0, 0, 0)';
        } else if (lastScrollPosition > dTop && dTop < criticalPoint) {
        	element.style.transform = 'translate3d(0, -100%, 0)';
            setTimeout(function() {
                element.classList.remove('header--fixed');
            }, 100);
        } else if (lastScrollPosition < dTop && dTop > 300) {
            element.style.transform = 'translate3d(0, -100%, 0)';
            setTimeout(function() {
                element.classList.remove('header--fixed');
            }, 100);
        }

        if (lastScrollPosition > dTop && dTop < 300) {
            element.style.transform = 'translate3d(0, 0, 0)';
        }

        lastScrollPosition = dTop;
    });
}(document, window, 0));



/*
 * HalkaBox plugin init
 */
halkaBox.run('single');
halkaBox.run('sertificates');
halkaBox.run('excursions');



/*
 * Employee card toggle
 */
(function() {
    function employeesAccordion() {
        if (!document.querySelectorAll || !document.body.classList) {
            var cardsSupport = document.getElementsByClassName('.employee-card');
            for (var i = 0; i < cardsSupport.length; i++) {
                cardsSupport[i].style.maxHeight = '100%';
            }
        };

        var cards = document.querySelectorAll('.employee-card');
        for (var i = 0; i < cards.length; i++) {

            // Выбираем блок, который должен скрываться
            var hiddenBlock = cards[i].querySelector('.employee-card__hidden');

            // Узнаем его высоту
            var hiddenBlockHeight = hiddenBlock.offsetHeight;

            // Делаем его высоту = 0
            hiddenBlock.style.maxHeight = '0px';

            // Устанавливаем высоту карточки равной полной высоте карточки, без скрытого блока
            cards[i].style.maxHeight = cards[i].offsetHeight + 'px';

            cards[i].onclick = function() {
                if (this.classList.contains('opened')) {
                    // Высчитываем, какой должна быть высота карточки после скрытия блока
                    var cardHeight = this.offsetHeight - hiddenBlockHeight;

                    // Выставляем ей такую высоту
                    this.style.maxHeight =  cardHeight + 'px';
                    this.style.transition = 'max-height 0.3s';

                    this.querySelector('.employee-card__hidden').style.maxHeight = '0px';
                    this.classList.remove('opened');
                } else {
                    // Высчитываем, какой должна быть высота карточки после скрытия блока
                    var cardHeight = this.offsetHeight + hiddenBlockHeight;

                    // Выставляем ей такую высоту
                    this.style.maxHeight =  cardHeight + 'px';
                    this.style.transition = 'max-height 0.3s';

                    this.querySelector('.employee-card__hidden').style.maxHeight = hiddenBlockHeight + 'px';
                    this.classList.add('opened');
                }
            }
        }
    };

    window.addEventListener('load', employeesAccordion);
})();



/*
 * Tenders toggle photo block
 */
(function() {
    function tendersPhotoToggle() {
        var photoLinks = document.querySelectorAll('.tender-item__photo-link');
        for (var i = 0; i < photoLinks.length; i++) {
            photoLinks[i].onclick = function() {
                var photoBlock = this.nextElementSibling;
                photoBlock.style.transition = 'height 0.3s';
                console.log(photoBlock.offsetHeight + 'px');
                if (photoBlock.classList.contains('opened')) {
                    photoBlock.style.height = '0';
                    photoBlock.classList.remove('opened');
                } else {
                    photoBlock.style.height = '100%';
                    photoBlock.classList.add('opened');
                }
                this.classList.toggle('opened');
            }
        }
    }

    window.addEventListener('load', tendersPhotoToggle);
})();



/*
 * News page masonry grid
 */
(function() {
    function masonryNews() {
        if (document.querySelectorAll('.news-section__news')) {
            if (window.innerWidth > 768) {
                var masonryBlocks = document.querySelectorAll('.news-section__news');
                for (var i = 0; i < masonryBlocks.length; i++) {
                    var msnry = new Masonry(masonryBlocks[i], {
                        itemSelector: '.news-preview__wrapper',
                        percentPosition: true,
                        gutter: 30,
                        horizontalOrder: true
                    });
                }
            }
        }
    }

    window.addEventListener('load', masonryNews);
    window.addEventListener('resize', masonryNews);
})();



/*
 * Map contact block tabs
 */
(function() {
    function mapTabs() {
        var tabLinksContainer = document.querySelector('.contacts__links'),
            tabLinks = document.querySelectorAll('.contacts__links .links__link'),
            tabBlocks = document.querySelectorAll('.contacts__contact-items .contact-items__info-block');
        for (var i = 0; i < tabLinks.length; i++) {
            tabLinksIndex = tabLinks[i].getAttribute('data-tab-target');
            tabLinks[i].onclick = function(e) {
                e.preventDefault();
                if (window.innerWidth < 768) {
                    tabLinksContainer.classList.toggle('active');
                }
                for (var i = 0; i < tabBlocks.length; i++) {
                    tabBlocksIndex = tabBlocks[i].getAttribute('data-tab-index');
                    if (tabBlocks[i].getAttribute('data-tab-index') == this.getAttribute('data-tab-target')) {
                        var commonIndex = tabBlocks[i].getAttribute('data-tab-index');
                    }
                    if (tabBlocks[i].getAttribute('data-tab-index') == commonIndex && !tabBlocks[i].classList.contains('active')) {
                        // if (tabBlocks[i].classList.contains('active')) {
                        //     tabBlocks[i].classList.remove('active')
                        // }
                        tabBlocks[i].classList.add('active');
                    } else if (tabBlocks[i].getAttribute('data-tab-index') != commonIndex && tabBlocks[i].classList.contains('active')) {
                        tabBlocks[i].classList.remove('active');
                    }
                }
                if (!this.classList.contains('active')) {
                    for (var i = 0; i < tabLinks.length; i++) {
                        if (tabLinks[i].classList.contains('active')) {
                            tabLinks[i].classList.remove('active');
                        }
                    }
                    this.classList.add('active');
                    if (window.innerWidth < 768) {
                        for (var i = 0; i < tabLinks.length; i++) {
                            if (!tabLinks[i].classList.contains('active')) {
                                tabLinksContainer.insertBefore(tabLinks[i], tabLinksContainer.children[4]);
                            }
                        }
                    }
                }
            }
        }
    }

    window.addEventListener('load', mapTabs);
    window.addEventListener('resize', mapTabs);
})();



//= vendors/social-share.js



// Social likes init
if (document.querySelector('.social-share')) {
    var shareBlock = document.querySelector('.social-share');
    var links = document.querySelectorAll('.social-share__link');
    var data = {
        url: shareBlock.getAttribute('data-url'),
        title: shareBlock.getAttribute('data-title'),
        descr: shareBlock.getAttribute('data-descr'),
        image: shareBlock.getAttribute('data-image')
    };
    for (var i = 0; i < links.length; i++) {
        if (links[i].classList.contains('facebook')) {
            links[i].onclick = function(e) {
                e.preventDefault();
                Share.facebook(data.url);
            };
        } else if (links[i].classList.contains('vkontakte')) {
            links[i].onclick = function(e) {
                e.preventDefault();
                Share.vkontakte(data.url, data.title, data.image, data.descr);
            };
        } else if (links[i].classList.contains('twitter')) {
            links[i].onclick = function(e) {
                e.preventDefault();
                Share.twitter(data.url, data.title);
            };
        };
    };
};
