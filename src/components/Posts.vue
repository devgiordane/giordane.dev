<template>
  <div class="row">
    <div
      class="col-12 col-lg-4 col-md-6 pt-3"
      v-for="post in posts"
      :key="post.id"
    >
      <div class="card">
        <img :src="post.featured_image" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <router-link
            class="btn btn-primary btn-block btn-lg"
            :to="
              '/blog/' +
                post.categories[Object.keys(post.categories)[0]].slug +
                '/' +
                post.slug
            "
            >LER MAIS</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  props: ["posts"],
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.posts {
  .post {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
