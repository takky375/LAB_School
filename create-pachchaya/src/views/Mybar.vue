<script>
export default {
  name: 'MyBar',
}
</script>



<template>
     <nav>
        <div class="navbar">
        <div class="logo"><a href="#"><img src="../components/icons/icon.png" alt="icon" width="60px" height="60px"></a></div>
        <ul class="menu">
            <li><router-link to="/" class="nav-link-item center">Home</router-link></li>
            <li><router-link to="/product" class="nav-link-item center">MyCart</router-link></li>
            <li><router-link to="/about" class="nav-link-item center">About</router-link></li>
        </ul>
        </div>
  </nav>
</template>





<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

}

div.logo{
  margin-top: 10px;

}


nav{
 position: sticky;
 left: 0;
 top: 0;
 width: 100%;
 height: 75px;
 background: linear-gradient(45deg, #f135b3, #ff58c7);
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
 border-radius: 10px;
}
nav .navbar{
 display: flex;
 align-items: center;
 justify-content: space-between;
 height: 100%;
 max-width: 90%;
 margin: auto;
}
nav .navbar .logo a{
  color: #fff;
  font-size: 27px;
  font-weight: 600;
  text-decoration: none;
}
nav .navbar .menu{
  display: flex;
}
.navbar .menu li{
  list-style: none;
  margin: 0 15px;
}
.navbar .menu li a{
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
}
section{
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #96c7e8;
  font-size: 70px;
}
#Home{
  background: #fff;
}
#About{
  background: #f2f2f2;
}
#Category{
  background: #e6e6e6;
}
#Latest{
  background: #fff;
}
#Contact{
  background: #f2f2f2;
}
#Feedback{
  background: #e6e6e6;
}
.button a{
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  background: #2980b9;
  padding: 7px 12px;;
  font-size: 18px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.15);
}

</style>