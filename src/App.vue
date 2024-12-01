<script >

import HomePage from './components/HomePage.vue'
import Blog1 from './components/Blog1.vue';
import Blog2 from './components/Blog2.vue';
import Blog3 from './components/Blog3.vue';

export default{
    components: { HomePage, Blog1, Blog2, Blog3 }
}


</script>

<template>

  <router-view></router-view>
  
</template>

<style scoped>

</style>
