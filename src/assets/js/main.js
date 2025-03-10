import '../scss/app.scss'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/index.umd'

import '../../lib/jquery/jquery.min.js'
import '../../lib/jquery/jquery-migrate.min.js'
import '../../lib/typed/typed.js'
import '../../lib/owlcarousel/owl.carousel.min.js'
import '../../lib/magnific-popup/magnific-popup.min.js'
import '../../lib/isotope/isotope.pkgd.min.js'

import.meta.glob([
  '../img/**'
])

import { createApp } from 'vue'
import App from '../../App.vue'
import router from '../js/router'

createApp(App).use(router).mount('#app');

/*global $, jQuery, alert*/
$(document).ready(function() {

    'use strict';
  
    // ========================================================================= //
    //  //SMOOTH SCROLL
    // ========================================================================= //
  
  
    $(document).on("scroll", onScroll);
  
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      $(document).off("scroll");
  
      $('a').each(function() {
        $(this).removeClass('active');
        if ($(window).width() < 768) {
          $('.nav-menu').slideUp();
        }
      });
  
      $(this).addClass('active');
  
      var target = this.hash,
          menu = target;
  
      target = $(target);
      $('html, body').stop().animate({
        'scrollTop': target.offset().top - 80
      }, 500, 'swing', function() {
        window.location.hash = target.selector;
        $(document).on("scroll", onScroll);
      });
    });
  
  
    function onScroll(event) {
      if ($('.home').length) {
        var scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function() {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
        });
      }
    }
  
    // ========================================================================= //
    //  //NAVBAR SHOW - HIDE
    // ========================================================================= //
  
  
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 200 ) {
        $("#main-nav, #main-nav-subpage").slideDown(700);
        $("#main-nav-subpage").removeClass('subpage-nav');
      } else {
        $("#main-nav").slideUp(670);
        $("#main-nav-subpage").hide();
        $("#main-nav-subpage").addClass('subpage-nav');
      }
    });
  
    // ========================================================================= //
    //  // RESPONSIVE MENU
    // ========================================================================= //
  
    $('.responsive').on('click', function(e) {
      $('.nav-menu').slideToggle();
    });
  
    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //
  
    var typed = $(".typed");
  
    $(function() {
      typed.typed({
        strings: ["Roberto Scarci.", "Developer.", "Designer.", "Freelancer.", "Photographer."],
        typeSpeed: 105,
        loop: true,
      });
    });
  
  
    // ========================================================================= //
    //  Owl Carousel Services
    // ========================================================================= //
  
    $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: true,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });
    
  
    // ========================================================================= //
    //  magnificPopup
    // ========================================================================= //
  
    
  
  
    // Call the functions
    magnifPopup();
  
  });
  
  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //
  
