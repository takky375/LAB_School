<template>

  <div>
    <ul class="nav-links">
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/Promotion">Promotion</router-link></li>
      <li><router-link to="/Contact">Contact</router-link></li>
      <li><router-link to="/About">About</router-link></li>
    </ul>

  </div>

</template>



<script>

</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Lato:wght@400;700&family=Oswald:wght@300..700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  background: #ff3a6c;
  padding: 10px 60px;
  box-shadow: 10px 20px 80px rgba(0, 0, 0, 0.2);
  font-family: 'Oswald', sans-serif;
  flex-wrap: wrap;
  position: static; /* หรือแค่ลบ position ออกไป */

}

.nav-links li {
  list-style: none;
  font-size: 20px;
}

.nav-links li a {
  position: relative;
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
  padding: 6px 12px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links li a:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: #ffffff;
  transition: width 0.3s ease;
}

.nav-links li a:hover:before {
  width: 100%;
}

/* Responsive: แท็บเล็ต */
@media (max-width: 480px) {
  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 8px 10px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-links li a {
    font-size: 14px;
    padding: 4px 8px;
  }
}
</style>