

// smooth scroll script

$(document).ready(function(){
  
  // Scroll to ID
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1500);
       return false;
      }
    }
  });
	

  // carousel plugin starts 
  $("#owl-example").owlCarousel({

      // Most important owl features
      items : 3,

       itemsDesktop : [1199,3],

      /* При ширине экрана 980px и менее - показываем 3 слайда*/
      itemsDesktopSmall : [991,2],

      /* При ширине экрана 768px и менее - показываем 2 слайда*/
      itemsTablet: [768,2],
      
      /* Для ширины itemsTabletSmall - мы не задаем значения ширины и количества слайдов */
      itemsTabletSmall: false,

      /* При ширине экрана 479px и менее - показываем 1 слайда*/
      itemsMobile : [479,1],

      pagination: true,
  });
	
	
  // $("div.navbar-fixed-top").autoHidingNavbar();


  // Скрипт для показа и скрытия выпадающего меню на смартфонах
   $(function() {
       var pull        = $('.hamburger_holder img');
           menu        = $('.nav_holder');
           menuHeight  = menu.height();

       $(pull).on('click', function(e) {
           e.preventDefault();
           menu.slideToggle();
       });

       $(window).resize(function(){
           var w = $(window).width();
           if(w > 320 && menu.is(':hidden')) {
               menu.removeAttr('style');
           }
       });
   });


   // Sticky Header - Headhesive
   //var header = new Headhesive('#stickyHeader');


   // Set options
    var options = {
        offset: 900,
        offsetSide: 'top',
        classes: {
            clone:   'stickyheader--clone',
            stick:   'stickyheader--stick',
            unstick: 'stickyheader--unstick'
        }
    };

    // Initialise with options
    var banner = new Headhesive('.nav', options);

    // Headhesive destroy
    // banner.destroy();

  
});

 

 

