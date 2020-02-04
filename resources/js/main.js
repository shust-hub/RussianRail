$(document).ready(function() {

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
            1320: {
                items: 2
            },
            1350: {
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
        dots: true,
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