<template>
  <div class="post">
    <router-link :to="{name: 'Details', params: {id: post.id}}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippit }}</p>
    <span v-for="tag in post.tags" :key="tag">&nbsp; #{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";

export default {
  props: ["post"],

  setup(props) {
    const snippit = computed(() => {
      return props.post.body.substring(0, 100) + "....";
    });

    return { snippit };
  },
};
</script>

<style>
</style>