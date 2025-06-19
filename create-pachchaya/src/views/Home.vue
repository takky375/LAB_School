<script setup>

import Mybar from '../views/Mybar.vue';
import Mycart from '../views/Mycart.vue';
import items from '../products.json';

</script>


<template>
  <div>
    <router-view />
  </div>

  <br>

  <h1 class="topic">Mouse</h1>
  <div class="card-grid">
    <Mycart v-for="(item, index) in items.slice(0, 4)" :key="index" v-bind="item" />
  </div>

  <br><br>

  <h1 class="topic">Keyboard</h1>
  <div class="card-grid">
    <Mycart v-for="(item, index) in items.slice(4)" :key="index" v-bind="item" />
  </div>

</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

#app {
  text-align: center;
  max-width: 1300px;
  margin: 0 auto;
}


h1.topic {
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(45deg, #000000, #000000);
  background-clip: text;
  color: transparent;
  text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
  font-family: 'lato';
  margin-top: 80px;
  margin-bottom: 10px;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;
  border: 3px solid #ebebeb;
  padding: 30px;
  box-shadow: 0 15px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  /* มุมโค้งนิด ๆ */
}


@media (min-width: 576px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>