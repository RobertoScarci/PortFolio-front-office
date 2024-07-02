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
                          <a class="nav-link" href="#">Acquista</a>
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

  <!-- Risultati -->
  <section>
    <div class="">
      <div class="row">
        <div class="col-6 bg-dark">
          <h1 class="text-uppercase fw-bold text-white p-3">
            Il Percorso
          </h1>
          <p class="text-white fw-bold text-uppercase p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur repellendus quibusdam iusto exercitationem suscipit natus ipsam, recusandae, quam eius iure consectetur esse ex voluptates, facere ad quis modi est?
            Asperiores delectus tempore ab id vel suscipit cum placeat dolor alias eaque cumque laudantium iusto minima, veniam recusandae aut unde est nam harum? Ex repellat ad nihil ipsum necessitatibus placeat.
            Error animi itaque illum quae recusandae quisquam voluptas. Praesentium hic incidunt placeat impedit atque, assumenda, totam corporis, a porro inventore asperiores facere adipisci animi laboriosam quibusdam temporibus! Expedita, illo ratione.
            Magni rerum ut vel eaque a ullam vitae voluptatem fuga ex, excepturi inventore voluptates recusandae omnis voluptatibus? Beatae quibusdam commodi nisi, aliquam soluta temporibus non illo. Praesentium aspernatur vel culpa?
            Laboriosam cupiditate neque dicta, autem sunt voluptatum, tenetur, placeat ducimus qui recusandae magnam ipsam aperiam saepe corporis quam ut esse et maiores molestiae. Provident impedit sapiente corporis minima adipisci doloribus?
            Ducimus maxime eum dolorem obcaecati quisquam iusto non alias tempora quo odio officia amet, soluta doloremque similique rem vitae consectetur totam architecto ipsum asperiores eos nobis dignissimos illum deserunt! Ullam.
            Earum tenetur magnam autem delectus nesciunt ducimus maiores, sit dolores, excepturi harum quasi, maxime vero quae ut! Temporibus, debitis fuga! Ratione quos quam nihil, ipsam nisi ducimus mollitia recusandae iusto?
          </p>
        </div>
        <div class="col-6 bg-dark">
          <h1 class="text-uppercase fw-bold text-white p-3">
            Esperienze
          </h1>
          <p class="text-white fw-bold text-uppercase p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur repellendus quibusdam iusto exercitationem suscipit natus ipsam, recusandae, quam eius iure consectetur esse ex voluptates, facere ad quis modi est?
            Asperiores delectus tempore ab id vel suscipit cum placeat dolor alias eaque cumque laudantium iusto minima, veniam recusandae aut unde est nam harum? Ex repellat ad nihil ipsum necessitatibus placeat.
            Error animi itaque illum quae recusandae quisquam voluptas. Praesentium hic incidunt placeat impedit atque, assumenda, totam corporis, a porro inventore asperiores facere adipisci animi laboriosam quibusdam temporibus! Expedita, illo ratione.
            Magni rerum ut vel eaque a ullam vitae voluptatem fuga ex, excepturi inventore voluptates recusandae omnis voluptatibus? Beatae quibusdam commodi nisi, aliquam soluta temporibus non illo. Praesentium aspernatur vel culpa?
            Laboriosam cupiditate neque dicta, autem sunt voluptatum, tenetur, placeat ducimus qui recusandae magnam ipsam aperiam saepe corporis quam ut esse et maiores molestiae. Provident impedit sapiente corporis minima adipisci doloribus?
            Ducimus maxime eum dolorem obcaecati quisquam iusto non alias tempora quo odio officia amet, soluta doloremque similique rem vitae consectetur totam architecto ipsum asperiores eos nobis dignissimos illum deserunt! Ullam.
            Earum tenetur magnam autem delectus nesciunt ducimus maiores, sit dolores, excepturi harum quasi, maxime vero quae ut! Temporibus, debitis fuga! Ratione quos quam nihil, ipsam nisi ducimus mollitia recusandae iusto?
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Abbonamenti Section -->
  <section class="container mt-5">
    <div class="row">
      
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

.arrow{
  background-color: black;
  width: 45px;
  height: 55px;
  padding: 1rem;
  border-radius: 20px;
}


</style>
