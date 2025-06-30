<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
const product = ref(null)

onMounted(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      product.value = data
    })
    .catch((error) => {
      console.error('Error fetching product:', error)
    })
})
</script>

<template>
  <div v-if="product" class="container">
    <div class="left-column">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="right-column">
      <div class="product-description">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <p class="product-price">Price: ${{ product.price }}</p>
        <router-link to="/products">
          <button class="cart-btn">Back to Products</button>
        </router-link>
      </div>
    </div>
  </div>

  <div v-else>
    <h1>Product not found or loading...</h1>
  </div>
</template>



<style scoped>
/* Basic Styling */
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.left-column {
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-column img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
}

.right-column {
  flex: 1 1 300px;
  padding: 10px;
}

.product-description {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-description h1 {
  font-size: 32px;
  font-weight: 700;
  color: #222;
}

.product-description p {
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
}

.product-price {
  font-size: 22px;
  color: #e63946;
  font-weight: 600;
}

.cart-btn {
  padding: 12px 24px;
  background: linear-gradient(to right, #06beb6, #48b1bf);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  width: fit-content;
}

.cart-btn:hover {
  background: linear-gradient(to right, #48b1bf, #06beb6);
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 20px;
  }

  .left-column img {
    max-width: 90%;
    height: auto;
  }

  .product-description h1 {
    font-size: 26px;
    text-align: center;
  }

  .product-description p {
    text-align: center;
  }

  .cart-btn {
    margin: 0 auto;
  }
}

</style>
