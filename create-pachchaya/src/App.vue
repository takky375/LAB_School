<script setup>
import Mybar from './views/Mybar.vue';

</script>

<template>
  <div id="app">
    <header>
      <mybar />
    </header> 
     <router-view />
  </div>
</template>






<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

#app {
  text-align: center;
  max-width: 1300px;
  margin: 0 auto;
}


body {
  background-color: #ffbbbb;
  padding: 20px;
}


h1.topic {
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(45deg, #000000, #000000);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
  font-family: 'lato';
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