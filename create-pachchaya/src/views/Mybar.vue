<template>

    <div>
    <ul class="nav-links">
        <li class=""><a href="#">HOME</a></li>
        <li class=""><a href="#">Promotion</a></li>
        <li class=""><a href="#">Contact</a></li>
        <li class=""><a href="#">About</a></li>
    </ul>

    <br>  
    </div>
    
    
</template>
  
  
  

<script>

</script>
  

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playpen+Sans+Thai:wght@100..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

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
    padding: 10px 20px;
    box-shadow: 10px 20px 80px rgba(0,0,0,0.2);
    font-family: 'Oswald';
    flex-wrap: wrap;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
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
  }

  .nav-links li a:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0%;
    background: #ffffff;
    transition: all 0.2s ease;
  }

  .nav-links li a:hover:before {
    width: 100%;
  }

  /* 👇 Responsive: แท็บเล็ต (แนวตั้ง/แนวนอน) */
  @media (max-width: 768px) {
    .nav-links {
      gap: 30px;
      padding: 10px;
    }

    .nav-links li a {
      font-size: 20px;
    }
  }

  /* 👇 Responsive: มือถือ */
  @media (max-width: 480px) {
    .nav-links {
      flex-direction: column;
      gap: 12px;
      align-items: center;
      padding: 12px 10px;
    }

    .nav-links li {
      margin: 0;
    }

    .nav-links li a {
      font-size: 18px;
    }
  }
</style>

  