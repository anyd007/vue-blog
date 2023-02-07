<template>
  <div class="home">
    <h1>Dom</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostLists :posts="posts" />
    </div>
    <div v-else>
      <h3>Wczytywanie....</h3>
    </div>
  </div>
</template>

<script>
import PostLists from "../components/PostLists.vue";
import { computed } from "@vue/runtime-core";
import getPosts from '../composables/getPosts'

export default {
  name: "Home",
  components: { PostLists },
  setup() {
  
    const {posts, error, load} = getPosts()

    load()
    
    return { posts, error };
  },
};
</script>

<style>
</style>
