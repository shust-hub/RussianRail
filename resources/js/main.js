$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop == 0) {
        maxHeight = 100;
    } else if (scrollTop < 400) {
        maxHeight = 85;
    } else {
        maxHeight = 150 - 75 * ((scrollTop - 200)) / 200;

    }
    $('.header-index').css({
        'height': maxHeight + "vh"
    });
})

function infinite(){
    $('#kidsScroll').animate({"background-position-x":"-5000px"},90000,function(){
      $(this).css({"background-position-x":'0px'});
    });
  }


$(document).ready(function() {
      infinite();
      setInterval(infinite,900000); 

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

    $('.traineShedule_tips').each(function(ndx, elem) {
            var $elem = $(elem);
            switch ($elem.text().trim()){
                case "eticket": 
                    $elem.attr('title', 'This is a ticket with electronic registration. The electronic ticket that we email to you does not have to be exchanged prior to your trip. To board the train, you just have to show this electronic ticket and your passport.') // set title attribute
                    .data('toggle', 'tooltip') 
                    .tooltip(); 
                break;
                case "paper ticket":
                    $elem.attr('title', 'Paper ticket can only be used in original. It has to be picked up at our office or delivered by FedEx') // set title attribute
                    .data('toggle', 'tooltip') 
                    .tooltip(); 
                break;
                case "semi e-ticket": 
                    $elem.attr('title',  "This is a ticket which will be sent to you by email, but which you will have to exchange for a boarding pass prior to the trip at the train station. You can exchange your semi e-ticket in a ticket booth (it should have an E-ticket sign) or at an electronic terminal at the train station. To get your boarding pass at the station and to board a train you will have to show your passport.")
                    .data('toggle', 'tooltip') 
                    .tooltip(); 
                break;
                case "express": 
                    $elem.attr('title', "Express trains usually serve long distance routes and are quite popular among travelers. Average speed of a Skory train is from 50 to 91 km/h. These trains run regularly and make less stops than Passazhirsky trains.")
                    .data('toggle', 'tooltip') 
                    .tooltip(); 
                break;
                case "high-speed":
                    $elem.attr('title', "These are very fast trains that cover long distances in a short amount of time. Their speed is 140-200km/h. These trains do not have sleeper carriages, they have only seats. 1st class seats are similar to Business class airplane seats and 2nd class can be compared to Economy airplane seats. All of these trains are also Firmenny (branded) and offer high-quality service.")
                    .data('toggle', 'tooltip') 
                    .tooltip(); 
                break;
                case "branded":
                   $elem.attr('title', "Branded trains are high standard trains. Their major amenities are: air-conditioning, convenient train schedule, shorter travel time, newer carriages, bed linen and toiletries of higher quality. Compartments for disabled people are also available on these trains. Each train has its specific interior design and a name such ‘Kama’, ‘Red Arrow’. These Russian trains typically have 1st, 2nd and 3rd class carriages and have a restaurant carriage.")
                   .data('toggle', 'tooltip') 
                   .tooltip(); 
                break;
                }     
        })


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


