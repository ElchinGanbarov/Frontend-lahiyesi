
$(document).ready(function () {
    //WINDOW SCROLLED NAVBAR FIXED TOP
    var nav = $('#edu-global');

    $(window).scroll(function () {
        console.log($("html").scrollTop());
        
        if ($("html").scrollTop() > 125) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
    //ALERT-BOX CLOSED
    $(".close").click(function () {
        $("#alertbox").addClass("d-none")
        $("#header").css("padding-top", "0")

    })

    // NAV-ITEM HOVER DROPDOWN-MENU ELEMENT SHOW
    $(".nav-item").hover(function () {
        $(this).find(".dropdown-menu").addClass("show");
        $(this).find(".galer").removeClass("show");
        $(this).find(".search-menu").removeClass("show");


    }, function () {
        $(this).find(".dropdown-menu").removeClass("show");
    })

    $(".title ").hover(function () {
        $(".galer").addClass("show");

    }, function () {
        $(".galer").removeClass("show")
    })
    $(".icon").click(function () {
        $(this).toggleClass("fa-times");
        if ($(this).hasClass("fa-times")) {
            $(this).parent().next().addClass("d-block")
        } else {
            $(this).parent().next().removeClass("d-block")
        }
    })
    // JS CARUSEL-SLIDE
    if ($("#carusel-slide").length) {
        $("#carusel-slide").hover(function () {
            $(this).find(".carousel-control-prev-icon").addClass("d-block");
            $(this).find(".carousel-control-next-icon").addClass("d-block")

        }, function () {
            $(this).find(".carousel-control-prev-icon").removeClass("d-block");
            $(this).find(".carousel-control-next-icon").removeClass("d-block");
        })
    }
    // SLIDE OWl-CARUSEl
    if ($(".owl-carousel").length) {
        $('.owl-carousel').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,

            //RESPONSIVE
            responsive: [

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 996,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                }

            ]
        })
    }
    // JS COUNTER-UP
    if ($(".counter")) {
        $(".counter").counterUp({
            time: 1500,
        });
    }
    // JS IMG SCALE
    if ($(".courses-item").length) {
        $(".courses-item").hover(function () {
            $(this).find(".courses-img img").css({
                "transform": "scale(1.1)"
            })
        }, function () {
            $(this).find(".courses-img img").css({
                "transform": "scale(1.0)"
            })
        })
    }

    //Isotope plugin
    $('.text-center').on('click', 'a', function (e) {
        e.preventDefault()
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        // filterValue = filterFns[ filterValue ] || filterValue;
        $(".grid").isotope({ filter: filterValue });
    });

    $(".our-teacher-item").hover(function () {
        $(this).find(".listed").css({
            "opacity": "1",
            "top": "50%"
        })
    }, function () {
        $(this).find(".listed").css({
            "opacity": "0",
            "top": "100%"
        })
    })

    // JS IMG-SLIDER
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        //RESPONSIVE
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 996,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    })
  
    // OUR-BLOG-ITEM HOVER TRANSFORM TRANSLATE
    $(".our-blog-item").hover(function () {
        $(this).find(".circle").css("transform", "translateY(-145px)")
    }, function () {
        $(this).find(".circle").css("transform", "translateY(145px)")
    })

    // WINDOW SCROLLED BOTTOM WIEV
    $(window).scroll(function () {
  
        if ($("html").scrollTop() > 100) {
            $(".scrollup").css("opacity", "1");

        } else {
            $(".scrollup").css("opacity", "0")
        }
    });

    //WINDOW SCROLLED ANIMATED TOP 0
    $(".scrollup").click(function (e) {
        e.preventDefault()
        var body = $("html, body");
        body.stop().animate({ scrollTop: 0 }, 500, 'swing', function () {
        });
    })

    //ICON CLICKED COLOR CHANGE
    $(".rating i").click(function () {
        $(this).toggleClass("orange")
    })


    // WINDOW SCROLLED ELEMENT SHOW ANIMATED
    if ($("section").length || $("html").scrollTop != 0) {
        $(window).scroll(function () {

            /* Check the location of each desired element */
            $('section').each(function (i) {

                var bottom_of_object = $(this).position().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > bottom_of_object) {

                    $(this).animate({ 'opacity': '1' }, 1500);

                }

            });

        });

    }

     // WINDOW REFRESH SECTION ANIMATE SHOW
    $(document).ready(function () {
        $('section').each(function (i) {

            var bottom_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();


            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 1500);
            }
        });

    });

    

})
