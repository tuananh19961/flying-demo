// CAUROSEL CONFIG
$(document).ready(function () {
    $(".slider-partner").owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        nav: true,
        navText: [$('.am-next'), $('.am-prev')],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        smartSpeed: 1500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 4,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });
});

// FIXED HEADER AND SCROLL MENU
$(document).ready(function () {

    $('.uk-icon-angle-down').on('click', function(){
        $('html, body').animate({
            scrollTop: $("#section1").offset().top - 60
        }, 1500);
    });

    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".static_header").addClass('active');
    }
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 70) {
            $(".static_header").addClass('active');
        } else {
            $(".static_header").removeClass('active');
        }
    })
});