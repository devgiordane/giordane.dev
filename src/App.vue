<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Dev_ Giordane</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/variables";
@import "bootstrap/scss/bootstrap";
@import "./assets/scss/bootswatch";
.router-link * {
  text-decoration: none;
}
</style>
