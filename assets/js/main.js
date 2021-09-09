$(document).ready(function () {
    AOS.init();

    // init controler
    var controller = new ScrollMagic.Controller();

    // section3
    new ScrollMagic.Scene({
            triggerElement: '#img1',
            // offset: -10,
        })
        .setTween(TweenMax.from($("#img1"), 0.5, {
            opacity: 0,
            // x: 0,
            ease: Power2.easeInOut,
            autoAlpha: 0
        }))
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#img2',
            // offset: -10,
        })
        .setTween(TweenMax.from($("#img2"), 0.5, {
            opacity: 0,
            // x: 0,
            ease: Power2.easeInOut,
            autoAlpha: 0
        }))
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#img3',
            // offset: -10,
        })
        .setTween(TweenMax.from($("#img3"), 0.5, {
            opacity: 0,
            // x: 0,
            ease: Power2.easeInOut,
            autoAlpha: 0
        }))
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#img4',
            // offset: -10,
        })
        .setTween(TweenMax.from($("#img4"), 0.5, {
            opacity: 0,
            // x: 0,
            ease: Power2.easeInOut,
            autoAlpha: 0
        }))
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#img5',
            // offset: -10,
        })
        .setTween(TweenMax.from($("#img5"), 0.5, {
            opacity: 0,
            // x: 0,
            ease: Power2.easeInOut,
            autoAlpha: 0
        }))
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#img6',
            // offset: -10,
        })
        .setTween(TweenMax.from($("#img6"), 0.5, {
            opacity: 0,
            // x: 0,
            ease: Power2.easeInOut,
            autoAlpha: 0
        }))
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#img7',
            // offset: -10,
        })
        .setTween(TweenMax.from($("#img7"), 0.5, {
            opacity: 0,
            // x: 0,
            ease: Power2.easeInOut,
            autoAlpha: 0
        }))
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#img8',
            // offset: -10,
        })
        .setTween(TweenMax.from($("#img8"), 0.5, {
            opacity: 0,
            // x: 0,
            ease: Power2.easeInOut,
            autoAlpha: 0
        }))
        // .addIndicators()
        .addTo(controller);

    // section5
    var tl5 = new TimelineMax();
    tl5.staggerFrom($('.man-box--col'), 0.75, {
            opacity: 0,
            autoAlpha: 0,
            x: "-=10px",
            transformOrigin: "center",
            css: {
                width: 0
            },
            ease: Power2.easeInOut
        }, 0.05)
        .from($('s5-number'), 0.5, {
            opacity: 0,
            autoAlpha: 0,
            ease: Power2.easeInOut
        }, "-=0.5")
        .from($('.s5-deco'), 0.5, {
            opacity: 0,
            autoAlpha: 0,
            scale: 0,
            ease: Power2.easeInOut
        })
        .from($('.overlay'), 0.5, {
            opacity: 0,
            autoAlpha: 0,
            ease: Power2.easeInOut
        });

    new ScrollMagic.Scene({
            triggerElement: '.section5-content',
            // offset: -150,
        })
        .setTween(tl5)
        // .addIndicators()
        .addTo(controller);

    // section6
    $('.s6-btn__item').click(function () {
        var btn = $(this).attr('data-btn');
        $('.s6-btn__item').removeClass("animated");
        $(this).addClass("animated");
        $('.s6-result__item').removeClass('active');
        $('#' + btn).addClass('active');
    });
});