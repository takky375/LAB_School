<template>

    <div class="card">
        <img src="../img/Mose1_LOGITECH GAMING MOUSE G PRO 2 LIGHTSPEED PINK.jpg" width="300px" height="300px">
        <h2>LOGITECH G PRO 2 LIGHTSPEED PINK</h2>
        <p class="price">$19.99</p>
        <p>GAMING</p>
        <p><button>Add to Cart</button></p>
    </div>


    <div class="card">
        <img src="../img/Mose2_ONIKUMA Mizu Wired Gaming Mouse.PNG" width="300px" height="300px">
        <h2>ONIKUMA Mizu Wired Gaming Mouse</h2>
        <p class="price">$19.99</p>
        <p>GAMING</p>
        <p><button>Add to Cart</button></p>
    </div>

</template>
    


<script>


</script>
    



<style scoped>
.card {
/* Add shadows to create the "card" effect */
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 300px;
margin: auto;
text-align: center;
font-family: arial;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
box-shadow: 0 10px 20px 0 rgba(0,0,0,0.2);
}

img {
border-radius: 5px 5px 0 0;
}

/* Add some padding inside the card container */
.container {
padding: 2px 16px;
margin: 20px;
margin-top: 10px;
}

.price {
color: rgb(255, 0, 0);
font-size: 22px;
}

.card button {
border: none;
outline: 0;
padding: 12px;
color: white;
background-color: #000;
text-align: center;
cursor: pointer;
width: 100%;
font-size: 18px;
}

.card button:hover {
opacity: 0.7;
}

h2{
    color: #000;
}

p{
    color: #000;
    font-weight: 300;
    
}



</style>
