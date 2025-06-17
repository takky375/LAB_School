<template>

    <div class="card">
        <img :src="coverimage" width="300px" height="300px">
        <h2>{{name}}</h2>
        <h5>{{detail}}</h5>
        <p class="price">{{price}}</p>
        <h3><button>Add to Cart</button></h3>
    </div>

</template>
    


<script>
export default{
    props: ['id', 'name', 'detail', 'coverimage', 'price']

}

</script>
    



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playpen+Sans+Thai:wght@100..800&display=swap');

h2{
    color: #000;
    font-size: 20px;
    font-family: "Lato", sans-serif;

}

p{
    color: #000;
    font-weight: 10;
    
}



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

div.card{
    background-color: #ffe0e0;
    border: 2px solid #ddd;
    border-radius: 8px; /* มุมโค้งนิด ๆ */
    padding: 5px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

}

div.card:hover {
    transform: scale(1.05);
}




</style>
