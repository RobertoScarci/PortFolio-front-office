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
        $("#main-nav").slideUp(700);
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
        typeSpeed: 100,
        loop: true,
      });
    });
  
  
    // ========================================================================= //
    //  Owl Carousel Services
    // ========================================================================= //
  
    (function() {
      $(document).ready(function() {
        var walkthrough;
        walkthrough = {
          index: 0,
          nextScreen: function() {
            if (this.index < this.indexMax()) {
              this.index++;
              return this.updateScreen();
            }
          },
          prevScreen: function() {
            if (this.index > 0) {
              this.index--;
              return this.updateScreen();
            }
          },
          updateScreen: function() {
            this.reset();
            this.goTo(this.index);
            return this.setBtns();
          },
          setBtns: function() {
            var $lastBtn, $nextBtn, $prevBtn;
            $nextBtn = $('.next-screen');
            $prevBtn = $('.prev-screen');
            $lastBtn = $('.finish');
            if (walkthrough.index === walkthrough.indexMax()) {
              $nextBtn.prop('disabled', true);
              $prevBtn.prop('disabled', false);
              return $lastBtn.addClass('active').prop('disabled', false);
            } else if (walkthrough.index === 0) {
              $nextBtn.prop('disabled', false);
              $prevBtn.prop('disabled', true);
              return $lastBtn.removeClass('active').prop('disabled', true);
            } else {
              $nextBtn.prop('disabled', false);
              $prevBtn.prop('disabled', false);
              return $lastBtn.removeClass('active').prop('disabled', true);
            }
          },
          goTo: function(index) {
            $('.screen').eq(index).addClass('active');
            return $('.dot').eq(index).addClass('active');
          },
          reset: function() {
            return $('.screen, .dot').removeClass('active');
          },
          indexMax: function() {
            return $('.screen').length - 1;
          },
          closeModal: function() {
            $('.walkthrough, .shade').removeClass('reveal');
            return setTimeout((() => {
              $('.walkthrough, .shade').removeClass('show');
              this.index = 0;
              return this.updateScreen();
            }), 200);
          },
          openModal: function() {
            $('.walkthrough, .shade').addClass('show');
            setTimeout((() => {
              return $('.walkthrough, .shade').addClass('reveal');
            }), 200);
            return this.updateScreen();
          }
        };
        $('.next-screen').click(function() {
          return walkthrough.nextScreen();
        });
        $('.prev-screen').click(function() {
          return walkthrough.prevScreen();
        });
        $('.close').click(function() {
          return walkthrough.closeModal();
        });
        $('.open-walkthrough').click(function() {
          return walkthrough.openModal();
        });
        walkthrough.openModal();
        
        // Optionally use arrow keys to navigate walkthrough
        return $(document).keydown(function(e) {
          switch (e.which) {
            case 37:
              // left
              walkthrough.prevScreen();
              break;
            case 38:
              // up
              walkthrough.openModal();
              break;
            case 39:
              // right
              walkthrough.nextScreen();
              break;
            case 40:
              // down
              walkthrough.closeModal();
              break;
            default:
              return;
          }
          e.preventDefault();
        });
      });
    
    }).call(this);
    
  
    // ========================================================================= //
    //  magnificPopup
    // ========================================================================= //
  
    
  
  
    // Call the functions
    magnifPopup();
  
  });
  
  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //
  
