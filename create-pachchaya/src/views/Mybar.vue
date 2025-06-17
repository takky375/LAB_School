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
  /* Google Fonts Import Link */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  .nav-links {
    display: flex;
    justify-content: center;
    background: #ff3a6c;
    padding: 20px 50px;
    border-radius: 12px;
    box-shadow: 10px 20px 80px rgba(0,0,0,0.2);
    flex-wrap: wrap;
  }

  .nav-links li {
    list-style: none;
    margin: 10px 30px;
    font-size: 20px;
  }

  .nav-links li a {
    position: relative;
    color: #ffffff;
    font-size: 20px;
    font-weight: 800;
    padding: 6px 0;
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


  .bodytext {
    color: black;
    text-align: center;
  }

  /* Responsive part */
  @media (max-width: 768px) {
    .nav-links {
      padding: 15px 20px;
    }

    .nav-links li {
      margin: 10px 15px;
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    .nav-links {
      flex-direction: column;
      align-items: center;
      padding: 10px 10px;
    }

    .nav-links li {
      margin: 8px 0;
    }
  }
</style>

  