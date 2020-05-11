<template>
  <div class="row">
    <div class="col-12">
      <h2 class="text-center text-black-50">MEU APPS</h2>
    </div>
    <div class="col-lg-3 col-md-4 col-6 p-0 m-0 ">
      <router-link class="router-link" to="/apps/imc">
        <div
          class="card text-white text-center bg-success text-white rounded-0"
        >
          <div class="card-header">Conheça meu app de..</div>
          <div class="card-body">
            <h2 class="card-title">Calcular I.M.C.</h2>
            <p class="card-text">
              "é apenas um número, ele não te define."
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-12">
      <h2 class="text-center text-black-50">BLOG</h2>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12 p-0 m-0 ">
      <div class="card text-white text-center bg-primary rounded-0">
        <div class="card-header">VAMOS FALAR DE...</div>
        <div class="card-body">
          <h2 class="card-title">CSS</h2>
          <p class="card-text">
            "Nota para mim, pensar em algum texto engraçado para colocar
            aqui..."
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12 p-0 m-0">
      <div
        class="card rounded-0 text-white text-center bg-javascript text-dark"
      >
        <div class="card-header">VAMOS FALAR DE...</div>
        <div class="card-body">
          <h2 class="card-title">JavaScript</h2>
          <p class="card-text">
            Tem bastante dele por aqui, eu posso sentir.
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12 p-0 m-0">
      <div class="card rounded-0 text-white text-center bg-vue">
        <div class="card-header">VAMOS FALAR DE...</div>
        <div class="card-body">
          <h2 class="card-title">Vue JS</h2>
          <p class="card-text">
            ❤️
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Posts from "@/components/Posts.vue";

export default {
  name: "Home",
  components: {
    // Posts,
  },
};
</script>
