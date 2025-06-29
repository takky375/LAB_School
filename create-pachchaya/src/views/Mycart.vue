<script>
export default {
    props: ['id', 'name', 'detail', 'coverimage', 'price']

}

</script>



<template>


    <div class="card">
        <img :src="coverimage" width="300px" height="300px">
        <h2>{{ name }}</h2>
        <h5>{{ detail }}</h5>
        <p class="price">{{ price }}</p>
        <h3><button>Add to Cart</button></h3>
    </div>

</template>





<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playpen+Sans+Thai:wght@100..800&display=swap');

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  width: 300px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #ffd4d4;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

img {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 5px;
}

h2 {
  font-size: 1.2rem;
  font-family: "Lato", sans-serif;
  color: #000;
}

h5 {
  font-size: 1rem;
  font-weight: normal;
  margin: 0.5rem 0;
}

.price {
  color: red;
  font-size: 1.1rem;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.card button:hover {
  background-color: #ff0000;
}

/* Responsive Design: ปรับขนาดตามหน้าจอ */
@media (max-width: 576px) {
  .card {
    width: 90%;
  }

  h2 {
    font-size: 1rem;
  }

  .card button {
    font-size: 0.9rem;
  }
}

</style>
