<script setup>
 
import { ref, computed } from 'vue'
import HomePage from './HomePage.vue'
import Blog1 from './Blog1.vue'

const routes = {
  '/': HomePage,
  '/blog1': Blog1
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
 
 <body>

<!-- start section navbar -->
<nav id="main-nav" style="display: none;">
  <div class="row">
    <div class="container">

      <div class="logo">
        <a href="/HomePage"><img src="../assets/img/images/logo.png" alt="logo"></a>
      </div>

      <div class="responsive"><i data-icon="m" class="ion-navicon-round"></i></div>

      <ul class="nav-menu list-unstyled">
        <li><a href="#header" class="smoothScroll">Home</a></li>
        <li><a href="#about" class="smoothScroll">About</a></li>
        <li><a href="#portfolio" class="smoothScroll">Portfolio</a></li>
        <li><a href="#journal" class="smoothScroll active">Experiences</a></li>
        <li><a href="#contact" class="smoothScroll">Contact</a></li>
      </ul>

    </div>
  </div>
</nav>
<!-- End section navbar -->


<!-- start section header -->
<div id="header" class="home">

  <div class="container">
    <div class="header-content">
      <h1>I'm <span class="typed">Desi</span><span class="typed-cursor"></span></h1>
      <p>designer, developer, photographer</p>

      <ul class="list-unstyled list-social">
        <li><a href="#"><i class="ion-social-facebook"></i></a></li>
        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
        <li><a href="#"><i class="ion-social-instagram"></i></a></li>
        <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
        <li><a href="#"><i class="ion-social-tumblr"></i></a></li>
        <li><a href="#"><i class="ion-social-dribbble"></i></a></li>
      </ul>
    </div>
  </div>
</div>
<!-- End section header -->


<!-- start section about us -->
<div id="about" class="paddsection">
  <div class="container">
    <div class="row justify-content-between">

      <div class="col-lg-4 ">
        <div class="div-img-bg">
          <div class="about-img">
            <img src="../assets/img/images/me.jpg" class="img-responsive" alt="me">
          </div>
        </div>
      </div>

      <div class="col-lg-7">
        <div class="about-descr">

          <p class="p-heading">im a UX / UI designer Italy based who loves clean, simple &amp; unique design. i also enjoy crafting brand identities, icons, &amp; ilustration work. </p>
          <p class="separator">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person.</p>

        </div>

      </div>
    </div>
  </div>
</div>
<!-- end section about us -->


<!-- start section services -->
<div id="services">
  <div class="container">

      <div class="services-carousel owl-theme owl-loaded owl-drag">

  
      <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-2260px, 0px, 0px); transition: 0.25s; width: 3955px;"><div class="owl-item cloned" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-color-wand-outline"></i>
          <span>WEB DESIGN</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-social-android-outline"></i>
          <span>MOBILE APPS</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-analytics-outline"></i>
          <span>Analytics</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-camera-outline"></i>
          <span>PHOTOGRAPHY</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-browsers-outline"></i>
          <span>UI/UX DESIGN</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-lightbulb-outline"></i>
          <span>BRAND IDENTITY</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-color-wand-outline"></i>
          <span>WEB DESIGN</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-social-android-outline"></i>
          <span>MOBILE APPS</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-analytics-outline"></i>
          <span>Analytics</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-camera-outline"></i>
          <span>PHOTOGRAPHY</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item cloned active" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-browsers-outline"></i>
          <span>UI/UX DESIGN</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item cloned active" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-lightbulb-outline"></i>
          <span>BRAND IDENTITY</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-ios-color-wand-outline"></i>
          <span>WEB DESIGN</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 20px;"><div class="services-block">

          <i class="ion-social-android-outline"></i>
          <span>MOBILE APPS</span>
          <p class="separator">To an English person, it will seem like simplified English,told me what </p>

        </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div></div>

  </div>

</div>
<!-- end section services -->


<!-- start section portfolio -->
<div id="portfolio" class="text-center paddsection">

  <div class="container">
    <div class="section-title text-center">
      <h2>My Portfolio</h2>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <div class="portfolio-list">

          <ul class="nav list-unstyled" id="portfolio-flters">
            <li class="filter filter-active" data-filter=".all">ALL</li>
            <li class="filter" data-filter=".branding">BRANDING</li>
            <li class="filter" data-filter=".mockups">MOCKUPS</li>
            <li class="filter" data-filter=".uikits">UI KITS</li>
            <li class="filter" data-filter=".webdesign">WEB DESIGN</li>
            <li class="filter" data-filter=".photography">PHOTOGRAPHY</li>
          </ul>

        </div>

        <div class="portfolio-container" style="position: relative; height: 290px;">

          <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign" style="position: absolute; left: 0px; top: 0px; display: none;">
            <a class="popup-img" href="../assets/img/images/portfolio/1.jpg">
              <img src="../assets/img/images/portfolio/1.jpg" alt="img">
            </a>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits photography" style="position: absolute; left: 0px; top: 0px;">
            <a class="popup-img" href="../assets/img/images/portfolio/2.jpg">
              <img src="../assets/img/images/portfolio/2.jpg" alt="img">
            </a>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding webdesig photographyn" style="position: absolute; left: 370px; top: 0px; display: none;">
            <a class="popup-img" href="../assets/img/images/portfolio/3.jpg">
              <img src="../assets/img/images/portfolio/3.jpg" alt="img">
            </a>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-thumbnail all mockups webdesign photography" style="position: absolute; left: 370px; top: 0px;">
            <a class="popup-img" href="../assets/img/images/portfolio/4.jpg">
              <img src="../assets/img/images/portfolio/4.jpg" alt="img">
            </a>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits photography" style="position: absolute; left: 740px; top: 0px;">
            <a class="popup-img" href="../assets/img/images/portfolio/5.jpg">
              <img src="../assets/img/images/portfolio/5.jpg" alt="img">
            </a>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits webdesign" style="position: absolute; left: 740px; top: 0px; display: none;">
            <a class="popup-img" href="../assets/img/images/portfolio/6.jpg">
              <img src="../assets/img/images/portfolio/6.jpg" alt="img">
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>
<!-- End section portfolio -->


<!-- start section journal -->
<div id="journal" class="text-left paddsection">

  <div class="container">
    <div class="section-title text-center">
      <h2>journal</h2>

      <div>
          
      </div>
    </div>
  </div>

  <div class="container">
    <div class="journal-block">
      <div class="row">

        <div class="col-lg-4 col-md-6">
          <div class="journal-info">

            <a href="/blog1"><img src="../assets/img/images/blog-post-1.jpg" class="img-responsive" alt="img"></a>

            <div class="journal-txt">

              <h4><a href="/blog1">MY EXPERIENCES</a></h4>
              <p class="separator">To an English person, it will seem like simplified English
              </p>

            </div>

          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="journal-info">

            <a href="blog-single.html"><img src="../assets/img/images/blog-post-2.jpg" class="img-responsive" alt="img"></a>

            <div class="journal-txt">

              <h4><a href="#blog-single.html">WHERE I CAN SEE MYSELF IN 10 YEARS</a></h4>
              <p class="separator">To an English person, it will seem like simplified English
              </p>

            </div>

          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="journal-info">

            <a href="blog-single.html"><img src="../assets/img/images/blog-post-3.jpg" class="img-responsive" alt="img"></a>

            <div class="journal-txt">

              <h4><a href="blog-single.html">WHAT I LIKE TO DO IN FREETIME</a></h4>
              <p class="separator">To an English person, it will seem like simplified English
              </p>

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

</div>
<!-- End section journal -->


<!-- start section personal soft skills -->

<div id="soft-skills" class="text-center paddsection">

<div class="container">
  <div class="section-title text-center">
    <h2>My Soft Skills</h2>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="wpb_content_element ">
        <div id="ut_pb_6744217b11d92" class="ut-skill  ut-progress-bar-module-1 ut-skill-small ut-skill-with-border-radius">
          <h3 class="ut-skill-name">HTML</h3>
          <div class="ut-skill-bar">
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="54" style="width: 54%;">
              <span class="ut-skill-percent">54%</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="wpb_content_element ">
        <div id="ut_pb_6744217b11d92" class="ut-skill  ut-progress-bar-module-1 ut-skill-small ut-skill-with-border-radius">
          <h3 class="ut-skill-name">CSS</h3>
          <div class="ut-skill-bar">
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="54" style="width: 54%;">
              <span class="ut-skill-percent">54%</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="wpb_content_element ">
        <div id="ut_pb_6744217b11d92" class="ut-skill  ut-progress-bar-module-1 ut-skill-small ut-skill-with-border-radius">
          <h3 class="ut-skill-name">JAVASCRIPT</h3>
          <div class="ut-skill-bar">
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="54" style="width: 54%;">
              <span class="ut-skill-percent">54%</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="wpb_content_element ">
        <div id="ut_pb_6744217b11d92" class="ut-skill  ut-progress-bar-module-1 ut-skill-small ut-skill-with-border-radius">
          <h3 class="ut-skill-name">PHP</h3>
          <div class="ut-skill-bar">
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="54" style="width: 54%;">
              <span class="ut-skill-percent">54%</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="wpb_content_element ">
        <div id="ut_pb_6744217b11d92" class="ut-skill  ut-progress-bar-module-1 ut-skill-small ut-skill-with-border-radius">
          <h3 class="ut-skill-name">PHOTOSHOP</h3>
          <div class="ut-skill-bar">
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="54" style="width: 54%;">
              <span class="ut-skill-percent">54%</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="wpb_content_element ">
        <div id="ut_pb_6744217b11d92" class="ut-skill  ut-progress-bar-module-1 ut-skill-small ut-skill-with-border-radius">
          <h3 class="ut-skill-name">ILLUSTRATOR</h3>
          <div class="ut-skill-bar">
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="54" style="width: 54%;">
              <span class="ut-skill-percent">54%</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</div>

</div>

<!-- End section personal soft skills -->



<!-- start section contact -->
<div id="contact" class="paddsection">
  <div class="container">
    <div class="contact-block1">
      <div class="row">

        <div class="col-lg-6">
          <div class="contact-contact">

            <h2 class="mb-30">GET IN TOUCH</h2>

            <ul class="contact-details">
              <li><span>Via Vizzarro, Seconda Traversa</span></li>
              <li><span>Taranto, Italy</span></li>
              <li><span>+39 3334326039</span></li>
              <li><span>robertoscarci.02@gmail.com</span></li>
            </ul>

          </div>
        </div>

        <div class="col-lg-6">
          <form action="" method="post" role="form" class="contactForm">
            <div class="row">

              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>

              <div class="col-lg-6">
                <div class="form-group contact-block1">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                  <div class="validation"></div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
                  <div class="validation"></div>
                </div>
              </div>

              <div class="col-lg-12">
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject">
                  <div class="validation"></div>
                </div>
              </div>

              <div class="col-lg-12">
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="12" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validation"></div>
                </div>
              </div>

              <div class="col-lg-12">
                <input type="submit" class="btn btn-defeault btn-send" value="Send message">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- start sectoion contact -->


<!-- start section footer -->
<div id="footer" class="text-center">
  <div class="container">
    <div class="socials-media text-center">

      <ul class="list-unstyled">
        <li><a href="#"><i class="ion-social-facebook"></i></a></li>
        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
        <li><a href="#"><i class="ion-social-instagram"></i></a></li>
        <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
        <li><a href="#"><i class="ion-social-tumblr"></i></a></li>
        <li><a href="#"><i class="ion-social-dribbble"></i></a></li>
      </ul>

    </div>

    <p>© Copyrights Folio. All rights reserved.</p>

    <div class="credits">
      <!--
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Folio
      -->
      Designed by <a href="https://bootstrapmade.com/">RobertoScarci</a>
    </div>

  </div>
</div>
<!-- End section footer -->




</body>

</template>

<style lang="scss" scoped>


/*
  Theme Name: Folio
  Theme URL: https://bootstrapmade.com/folio-bootstrap-portfolio-template/
  Author: BootstrapMade.com
  Author URL: https://bootstrapmade.com
*/

/*  General Styling
/*-----------------------------------------------------------------------------------*/

body {
  background: #ffffff;
  color: #898989;
  font-family: 'Poppins', helvetica;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

h2 {
  color: #292929;
  font-weight: 600;
}

h4 {
  color: #292929;
  font-size: 14px;
  font-weight: 600;
}

a {
  color: #292929;
  text-decoration: none !important;
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}

a:hover {
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}

a:hover, a:focus {
  color: #b8a07e;
  text-decoration: underline;
}

nav ul li a {
  padding: 2px 0 0 0;
  position: relative;
  display: block;
  font-size: 12px;
  color: #999999;
  letter-spacing: 0.1em;
  font-weight: 500;
  line-height: 14px;
  text-transform: uppercase;
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}

p {
  margin: 25px 0;
  padding: 0;
  font-size: 15px;
  color: #999999;
  line-height: 28px;
}

::-moz-selection {
  background: #b8a07e;
  color: #fff;
}

::selection {
  background: #b8a07e;
  color: #fff;
}

.btn {
  background: #333;
  border: medium none;
  border-radius: 0;
  color: #fff;
  font-size: 12px;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  text-transform: uppercase;
}

.btn:hover, .btn:focus {
  color: #fff;
}

.padDiv {
  padding: 30px 20px;
}

.section-title {
  margin-bottom: 70px;
}

.section-title h2 {
  font-size: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.form-control {
  background-color: transparent;
  border: 1px solid #999;
  border-radius: 0;
  color: #999999;
  font-size: 12px;
  font-weight: 500;
  height: 50px;
  letter-spacing: 0.1em;
  padding-left: 10px;
  margin: 0 0 25px 0;
  line-height: 14px;
  text-transform: uppercase;
}

.form-control:focus {
  box-shadow: none;
  outline: 0 none;
}

.paddsection {
  padding-top: 90px;
  padding-bottom: 90px;
}

.paddsections {
  padding-top: 90px;
  padding-bottom: 90px !important;
}

.hvr-shutter-in-horizontal::before {
  background: #333;
}

.hvr-shutter-in-horizontal:hover {
  background: #b8a07e;
}

.mb-30 {
  margin-bottom: 30px;
}

/*-----------------------------------------------------------------------------------*/
/*  Navbar Top
/*-----------------------------------------------------------------------------------*/

nav {
  position: fixed;
  background: #fff;
  z-index: 1000;
  width: 100%;
  padding: 20px;
  display: none;
  -webkit-box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.18);
}

.nav-menu {
  float: right;
  line-height: 32px;
  margin-bottom: 0;
  padding-top: 16px;
}

nav ul li {
  float: left;
  margin-right: 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  margin-left: 40px;
}

nav ul li a {
  padding: 2px 0 0 0;
  position: relative;
  display: block;
  font-size: 14px;
  color: #999999;
  font-family: 'Poppins', helvetica;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  text-transform: capitalize;
}

.logo {
  float: left;
}

.logo img {
  width: 100px;
  height: 50px;
}

.responsive {
  display: none;
  font-size: 23px;
}

.active {
  color: #afafaf;
}

/*----------------------------------------------------------------------------------*/
/*  Header
/*-----------------------------------------------------------------------------------*/

#header {
  background: url("../assets/img/images/home-bg.jpg") repeat scroll center center / cover;
  height: 100vh;
  width: 100%;
}


#header .header-content {
  height: 100vh;
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.header-content h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #8b775c;
}

.header-content p {
  font-size: 15px;
  letter-spacing: 6px;
  margin-top: 0;
  margin-bottom: 30px;
  text-transform: capitalize;
  color: #8b775c;
  font-weight: 500;
}

.header-content .list-social li {
  float: left;
  letter-spacing: 30px;
  margin-right: 20px;
}

.header-content .list-social li i {
  color: #8b775c;
  font-size: 22px;
}

/*-----------------------------------------------------------------------------------*/
/*  About-me
/*-----------------------------------------------------------------------------------*/

#about {
  width: 100%;
  height: auto;
  background: #f7f7f7;
  padding-top: 190px;
}

#about .div-img-bg {
  padding-bottom: 30px;
  border: 20px solid #b8a07e;
}

#about .div-img-bg .about-img img {
  width: 100%;
  box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.14);
  margin-top: -60px;
  margin-left: 40px;
  height: 400px;
  object-fit: cover;
}

#about .about-descr .p-heading {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  letter-spacing: 2.8px;
  text-align: left;
}

#about .about-descr .separator {
  max-width: 80%;
  margin-bottom: 0;
  text-align: left;
}

/*-----------------------------------------------------------------------------------*/
/*   Services
/*-----------------------------------------------------------------------------------*/

#services {
  background: #f7f7f7;
  position: relative;
  padding-bottom: 80px;
}

.owl-item {
  float: left;
}
.services-block span {
  margin: 10px 0;
  position: relative;
  font-size: 13px;
  color: #292929;
  letter-spacing: 0.1em;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
}

.services-block .separator {
  margin: 0;
  font-size: 13px;
  line-height: 22px;
}

.services-block i {
  font-size: 44px;
  color: #b8a07e;
  line-height: 44px;
}


.services-carousel  .owl-stage-outer {
  overflow: hidden;
}

.services-carousel .owl-dots {
  margin-top: 30px;
  text-align: center;
}

.services-carousel .owl-dot {
  display: inline-block;
  margin: 0 5px;
  width: 12px !important;
  height: 12px !important;
  border-radius: 50%;
  border: 0;
  padding: 0 !important;
  background-color: #ddd;
  cursor: pointer;
}

.services-carousel .owl-dot.active {
  background-color: #b8a07e;
}

.owl-nav {
  display: none;
}


/*-----------------------------------------------------------------------------------*/
/*  Portfolio
/*-----------------------------------------------------------------------------------*/

#portfolio {
  position: relative;
  padding-bottom: 50px;
}

#portfolio .portfolio-list {
  margin-bottom: 50px;
}

#portfolio .portfolio-list .nav {
  display: inline-block;
  margin: 0;
}

#portfolio .portfolio-list .nav li {
  margin: 0 40px 0 0;
  float: left;
  font-size: 14px;
  color: #999999;
  line-height: 16px;
  cursor: pointer;
  font-family: 'Poppins', helvetica;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}

#portfolio .portfolio-list .nav li:hover, #portfolio .portfolio-list .nav li.filter-active  {
  color: #b8a07e;
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}

#portfolio .portfolio-container {
  display: inline-block;
  margin-bottom: 50px;
  width: 100%;
}

.portfolio-thumbnail {
  margin-bottom: 30px;
  overflow: hidden;
  min-height: 260px;
}

.portfolio-thumbnail img {
  max-width: 100%;
}

/*-----------------------------------------------------------------------------------*/
/*  Journal
/*-----------------------------------------------------------------------------------*/

#journal,  #journal-blog {
  height: auto;
  width: 100%;
  background: #f7f7f7;
  padding-bottom: 60px;
  position: relative;
}

#journal-blog {
  background: #fff;
  padding-bottom: 30px;
}

#journal .journal-block {
  display: inline-block;
  height: auto;
  width: 100%;
}

#journal .journal-block .journal-info {
  position: relative;
}

.journal-block .journal-info img {
  max-width: 100%;
}

.journal-block .journal-info .journal-txt {
  padding: 25px 0px;
  position: relative;
}

.journal-block .journal-info .journal-txt h4 a {
  display: block;
  font-size: 19px;
  line-height: 24px;
  margin: 0 0 13px 0;
  font-weight: 500;
  color: #292929;
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}

.journal-block .journal-info .journal-txt h4 a:hover {
  color: #b8a07e;
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}

.journal-block .journal-info .journal-txt p {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
}


/*-----------------------------------------------------------------------------------*/
/*  Soft Skills
/*-----------------------------------------------------------------------------------*/

.ut-skill-overlay { 
  background: #b8a07e; 
  margin-bottom: 2.5rem;
}

.ut-skill-bar { 
  background: rgba(41, 77, 234, 0.1); 
}

.ut-skill-bar { 
  border-radius: 15px; 
  -moz-border-radius: 15px; 
  -webkit-border-radius: 15px; 
}

.ut-skill-overlay { 
  border-radius: 15px; 
  -moz-border-radius: 15px; 
  -webkit-border-radius: 15px;
}



/*-----------------------------------------------------------------------------------*/
/*  Contact
/*-----------------------------------------------------------------------------------*/

#contact {
  height: auto;
  width: 100%;
}

.contact-details {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-details li {
  padding-bottom: 10px;
}

#contact input, #contact textarea {
  width: 100%;
}


#contact  #sendmessage {
  color: #18d26e;
  border: 1px solid #18d26e;
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin: 15px;
}

#contact  #errormessage {
  color: red;
  display: none;
  border: 1px solid red;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin: 15px;
}

#contact #sendmessage.show, #contact #errormessage.show, #contact .show {
  display: block;
}

#contact .validation {
  color: red;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  font-size: 13px;
}

/*-----------------------------------------------------------------------------------*/
/*  Footer
/*-----------------------------------------------------------------------------------*/

#footer {
  background: #f7f7f7;
  padding-top: 50px;
  padding-bottom: 50px;
}

#footer .socials-media {
  width: 100%;
}

#footer .socials-media ul {
  display: inline-block;
  float: none;
  margin: 0 0 20px 0;
}

#footer .socials-media ul li {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}

#footer .socials-media ul li a {
  font-size: 24px;
  color: #999;
  letter-spacing: 0.1em;
  font-weight: 500;
  background: transparent;
  text-transform: uppercase;
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}

#footer .socials-media ul li a:hover {
  color: #b8a07e;
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}

#footer p {
  font-size: 12px;
  letter-spacing: 0.1em;
  font-weight: 500;
  margin-top: 0;
  text-transform: uppercase;
}

.credits {
  font-size: 13px;
}


/** Width between 1200x to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

 @media (min-width: 1200px) {

}

/** Width between 992px to 1199px
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

@media (min-width: 992px) and (max-width: 1199px) {
  
}

/** Width between 768px to 991px
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

@media (min-width: 768px) and (max-width: 991px) {
  /* Navbar */
  nav {
    padding: 10px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content .cmaster h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
    display: inline-block;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

/** Width between 767px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

@media (max-width: 767px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
    display: inline-block;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

/** Width between 600px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

@media (max-width: 600px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 10px;
    display: inline-block;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

/** Width between 480px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

@media (max-width: 480px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

/** Width between 320px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

@media (max-width: 320px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
  /* Single page */
  .entry-comments-body span {
    display: inline-block;
    margin-right: 0;
  }
}


</style>
