<template>
  <div class="about">
    <h1>{{ post.title }}</h1>
    <div class="row">
      <div class="col-12" v-html="post.content"></div>
    </div>
  </div>
</template>
<script>
import { getPost } from "@/api";
export default {
  data: function() {
    return {
      post: [],
    };
  },
  async mounted() {
    this.post = await getPost(`${this.$route.params.post.toLowerCase()}`);
  },
};
</script>
