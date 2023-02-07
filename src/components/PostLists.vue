<template>
    <div class="posts-list">
        <h2>lista postów</h2>
        <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"/>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],

    components: {SinglePost},

    setup(props) {
        onMounted(() =>{
            console.log('komponent załadowany')
        })
        onUpdated(() =>{
            console.log('kompnent zaktualizowany')
        })
        onUnmounted(() =>{
            console.log('kompnent odładowany :)')
        })
    }

}
</script>

<style>

</style>