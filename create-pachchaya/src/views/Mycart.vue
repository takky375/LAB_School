<script>
export default {
  name: "Mycart",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      default: "",
    },
    coverimage: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="coverimage" :alt="name" />
    <h2>{{ name }}</h2>
    <h5>{{ detail }}</h5>
    <p class="price">{{ price }}</p>
    <button>Add to Cart</button>
    <router-link :to="`/products/${id}`" class="details-btn">
      View Details</router-link>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Lato&display=swap');

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffd4d4;
  border-radius: 12px;
  border: 1px solid #ddd;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: auto;
  max-height: 260px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

h2 {
  font-size: 1.1rem;
  font-family: 'Lato', sans-serif;
  color: #222;
  margin: 8px 0;
  text-align: center;
}

h5 {
  font-size: 0.95rem;
  color: #444;
  text-align: center;
  margin-bottom: 10px;
}

.price {
  font-size: 1.2rem;
  color: #e63946;
  font-weight: bold;
  margin-bottom: 12px;
}

.card button {
  border: none;
  padding: 10px;
  margin-bottom: 8px;
  background-color: #000;
  color: white;
  font-size: 1rem;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card button:hover {
  background-color: #e63946;
}

.details-btn {
  display: block;
  text-align: center;
  background-color: #000000;
  color: white;
  padding: 10px;
  margin-top: 8px;
  border-radius: 6px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  width: 92%;
}

.details-btn:hover {
  background-color: #e63946;
}


/* Responsive */
@media (max-width: 768px) {
  .card {
    max-width: 90%;
    padding: 14px;
  }

  h2 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.9rem;
  }

  .card button {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 12px;
  }

  h2 {
    font-size: 0.95rem;
  }

  .price {
    font-size: 1.1rem;
  }

  .card button {
    font-size: 0.9rem;
    padding: 9px;
  }
}
</style>
