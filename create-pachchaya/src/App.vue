<script setup>

import Mybar from "./views/Mybar.vue";

</script>




<template>
  <div>
    <Mybar />
    <router-view />
  </div>

</template>




<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

#app {
  /* text-align: center ; */
  max-width: 1300px;
  margin: 0 auto;
}


body {
  background-color: #ffbbbb;
  padding: 10px;
}
</style>