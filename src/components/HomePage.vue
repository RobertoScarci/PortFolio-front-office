<script setup>
 
import { ref, computed } from 'vue'
import HomePage from './HomePage.vue'
import Blog1 from './Blog1.vue'
import Portfolio from './Portfolio.vue';

const routes = {
  '/': HomePage,
  '/blog1': Blog1,
  '/portfolio': Portfolio
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
        <li><a href="https://www.facebook.com/roberto.scarci"><i class="ion-social-facebook"></i></a></li>
        <li><a href="#"><i class="ion-social-twitter"></i></a></li>
        <li><a href="https://www.instagram.com/robertoscarci_/?hl=it"><i class="ion-social-instagram"></i></a></li>
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
    <!-- / A set of walkthrough screens in HTML/CSS/JS. A personal experiment with layering images, CSS3 transitions, & flexbox. -->
        <button class='open-walkthrough'>Start</button>
        <div class='walkthrough show reveal'>
          <div class='walkthrough-pagination'>
            <a class='dot active'></a>
            <a class='dot'></a>
            <a class='dot'></a>
            <a class='dot'></a>
            <a class='dot'></a>
          </div>
          <div class='walkthrough-body'>
            <ul class='screens animate'>
              <li class='screen active'>
                <div class='media logo'>
                  <img class='logo' src='https://s3.amazonaws.com/jebbles-codepen/icon.png'>
                </div>
                <h3>
                  Product Intro
                  <br>Walkthrough</br>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </li>
              <li class='screen'>
                <div class='media books'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/book_icon_1.png'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/book_icon_2.png'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/book_icon_3.png'>
                </div>
                <h3>
                  Data and File
                  <br>Management</br>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </li>
              <li class='screen'>
                <div class='media bars'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/bar_icon_axis.png'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/bar_icon_3.png'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/bar_icon_2.png'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/bar_icon_1.png'>
                </div>
                <h3>
                  Analytics
                  <br>and Metrics</br>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </li>
              <li class='screen'>
                <div class='media files'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/file_icon_1.png'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/file_icon_2.png'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/file_icon_3.png'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/file_icon_4.png'>
                </div>
                <h3>
                  Reporting
                  <br>and Insights</br>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </li>
              <li class='screen'>
                <div class='media comm'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/comm_icon_1.png'>
                  <img class='icon' src='https://s3.amazonaws.com/jebbles-codepen/comm_icon_2.png'>
                </div>
                <h3>
                  Communications
                  <br>Tools</br>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </li>
            </ul>
            <button class='prev-screen'>
              <i class='icon-angle-left'></i>
            </button>
            <button class='next-screen'>
              <i class='icon-angle-right'></i>
            </button>
          </div>
          <div class='walkthrough-footer'>
            <button class='button next-screen'>Next</button>
            <button class='button finish close' disabled='true'>Finish</button>
          </div>
        </div>
  </div>

</div>
<!-- end section services -->


<!-- start section portfolio -->
<div id="portfolio" class="text-center paddsection">

  <div class="container">
    <div class="section-title text-center">
      <h2 class="fs-3">My Portfolio</h2>
    </div>
  </div>

  <div class="container">
    <div>
      <p>
        Where you can see all my personal or team projects during last year as Full Stack Web Developer 
      </p>
      <p class="text-uppercase fs-5 fw-bold">
        Enjoy it!
      </p>
      <a href="/portfolio">
        <button class="button-74" role="button">
        Go Portfolio
      </button>
      <div class="img-portfolio">
        <img src="../assets/img/images/avatar.jpg" alt="">
      </div>
      </a>
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
              <p class="separator">Where you can find all my experiences during my life
              </p>

            </div>

          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="journal-info">

            <a href="/blog2"><img src="../assets/img/images/blog-post-2.jpg" class="img-responsive" alt="img"></a>

            <div class="journal-txt">

              <h4><a href="/blog2">WHERE I CAN SEE MYSELF IN 10 YEARS</a></h4>
              <p class="separator">Explain my vision on myself in 10 years 
              </p>

            </div>

          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="journal-info">

            <a href="/blog3"><img src="../assets/img/images/blog-post-3.jpg" class="img-responsive" alt="img"></a>

            <div class="journal-txt">

              <h4><a href="/blog3">WHAT I LIKE TO DO IN FREETIME</a></h4>
              <p class="separator">Tell you all my hobby and my best passion behind technology
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
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="90" style="width: 90%;">
              <span class="ut-skill-percent">90%</span>
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
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="90" style="width: 90%;">
              <span class="ut-skill-percent">90%</span>
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
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="80" style="width: 80%;">
              <span class="ut-skill-percent">80%</span>
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
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="75" style="width: 75%;">
              <span class="ut-skill-percent">75%</span>
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
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="65" style="width: 65%;">
              <span class="ut-skill-percent">65%</span>
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
            <div class="ut-skill-overlay ut-skill-active ut-initialized ut-already-visible" data-speed="1000" data-animateonce="no" data-effecttype="skillbar" data-width="50" style="width: 50%;">
              <span class="ut-skill-percent">50%</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</div>
<div>
  <hr class="space">
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

@mixin material-shadow() {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19);
}
$module-font-size: 14px;
$bezier: cubic-bezier(0.25, 0.8, 0.25, 1);



.open-walkthrough {
  border: 0;
  background: #5da3f2;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 12px;
  height: 40px;
  width: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -60px;
}

// =================================================================================================
// Walkthrough
// =================================================================================================
.walkthrough {
  @include material-shadow();
  background: linear-gradient(to right bottom, #9e66c6, #6027e1);
  border-radius: 0;
  display: none;
  flex-direction: column;
  flex: 0 0 auto;
  font-size: $module-font-size;
  height: 464px;
  overflow: hidden;
  transition: opacity 0.4s $bezier, transform 0.4s $bezier,
    box-shadow 0.4s $bezier;
  width: 280px;
  z-index: 1000;

  &.show {
    display: flex;
    opacity: 0;
    transform: translateY(72px);
  }

  &.reveal {
    opacity: 1;
    transform: translateY(0);
  }

  .walkthrough-body {
    align-items: center;
    display: flex;
    flex: 1;
    text-align: center;

    .prev-screen,
    .next-screen {
      align-self: stretch;
      background: none;
      border: 0;
      margin-top: 40px;
      color: rgba(white, 0.25);
      cursor: pointer;
      flex: 0 0 auto;
      font-size: 24px;
      opacity: 1;
      outline: none;
      padding: 16px;
      transform: scale(1);
      transition: transform 0.4s $bezier, color 0.4s $bezier,
        opacity 0.4s $bezier;
      z-index: 1000;

      &:hover,
      &:active {
        color: white;
        transform-origin: center;
        transform: scale(1.25);
      }

      &:disabled {
        opacity: 0;
      }
    }

    .prev-screen {
      order: 1;
    }

    .next-screen {
      order: 3;
    }

    .screens {
      flex: 1;
      align-self: stretch;
      position: relative;
      margin: 0 -16px;
      padding: 0;
      order: 2;

      .screen {
        position: absolute;
        list-style-type: none;
      }
    }

    .media {
      background: rgba(white, 0.25);
      border-radius: 132px;
      height: 132px;
      margin: 32px auto;
      width: 132px;
    }

    h3 {
      font-size: 15px;
      line-height: 1.4em;
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }

    p {
      line-height: 1.6em;
      font-size: 13px;
      margin-top: 16px;
      padding-top: 0;
      color: rgba(white, 0.8);
    }
  }

  .walkthrough-pagination {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 24px;

    .dot {
      background: rgba(black, 0.25);
      border-radius: 8px;
      height: 8px;
      margin: 0 4px;
      transform: scale(0.75);
      transition: transform 0.4s $bezier, background 0.4s $bezier;
      width: 8px;

      &.active {
        background: white;
        transform: scale(1);
        transition-delay: 0.4s;
      }
    }
  }

  .walkthrough-footer {
    display: flex;
    flex: 0 0 auto;
    justify-content: space-around;
    padding: 0;

    button {
      height: 40px;
      border: 0;
      background: #5da3f2;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      border-radius: 0;
      color: white;
      flex: 1;
      font-size: 12px;
      margin: 0;
      outline: 0;
      padding: 12px;
      transition: opacity 0.4s $bezier, background 0.4s $bezier;
      cursor: pointer;
      &:hover {
        background: lighten(#5da3f2, 3%);
      }
      &:active {
        background: #5da3f2;
      }

      &:disabled {
        cursor: pointer;
      }

      &.finish {
        background: #3e94f5;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        opacity: 0;
        transform: scale(0, 1);
        transform-origin: center;
        transition: opacity 0.4s $bezier, background 0.4s $bezier,
          transform 0.4s $bezier;
        &:hover {
          background: lighten(#3e94f5, 3%);
        }
        &:active {
          background: #3e94f5;
        }
        &.active {
          transform: scale(1, 1);
          opacity: 1;
        }
      }
    }
  }

  //Animation styles

  .screens {
    margin: 0;

    .media {
      .status-badge {
        left: 136px;
        opacity: 0;
        position: absolute;
        top: 104px;
        transform: scale(0);
        transition: opacity 0.4s $bezier, transform 0.4s $bezier;
        transition-delay: 0.6s;

        i {
          display: inline;
        }
      }

      &.logo {
        .logo {
          margin-top: 20px;
          opacity: 0;
          transform: translateY(-60px);
          transition: opacity 0.4s $bezier, transform 0.4s $bezier;
          width: 80px;
        }
      }
      .icon {
        position: absolute;
        opacity: 0;
        transform: translateY(-30px);
        transition: opacity 0.4s $bezier, transform 0.4s $bezier;
        width: 132px;
        left: 48px;
        top: 32px;
      }
      &.bars {
        .icon {
          transform: translate(40px, 20px);
          &:nth-of-type(2) {
            transform: scale(0.25);
            transform-origin: 30% 54%;
          }
          &:nth-of-type(3) {
            transform: scale(0.25);
            transform-origin: 30% 40%;
          }
          &:nth-of-type(4) {
            transform: scale(0.25);
            transform-origin: 30% 26%;
          }
        }
      }
      &.files {
        .icon {
          transform: translate(40px, 20px);
        }
      }
      &.comm {
        .icon {
          transform: scale(0.25);
          transform-origin: 29% 73%;

          &:nth-child(2) {
            transform-origin: 66% 85%;
          }
        }
      }
    }

    .screen {
      opacity: 0;
      position: absolute;
      transform: translateX(-72px);
      transition: all 0.4s $bezier;

      &.active {
        opacity: 1;
        transform: translateX(0) scale(1);
        transition-delay: 0.4s;

        ~ .screen {
          opacity: 0;
          transform: translateX(72px);
        }

        .media {
          .status-badge {
            opacity: 1;
            transform: scale(1.75);
          }

          &.logo {
            .logo {
              opacity: 0.8;
              transform: translateY(0);
              transition-delay: 0.6s;
            }

            .status-badge {
              transition-delay: 1s;
            }
          }

          &.books {
            .icon {
              opacity: 1;
              transform: translateY(0);
              transition-delay: 0.6s;
              &:nth-child(2) {
                transition-delay: 0.725s;
              }
              &:nth-child(3) {
                transition-delay: 0.85s;
              }
            }
            .status-badge {
              transition-delay: 1.4s;
            }
          }

          &.bars {
            .icon {
              opacity: 1;
              transform: translate(0) scale(1);
              transition-delay: 0.6s;
              &:nth-child(2) {
                transition-delay: 1.05s;
              }
              &:nth-child(3) {
                transition-delay: 0.925s;
              }
              &:nth-child(4) {
                transition-delay: 0.8s;
              }
            }
          }
          &.files {
            .icon {
              opacity: 1;
              transform: translateY(0);
              transition-delay: 0.9s;
              &:nth-child(3) {
                transition-delay: 0.8s;
              }
              &:nth-child(2) {
                transition-delay: 0.7s;
              }
              &:nth-child(1) {
                transition-delay: 0.6s;
              }
            }
            .status-badge {
              transition-delay: 1.6s;
            }
          }
          &.comm {
            .icon {
              opacity: 1;
              transform: scale(1);
              transition-delay: 0.6s;
              &:nth-child(2) {
                transition-delay: 0.8s;
              }
            }
            .status-badge {
              transition-delay: 1.6s;
            }
          }
        }
      }
    }
  }
}


/*-----------------------------------------------------------------------------------*/
/*  Portfolio
/*-----------------------------------------------------------------------------------*/

#portfolio {
  position: relative;
  padding-bottom: 50px;
}


/* CSS */
.button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding-top: 2rem;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

.img-portfolio{
  height: 100%;
  margin: 4rem;
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
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

.ut-skill-percent{
  color: white;

}

.ut-skill-name{
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.space{
  width: 100%;
  height: 30px;
  color: #898989;
  margin-top: 8rem;
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
