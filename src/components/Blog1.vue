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

</template>


<style lang="scss" scoped>


// Nav 
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



</style>