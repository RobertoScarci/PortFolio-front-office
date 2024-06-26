<script setup>


</script>

<template>
  <div id="app">
  <!-- Header -->
  <header class="text-center">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="https://t4.ftcdn.net/jpg/04/35/60/49/360_F_435604903_8bWKQf9y1MWYBeG2o5UjwlHHWW8Gl6Kk.jpg" alt="Logo" width="100" height="60" class="d-inline-block align-text-top"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Risultati</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Chi Siamo</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Contattaci</a>
                        </li>
                      </ul>
                      <form class="d-flex p-3" role="search">
                        <button type="button" class="btn btn-dark">Accedi</button>
                      </form>
                </div>
          </div>
    </nav>

  </header>

  <section>
      <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://media.gqitalia.it/photos/5d935254b1322f0008a46f71/16:9/w_2560%2Cc_limit/GettyImages-655781960.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="https://www.projectinvictus.it/wp-content/uploads/2022/08/risultati-palestra-scaled.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="https://www.fitonyou.it/wp-content/themes/fitonyou23/images/allenamento-con-personal-trainer-roma-palestra-fit-on-you.jpg" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
      </div>
  </section>

  <!-- Projects Section -->
  <section class="container mt-5">
    <div class="row">
      <div v-for="(project, index) in projects" :key="index" class="col-lg-4 mb-4">
        <div class="card h-100 shadow project-card">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.url" class="btn btn-primary">Vai al Progetto</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

</template>

<style lang="scss" scoped>

body {
      background-color: #f8f9fa;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    header {
      color: #fff;
      padding: 0px 0;
    }
    header h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    header p {
      font-size: 18px;
    }
    .project-card {
      transition: transform 0.3s ease-in-out;
    }
    .project-card:hover {
      transform: translateY(-5px);
    }

</style>
