<script>
export default {
  name: 'MyBar',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<template>
  <nav>
    <div class="navbar">
      <div class="logo">
        <a href="#"><img src="../components/icons/icon.png" alt="icon" width="60px" height="60px"></a>
      </div>

      <!-- Hamburger icon -->
      <div class="hamburger" @click="toggleMenu">
        ☰
      </div>

      <ul :class="['menu', { 'active': isOpen }]">
        <li><router-link to="/" class="nav-link-item center">Home</router-link></li>
        <li><router-link to="/products" class="nav-link-item center">MyCart</router-link></li>
        <li><router-link to="/about" class="nav-link-item center">About</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

nav {
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 75px;
  background: linear-gradient(45deg, #f135b3, #ff58c7);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 10;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 90%;
  margin: auto;
}

.logo {
  margin-top: 10px;
}

.menu {
  display: flex;
  list-style: none;
  transition: all 0.3s ease;
}

.menu li {
  margin: 0 15px;
}

.menu li a {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
}

/* Hamburger */
.hamburger {
  display: none;
  font-size: 28px;
  color: white;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .menu {
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #ff58c7;
    display: none;
  }

  .menu.active {
    display: flex;
  }

  .menu li {
    text-align: center;
    margin: 10px 0;
  }
}
</style>
