<template>
  <div class="home">
    <Posts :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/components/Posts.vue";
import { getPosts } from "@/api";

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
    this.posts = await getPosts();
  },
};
</script>
