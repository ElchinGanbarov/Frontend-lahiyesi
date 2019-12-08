$(document).ready(function(){
    $(".close").click(function(){
        $("#alertbox").addClass("d-none")
        $("#header").css("padding-top","0")

    })
    $(".nav-item").hover(function(){
        $(this).find(".dropdown-menu").addClass("show");
        $(this).find(".galer").removeClass("show");
        $(this).find(".search-menu").removeClass("show");
        

    },function(){
        $(this).find(".dropdown-menu").removeClass("show");
    })
    $(".title ").hover(function(){
    $(".galer").addClass("show");

    },function(){
        $(".galer").removeClass("show")
    })
    $(".icon").click(function(){
        $(this).toggleClass("fa-times");
        if($(this).hasClass("fa-times")){
            $(this).parent().next().addClass("d-block")
        }else{
            $(this).parent().next().removeClass("d-block")
        } 
    })
      $("#carusel-slide").hover(function(){
        $(this).find(".carousel-control-prev-icon").addClass("d-block");
        $(this).find(".carousel-control-next-icon").addClass("d-block")
        
      },function(){
        $(this).find(".carousel-control-prev-icon").removeClass("d-block");
        $(this).find(".carousel-control-next-icon").removeClass("d-block");
      })
})