<script setup>


</script>

<template>

   <!-- start section nav -->
<nav id="main-nav" style="display: inline;">
  <div class="row">
    <div class="container">

      <div class="logo">
        <a href="/"><img src="../assets/img/images/logo.png" alt="logo"></a>
      </div>

      <div class="responsive"><i data-icon="m" class="ion-navicon-round"></i></div>

      <ul class="nav-menu list-unstyled">
        <li><a href="/" class="smoothScroll">Home</a></li>
      </ul>

    </div>
  </div>
</nav>
<!-- end section nav -->

  <!-- start section main content -->
  <div class="main-content paddsection">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-md-offset-2">
          <div class="row">
            <div class="container-main single-main">
              <div class="col-md-12">
                <div class="block-main mb-30">
                  <img src="../assets/img/images/blog-post-big.jpg" class="img-responsive w-100" alt="reviews2">
                  <div class="content-main single-post padDiv">
                    <div class="journal-txt">
                      <h4><a href="#">SO LETS MAKE THE MOST IS BEAUTIFUL</a></h4>
                    </div>
                    <div class="post-meta">
                      <ul class="list-unstyled mb-0">
                        <li class="author">by:<a href="#">Roberto Scarci</a></li>
                        <li class="date">date:<a href="#">December 31, 2024</a></li>
                        <li class="commont"><i class="ion-ios-heart-outline"></i><a href="#">3 Comments</a></li>
                      </ul>
                    </div>
                    <p class="mb-30">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
                      sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <p class="mb-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <blockquote>If you are still looking for that one person who will change your life, take a look in the mirror.</blockquote>
                    <p class="mb-30">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                      1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                      "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="comments text-left padDiv mb-30">
                  <div class="entry-comments">
                    <ul class="entry-comments-list list-unstyled">
                      <li>
                        <div class="entry-comments-item">
                          <img src="../assets/img/images/avatar.jpg" class="entry-comments-avatar" alt="">
                          <div class="entry-comments-body">
                            <span class="entry-comments-author">Sara Smith</span>
                            <span><a href="#">feb 14, 2025 at 12:48 pm</a></span>
                            <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam justo, ullamcorper tincidunt pellentesque in, condimentum ut enim. Aenean at pharetra diam, quis vulputate urna. </p>
                            <a class="rep" href="#">Reply</a>
                          </div>
                        </div>
                        <ul class="entry-comments-reply list-unstyled">
                          <li>
                            <div class="entry-comments-item">
                              <img src="../assets/img/images/avatar.jpg" class="entry-comments-avatar" alt="">
                             
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div class="entry-comments-item">
                          <img src="../assets/img/images/avatar.jpg" class="entry-comments-avatar" alt="">
                          <div class="entry-comments-body">
                            <span class="entry-comments-author">Andrew Lupkin</span>
                            <span><a href="#">fev 14, 2018 at 12:55 pm</a></span>
                            <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam justo, ullamcorper tincidunt pellentesque in, condimentum ut enim. Aenean at pharetra diam, quis vulputate urna. </p>
                            <a class="rep" href="#">Reply</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="cmt padDiv">
                  <form id="comment-form" method="post" action="" role="form">
                    <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Name *" required="required">
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <input id="form_email" type="email" name="email" class="form-control" placeholder="email *" required="required">
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input id="form_name" type="text" name="website" class="form-control" placeholder="Website">
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group">
                            <textarea id="form_message" name="message" class="form-control" placeholder="Message *" style="height: 200px;" required="required"></textarea>
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
      </div>
    </div>
  </div>
  <!--  </div> -->
  <!-- start section main content -->

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

      <p>&copy; Copyrights Folio. All rights reserved.</p>

      <div class="credits">
        <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Folio
        -->
        Designed by <a href="https://bootstrapmade.com/">Roberto Scarci</a>
      </div>

    </div>
  </div>

</template>


<style lang="scss" scoped>


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

/*-----------------------------------------------------------------------------------*/

/*  /* Single page */

/*-----------------------------------------------------------------------------------*/

/* main content */

.main-content {
  background: #f7f7f7;
}

.main-content .container-main {
  display: inline-block;
  width: 100%;
}

.main-content .container-main .block-main {
  margin-bottom: 32px;
  overflow: hidden;
}

.container-main .block-main .content-main {
  background: #fff none repeat scroll 0 0;
  display: inline-block;
  width: 100%;
}

.journal-txt h4 a {
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 2rem;
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

.journal-txt h4 a:hover {
  color: #b8a07e;
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}

.post-meta ul li {
  font-size: 12px;
  font-weight: normal;
  margin-left: 8.5px;
  margin-right: 8.5px;
  text-transform: capitalize;
  display: inline-block;
  float: none;
}

.content-main .post-meta a {
  color: #a2a2a2;
  margin-left: 5px;
}

/* Commonts */

.comments {
  background: #fff;
}

.entry-comments h6 {
  margin-right: 10px;
  font-size: 13px;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.entry-comments-item {
  margin-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #f2f2f2;
}

.entry-comments-avatar {
  position: absolute;
  display: block;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

.entry-comments-body {
  padding-left: 86px;
}

.entry-comments-author {
  margin-right: 10px;
  font-size: 13px;
  color: #292929;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.rep {
  font-size: 13px;
  color: #292929;
  letter-spacing: 0.1em;
  font-weight: 500;
  text-transform: capitalize;
}

.entry-comments span a {
  font-size: 13px;
  color: #999;
}

.entry-comments-reply {
  padding-left: 10%;
}

/* Commonts form */

.cmt {
  background: #fff;
}

blockquote {
  padding: 40px;
  background-color: #f2f2f2;
  margin: 30px 0;
  border: none;
  border-left: 4px solid #b8a07e;
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




</style>