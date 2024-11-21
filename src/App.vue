<script setup>
import HomePage from './components/HomePage.vue'
import Blog1 from './components/Blog1.vue';

const routes = {
  '/': HomePage,
  '/blog1': Blog1
}

</script>

<template>
  <HomePage/>
  <Main/>
  
</template>

<style scoped>

</style>
