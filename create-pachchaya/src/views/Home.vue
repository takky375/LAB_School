<script>
import { ref } from 'vue';

export default {
    name : 'Homepage',
    setup(){
         const Message = ref('ยินดีต้อนรับ')
         return {Message}
    }
}
</script>


<template>

  <main>
    <h1 style="text-align: center;">{{ Message }}</h1>
  </main>

</template>






<style scoped>


</style>