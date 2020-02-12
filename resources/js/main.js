$(window).scroll(function() {    
    var scroll = $(window).scrollTop();   
    if (scroll <= 5)  {
        $('.header-index').addClass('scroll');
        }
        else {
        $('.header-index').removeClass('scroll');
        }
});

$(document).ready(function() {

    $('.header-index').addClass('scroll'); 
    
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    var owl = $('.gallery');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 20000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    var owl = $('.testimonials_1');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 20000,
      responsive: {
        0: {
          items: 1
        },
        1320: {
          items: 1
        },
        1350: {
          items: 2
        }
      }
    })
    
    var owl = $('.newsSlider');
    owl.owlCarousel({
        margin: 15,
        navContainer: '.news-nav',
        nav: true,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            981: {
                items: 2
            },
            1320: {
                items: 2
            },
            1321: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })

  })

    var owl = $('.testimonials_2');
    owl.owlCarousel({
        margin: 0,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 20000,
        responsive: {
            0: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    var owl = $('.articles_slider');
    owl.owlCarousel({
        margin: 15,
        nav: false,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 20000,
        responsive: {
            0: {
                items: 1
            },
            981: {
                items: 2
            },
            1320: {
                items: 2
            },
            1321: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });


    $('.show_timetable').click(function(){
        $(this).next().slideToggle('slow');
        
    });


    $(function(){
        V=$(this).attr("data-state");
        if(V!="open"){
            $(this).find(".togglec").hide();
            $(this).find(".toggle-closed").hide();
        }else{
            $(this).find(".togglet").addClass("toggleta");
            
        }
        $(this).find(".togglet").click(function(){
            $(this).toggleClass("toggleta").next(".togglec").slideToggle(300);
            return true
        });
    });



        // function(){
        //     var T=C(".toggle");
        //     if(T.length>0){
        //         T.each(function(){
        //             var U=C(this),
        //             V=U.attr("data-state");
        //             if(V!="open"){
        //                 U.find(".togglec").hide()
        //             }else{
        //                 U.find(".togglet").addClass("toggleta")
        //             }
        //             U.find(".togglet").click(function(){
        //                 C(this).toggleClass("toggleta").next(".togglec").slideToggle(300);return true}
        //                 )})}}
        // accordions:function(){
        //     var T=C(".accordion");if(T.length>0){T.each(function(){var U=C(this),W=U.attr("data-state"),V=U.attr("data-active");if(!V){V=0}else{V=V-1}U.find(".acc_content").hide();if(W!="closed"){U.find(".acctitle:eq("+Number(V)+")").addClass("acctitlec").next().show()}U.find(".acctitle").click(function(){if(C(this).next().is(":hidden")){U.find(".acctitle").removeClass("acctitlec").next().slideUp("normal");C(this).toggleClass("acctitlec").next().slideDown("normal")}return false})})}}

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#toTop').is(':hidden')) {
            $('#toTop').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#toTop').stop(true, false).fadeOut('fast'); }
});
$('#toTop').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
});


