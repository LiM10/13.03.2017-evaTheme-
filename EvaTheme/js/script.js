$(document).ready(function () {

    var works = $('.featured-works');
    works.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
//        autoplaySpeed: 750,
//        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoWidth: false,
        nav: true,
        dots: false,
        navText: ["<a id='left' class='fa fa-angle-left'></a>", "<a id='right' class='fa fa-angle-right'></a>"]
//        responsiveClass: true,
//        responsive: {
//            0: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            600: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            1000: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            }
//        }
    });
});

$(document).ready(function () {

    var team = $('.our-team');
    team.owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        width: 400,
//        autoplaySpeed: 750,
//        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoWidth: false,
        nav: true,
        dots: false,
        navText: ["<a id='left-team' class='fa fa-angle-left'></a>", "<a id='right-team' class='fa fa-angle-right'></a>"]
//        responsiveClass: true,
//        responsive: {
//            0: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            600: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            1000: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            }
//        }
    });
});

$(document).ready(function () {

    var testimonial = $('.testimonials');
    testimonial.owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        width: 400,
//        autoplaySpeed: 750,
//        autoplayTimeout: 4000,
//        autoplayHoverPause: true,
        autoWidth: false,
        nav: false,
        dots: true
//        responsiveClass: true
//        responsive: {
//            0: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            600: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            1000: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            }
//        }
    });
});

