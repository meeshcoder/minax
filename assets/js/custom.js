(function($) {
  'use strict';  
    /*---------------------------------
        Preloader JS
    -----------------------------------*/ 
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.spinner');
        var preloaderArea = jQuery('.preloader_area');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
    /*---------------------------------
        Preloader JS
    -----------------------------------*/

    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
         if (scroll < 100) {
          $(".minax_header").removeClass("sticky");
         }else{
          $(".minax_header").addClass("sticky");
         }
    }); 
    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    /*---------------------
        Sidebar-menu js
    -----------------------*/
    $(".menu_icon,.close_btn,.sidebar-menu li a").on('click', function (e) {
      $(".menu_icon").toggleClass("active");
    });
    $(".menu_icon,.close_btn,.sidebar-menu li a").on('click', function (e) {
      e.preventDefault();
      $(".sidenav_menu").toggleClass("active");
    });
    $.sidebarMenu($('.sidebar-menu'));
    /*---------------------------------
        scrollspy JS
    --------------------------------*/
    $(window).on('scroll', function() {
        var currentTop = $(window).scrollTop();
        var elems = $('.scrollspy');
        elems.each(function(index){
          var elemTop   = $(this).offset().top;
          var elemBottom    = elemTop + $(this).height();
          if(currentTop >= elemTop && currentTop <= elemBottom){
            var id      = $(this).attr('id');
            var navElem = $('a[href="#' + id+ '"]');
        navElem.parent().addClass('active').siblings().removeClass( 'active' );
          }
        })
    });
    /*---------------------------------
        page_scroll top JS
    --------------------------------*/
    $("a.page_scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            //console.log($(hash).offset().top - topOffset);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $("header").outerHeight() + "px"
            }, 1200, function () {

                //window.location.hash = hash;
            });
        } // End if
    });
    /*======================================/
                  scroll top JS
    ======================================*/
    /*---------------------- 
        owl carousel js
    ------------------------*/
    $('.client_slider').owlCarousel({
      loop: true,
      margin: 0,
      items: 3,
      responsiveClass:true,
      nav: false,
      dots: false,
      autoplay: true,
      smartSpeed: 400,
      autoplayHoverPause: true,
      responsive:{
          300:{
            items:1,
          },
          600:{
            items:1,
          },
          1000:{
            items: 3,
          }
      }
    })
    /*---------------------- 
        owl carousel js
    ------------------------*/  
    /*---------------------- 
        magnific-Popup js
    ----------------------*/
    $('.play_btn').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $('.btn_zoom').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
    /*---------------------- 
        magnific-Popup js
    ----------------------*/
    /*---------------------- 
        Isotope js
    ------------------------*/ 
    $('#portfolio').imagesLoaded( function() {
        var $grid = $('.masonry_grid').isotope({
            itemSelector: '.grid_item',
            percentPosition: true,
            masonry: {
              columnWidth: 1
            }
        });
    });
    /*---------------------- 
        Isotope js
    ------------------------*/
    // wow js
    new WOW().init();
    
})(window.jQuery);   