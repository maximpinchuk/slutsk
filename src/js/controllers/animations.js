/*
 * Animations on scroll
 */

if (window.innerWidth > 992 || document.body.clientWidth > 992) {
    (function() {
        var animateItems = document.querySelectorAll('.animation-element');
        var animateItemsLarge = document.querySelectorAll('.animation-element-substrate');

        // check if an element is in viewport
        // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
        function isElementInViewport(el, threshold) {
            var htmlElement = document.documentElement; // html element

            var elCoordinates = el.getBoundingClientRect(),
                elTopFromBottom = elCoordinates.top - window.innerHeight || htmlElement.clientHeight,
                elBottomFromBottom = elCoordinates.bottom - window.innerHeight || htmlElement.clientHeight,
                elHeight = el.clientHeight;

            // Определение видимой части элемента, который надо анимировать
            if (threshold === null) {
                var elementVisiblePart = elHeight * 1;
            } else {
                var elementVisiblePart = elHeight * threshold;
            };

            return (
                elTopFromBottom <= elementVisiblePart
            );
        }

        function callbackFunc() {
            for (var i = 0; i < animateItems.length; i++) {
                var threshold = animateItems[i].getAttribute('data-threshold');
                if (isElementInViewport(animateItems[i], threshold)) {
                    animateItems[i].classList.add('in-view');
                }
            };
            for (var i = 0; i < animateItemsLarge.length; i++) {
                var threshold = animateItemsLarge[i].getAttribute('data-threshold');
                if (isElementInViewport(animateItemsLarge[i], threshold)) {
                    animateItemsLarge[i].classList.add('in-view');
                }
            }
        }

        window.addEventListener('load', callbackFunc);
        window.addEventListener('scroll', callbackFunc);
    })();
};
