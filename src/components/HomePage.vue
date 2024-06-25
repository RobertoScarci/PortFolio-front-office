<script setup>


</script>

<template>
  <div id="app">
  <!-- Header -->
  <header class="text-center">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://banner2.cleanpng.com/20180708/bs/kisspng-bacardi-cocktail-martini-cocktail-glass-logo-cocktail-logo-5b42630719a652.9189521615310773831051.jpg" alt="Logo" width="50" height="40" class="d-inline-block align-text-top"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cocktails</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Chi Siamo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contattaci</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  </header>

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
      font-family: Arial, sans-serif;
    }
    header {
      background-color: #343a40;
      color: #fff;
      padding: 60px 0;
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
