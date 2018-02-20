/*
 * History page timiline animate
 */
(function() {
    if (document.querySelector('.timeline')) {
        if (window.innerWidth > 992 || document.body.clientWidth > 992) {
            var timeline = document.querySelector('.timeline'),
                timelineHeight = timeline.clientHeight;

            var timelineController = new ScrollMagic.Controller();
            var timelineScene = new ScrollMagic.Scene({
                triggerElement: '.timeline',
                duration: timelineHeight,
                triggerHook: 0.8,
                reverse: false
            })
            .addTo(timelineController);

            function callback(event) {
                timeline.style.transform = 'scaleY(' + timelineScene.progress() + ')';
            };
            timelineScene.on('progress', callback);
        };
    };
})();



/*
 * History page scroll animation
 */
(function() {
    if (document.querySelector('.history-item')) {
        if (window.innerWidth > 992 || document.body.clientWidth > 992) {
            var items = document.querySelectorAll('.history-item');

            var historyItemsController = new ScrollMagic.Controller();

            Array.prototype.forEach.call(items, function(el, i){
                var historyItemsScene = new ScrollMagic.Scene({
                    triggerElement: el,
                    triggerHook: 0.6,
                    reverse: false
                })
                .setClassToggle(el, 'in-view')
                .addTo(historyItemsController);
            });
        };
    };
})();
