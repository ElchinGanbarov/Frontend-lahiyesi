$(document).ready(function () {
    //WINDOW SCROLLED NAVBAR FIXED TOP
    $(window).scroll(function () {
        if ($("html").scrollTop() > 200) {
            $("#edu-global").addClass("fixed-top");
            $("#edu-global").css("background-color","white")
        } else {
            $("#edu-global").removeClass("fixed-top");
        }
    }); 
    //ALERT-BOX CLOSED
    $(".close").click(function () {
        $("#alertbox").addClass("d-none")
        $("#header").css("padding-top", "0")

    })
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
    if($("#carusel-slide").length){
        $("#carusel-slide").hover(function () {
            $(this).find(".carousel-control-prev-icon").addClass("d-block");
            $(this).find(".carousel-control-next-icon").addClass("d-block")
    
        }, function () {
            $(this).find(".carousel-control-prev-icon").removeClass("d-block");
            $(this).find(".carousel-control-next-icon").removeClass("d-block");
        })
    }
   
    if($(".owl-carousel").length){
        $('.owl-carousel').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,       
    })
    }
    // JS COUNTER-UP
        if($(".counter")){
            $(".counter").counterUp({
                time: 1500,
                
            });
        }
       // JS IMG SCALE
        if($(".courses-item").length){
           $(".courses-item").hover(function(){
            $(this).find(".courses-img img").css({
               "transform":"scale(1.1)"
                    })
           },function(){
            $(this).find(".courses-img img").css({
                "transform":"scale(1.0)"
                     })
           })
        }
        $('.text-center').on( 'click', 'a', function(e) {
            e.preventDefault()
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            // filterValue = filterFns[ filterValue ] || filterValue;
            $(".grid").isotope({ filter: filterValue });
          });
          
          $(".our-teacher-item").hover(function(){
              $(this).find(".listed").css({
                  "opacity":"1",
                  "top":"50%"
              })
          },function(){
            $(this).find(".listed").css({
                "opacity":"0",
                "top":"100%"
            })
          })
         
    // JS IMG-SLIDER
            $('.slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay:true,
                autoplaySpeed: 3000,  
        })
        
    
})