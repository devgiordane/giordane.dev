<template>
  <div class="home">
    <Posts :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/components/Posts.vue";
import { getPostCat } from "@/api";
export default {
  name: "Home",
  components: {
    Posts,
  },
  data: function() {
    return {
      posts: [],
    };
  },
  async mounted() {
    this.posts = await getPostCat(`${this.$route.params.categoria}`);
  },
};
</script>
