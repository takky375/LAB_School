<template>
    <div>
      <p class="p1"> 404 - Page not Found </p> <br><br><br>
      <button @click="goHome" style="color: red;">Back to Home page !!</button>
    </div>
</template>



<script>
export default{
  name: 'NotFound',
  methods:{
    goHome(){
      this.$router.push('/');
    },
  },
};

</script>



<style scoped>

p.p1{
  font-size: 100px;
  font-weight: 600;

}

button {
  font-size: 30px;

}


</style>